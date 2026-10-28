/**
 * 划词翻译定制版：配置同步核心逻辑
 *
 * 供 sync.html 与设置页内嵌卡片共用。
 * 同步逻辑参考 yetone/magpie 的 GitHub 实现：
 * 只连接 api.github.com、只允许私有仓库、用文件 blob SHA 做版本比对、
 * 写入时携带 SHA 以避免覆盖远端的新版本。
 */
(() => {
  const API_BASE = 'https://api.github.com';
  const SYNC_CONFIG_KEY = 'hcfySyncConfig';
  const SYNC_META_KEY = 'hcfySyncMeta';
  const DEFAULT_PATH = 'hcfy-config.json';
  const DEFAULT_CONCURRENCY = 8;
  const CONFIG_FORMAT = 'hcfy-config';
  const CONFIG_VERSION = 2;
  const IDB_NAME = 'hcfy';
  const FAVORITES_STORE = 'favorites';
  const HISTORY_STORE = 'historyRecords';

  /** 这些键不参与同步：令牌、同步记录、额度计数与扩展内部状态。 */
  const EXCLUDED_KEYS = new Set([SYNC_CONFIG_KEY, SYNC_META_KEY, 'pageTranslateLimit']);

  const isExcludedKey = (key) => EXCLUDED_KEYS.has(key) || key.startsWith('__');

  /* ---------- 编码 ---------- */

  function bytesToBase64(bytes) {
    let binary = '';
    const chunk = 0x8000;
    for (let i = 0; i < bytes.length; i += chunk) {
      binary += String.fromCharCode.apply(null, bytes.subarray(i, i + chunk));
    }
    return btoa(binary);
  }

  function base64ToBytes(base64) {
    const binary = atob(base64.replace(/\s/g, ''));
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i += 1) bytes[i] = binary.charCodeAt(i);
    return bytes;
  }

  const textToBase64 = (text) => bytesToBase64(new TextEncoder().encode(text));
  const base64ToText = (base64) => new TextDecoder().decode(base64ToBytes(base64));

  /* ---------- 存储 ---------- */

  async function readLocalConfig() {
    return chrome.storage.local.get(null);
  }

  async function readConfig() {
    const { [SYNC_CONFIG_KEY]: config } = await chrome.storage.local.get(SYNC_CONFIG_KEY);
    return { repo: '', branch: '', path: DEFAULT_PATH, token: '', ...(config || {}) };
  }

  async function saveConfig(input) {
    const repo = String(input.repo || '').trim();
    const branch = String(input.branch || '').trim();
    const path = String(input.path || '').trim() || DEFAULT_PATH;
    const token = String(input.token || '').trim();

    if (repo && !/^[^/\s]+\/[^/\s]+$/.test(repo)) {
      throw new Error('仓库地址格式应为 owner/repo。');
    }
    if (branch.includes('..')) {
      throw new Error('分支名不合法。');
    }

    const previous = await readConfig();
    const config = { repo, branch, path, token: token || previous.token };
    await chrome.storage.local.set({ [SYNC_CONFIG_KEY]: config });
    return config;
  }

  async function readMeta() {
    const { [SYNC_META_KEY]: meta } = await chrome.storage.local.get(SYNC_META_KEY);
    return meta || null;
  }

  async function getConcurrency() {
    const { pageTrsConcurrency } = await chrome.storage.local.get({
      pageTrsConcurrency: DEFAULT_CONCURRENCY,
    });
    return pageTrsConcurrency;
  }

  async function saveConcurrency(value) {
    const next = Math.floor(Number(value));
    if (!Number.isFinite(next) || next < 1 || next > 16) {
      throw new Error('请输入 1–16 之间的整数。');
    }
    await chrome.storage.local.set({ pageTrsConcurrency: next });
    return next;
  }

  /* ---------- 收藏夹 / 历史记录（IndexedDB） ---------- */

  function openDb() {
    return new Promise((resolve, reject) => {
      if (!indexedDB) return resolve(null);
      const request = indexedDB.open(IDB_NAME);
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
      request.onblocked = () => resolve(null);
    });
  }

  function readStore(db, storeName) {
    if (!db || !db.objectStoreNames.contains(storeName)) return Promise.resolve([]);
    return new Promise((resolve, reject) => {
      const request = db.transaction(storeName, 'readonly').objectStore(storeName).getAll();
      request.onsuccess = () => resolve((request.result || []).filter((record) => !record.deleted));
      request.onerror = () => reject(request.error);
    });
  }

  async function mergeStore(db, storeName, records) {
    if (!db || !db.objectStoreNames.contains(storeName) || !Array.isArray(records)) return 0;
    const existing = await readStore(db, storeName);
    const existingIds = new Set(existing.map((record) => record.id));
    const toAdd = records.filter((record) => record && record.id && !existingIds.has(record.id));
    if (!toAdd.length) return 0;
    return new Promise((resolve, reject) => {
      const tx = db.transaction(storeName, 'readwrite');
      const store = tx.objectStore(storeName);
      toAdd.forEach((record) => {
        try {
          store.put({ ...record, syncStatus: 'Pending' });
        } catch (e) {}
      });
      tx.oncomplete = () => resolve(toAdd.length);
      tx.onerror = () => reject(tx.error);
      tx.onabort = () => reject(tx.error);
    });
  }

  async function readCollections() {
    const db = await openDb();
    if (!db) return { favorites: [], history: [] };
    try {
      const [favorites, history] = await Promise.all([
        readStore(db, FAVORITES_STORE),
        readStore(db, HISTORY_STORE),
      ]);
      return { favorites, history };
    } finally {
      db.close();
    }
  }

  /* ---------- GitHub ---------- */

  function describeHttpError(status, payload, headers) {
    if (status === 401) return 'Token 无效或已过期（HTTP 401），请重新生成并保存。';
    if (status === 403) {
      if (headers.get('X-RateLimit-Remaining') === '0') {
        const reset = Number(headers.get('X-RateLimit-Reset'));
        const when = reset ? new Date(reset * 1000).toLocaleString() : '稍后';
        return `GitHub 接口触发限流（HTTP 403），请于 ${when} 后再试。`;
      }
      return `GitHub 拒绝访问（HTTP 403）：请确认 Token 拥有目标仓库的 Contents 读写权限。${payload?.message ? `（${payload.message}）` : ''}`;
    }
    if (status === 404) {
      return 'GitHub 找不到仓库、分支或文件（HTTP 404）：请检查仓库名、分支和 Token 的仓库访问范围。';
    }
    if (status === 409) return '远端内容已被其他设备更新（HTTP 409），请先下载最新配置再上传。';
    if (status === 422) {
      return `GitHub 拒绝了本次请求（HTTP 422）${payload?.message ? `：${payload.message}` : '。'}`;
    }
    return `GitHub 返回 HTTP ${status}${payload?.message ? `：${payload.message}` : ''}`;
  }

  async function request(config, path, init = {}) {
    const response = await fetch(`${API_BASE}${path}`, {
      ...init,
      headers: {
        Authorization: `Bearer ${config.token}`,
        Accept: 'application/vnd.github+json',
        'X-GitHub-Api-Version': '2022-11-28',
      },
    });
    const text = await response.text();
    let payload = null;
    if (text) {
      try {
        payload = JSON.parse(text);
      } catch (e) {
        payload = null;
      }
    }
    if (!response.ok) {
      const error = new Error(describeHttpError(response.status, payload, response.headers));
      error.status = response.status;
      throw error;
    }
    return payload;
  }

  function assertConfig(config) {
    if (!/^[^/\s]+\/[^/\s]+$/.test(config.repo)) {
      throw new Error('请填写正确格式的仓库地址，例如 owner/repo。');
    }
    if (!config.token) {
      throw new Error('请填写 GitHub Token。');
    }
  }

  async function checkRepository(config) {
    const repo = await request(config, `/repos/${config.repo}`);
    if (repo.private !== true) {
      throw new Error('目标仓库不是私有仓库。为避免配置历史泄露，请改用私有仓库。');
    }
    return repo.default_branch || '';
  }

  function apiPath(config) {
    const filePath = (config.path || DEFAULT_PATH).replace(/^\/+/, '');
    const encoded = filePath.split('/').map(encodeURIComponent).join('/');
    const query = config.branch ? `?ref=${encodeURIComponent(config.branch)}` : '';
    return `/repos/${config.repo}/contents/${encoded}${query}`;
  }

  async function fetchRemoteFile(config) {
    try {
      return await request(config, apiPath(config));
    } catch (error) {
      if (error.status === 404) return null;
      throw error;
    }
  }

  async function buildPayload(storage) {
    const data = {};
    for (const [key, value] of Object.entries(storage)) {
      if (!isExcludedKey(key)) data[key] = value;
    }
    const { favorites, history } = await readCollections();
    return {
      format: CONFIG_FORMAT,
      version: CONFIG_VERSION,
      app: 'crx-selection-translate',
      exportedAt: new Date().toISOString(),
      data,
      favorites,
      history,
    };
  }

  function validatePayload(payload) {
    if (payload?.format !== CONFIG_FORMAT || !payload.data || typeof payload.data !== 'object') {
      throw new Error('这不是有效的划词翻译配置文件。');
    }
    const data = {};
    for (const [key, value] of Object.entries(payload.data)) {
      if (!isExcludedKey(key)) data[key] = value;
    }
    return {
      data,
      favorites: Array.isArray(payload.favorites) ? payload.favorites : [],
      history: Array.isArray(payload.history) ? payload.history : [],
    };
  }

  async function testConnection(config) {
    assertConfig(config);
    const defaultBranch = await checkRepository(config);
    const branch = config.branch || defaultBranch;
    const remote = await fetchRemoteFile(config);
    const note = branch
      ? `连接成功：私有仓库可访问，分支 ${branch}。${remote ? '远端已存在配置文件。' : '远端还没有配置文件，可先上传。'}`
      : '连接成功，但仓库还是空的：首次上传会自动创建默认分支。';
    return note;
  }

  async function upload(config) {
    assertConfig(config);
    await checkRepository(config);
    const payload = await buildPayload(await readLocalConfig());
    const text = JSON.stringify(payload, null, 2);
    const remote = await fetchRemoteFile(config);
    const body = {
      message: `hcfy config sync ${new Date().toISOString()}`,
      content: textToBase64(text),
    };
    if (config.branch) body.branch = config.branch;
    if (remote?.sha) body.sha = remote.sha;

    const filePath = (config.path || DEFAULT_PATH).replace(/^\/+/, '');
    const result = await request(
      config,
      `/repos/${config.repo}/contents/${filePath.split('/').map(encodeURIComponent).join('/')}`,
      { method: 'PUT', body: JSON.stringify(body) },
    );

    const sha = result?.content?.sha || '';
    await chrome.storage.local.set({
      [SYNC_META_KEY]: {
        sha,
        syncedAt: new Date().toISOString(),
        direction: 'upload',
        repo: config.repo,
        path: config.path,
        branch: config.branch,
      },
    });
    return {
      count: Object.keys(payload.data).length,
      favorites: payload.favorites.length,
      history: payload.history.length,
      sha,
    };
  }

  async function download(config) {
    assertConfig(config);
    await checkRepository(config);
    const remote = await fetchRemoteFile(config);
    if (!remote) throw new Error('远端还没有配置文件，请先上传一次。');

    const meta = await readMeta();
    if (meta?.sha && remote.sha === meta.sha) {
      return { unchanged: true };
    }

    const payload = JSON.parse(base64ToText(remote.content || ''));
    const { data, favorites, history } = validatePayload(payload);
    await chrome.storage.local.set(data);

    let addedFavorites = 0;
    let addedHistory = 0;
    const db = await openDb();
    if (db) {
      try {
        addedFavorites = await mergeStore(db, FAVORITES_STORE, favorites);
        addedHistory = await mergeStore(db, HISTORY_STORE, history);
      } finally {
        db.close();
      }
    }

    await chrome.storage.local.set({
      [SYNC_META_KEY]: {
        sha: remote.sha,
        syncedAt: new Date().toISOString(),
        direction: 'download',
        repo: config.repo,
        path: config.path,
        branch: config.branch,
      },
    });
    return {
      count: Object.keys(data).length,
      addedFavorites,
      addedHistory,
      sha: remote.sha,
    };
  }

  async function exportConfig() {
    const payload = await buildPayload(await readLocalConfig());
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const stamp = new Date().toISOString().replace(/[:T]/g, '-').slice(0, 19);
    const link = document.createElement('a');
    link.href = url;
    link.download = `hcfy-config-${stamp}.json`;
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  async function importConfig(file) {
    if (!file) return { count: 0 };
    const { data, favorites, history } = validatePayload(JSON.parse(await file.text()));
    await chrome.storage.local.set(data);
    let addedFavorites = 0;
    let addedHistory = 0;
    const db = await openDb();
    if (db) {
      try {
        addedFavorites = await mergeStore(db, FAVORITES_STORE, favorites);
        addedHistory = await mergeStore(db, HISTORY_STORE, history);
      } finally {
        db.close();
      }
    }
    return { count: Object.keys(data).length, addedFavorites, addedHistory };
  }

  window.HcfySync = {
    readConfig,
    saveConfig,
    readMeta,
    getConcurrency,
    saveConcurrency,
    testConnection,
    upload,
    download,
    exportConfig,
    importConfig,
    readCollections,
  };
})();
