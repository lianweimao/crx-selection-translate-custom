/**
 * 划词翻译定制版：独立配置同步页面
 * 逻辑复用 sync-core.js（window.HcfySync）。
 */

const $ = (id) => document.getElementById(id);

function setStatus(el, message, kind) {
  el.textContent = message;
  el.classList.remove('error', 'success');
  if (kind) el.classList.add(kind);
}

function formatTime(iso) {
  if (!iso) return '';
  const date = new Date(iso);
  return Number.isNaN(date.getTime()) ? iso : date.toLocaleString();
}

async function loadForm() {
  const config = await window.HcfySync.readConfig();
  $('repo').value = config.repo || '';
  $('branch').value = config.branch || '';
  $('path').value = config.path || 'hcfy-config.json';
  $('token').value = '';
  $('concurrency').value = await window.HcfySync.getConcurrency();

  const meta = await window.HcfySync.readMeta();
  if (meta) {
    const parts = [`上次同步：${formatTime(meta.syncedAt)}`];
    if (meta.direction) parts.push(meta.direction === 'upload' ? '上传' : '下载');
    if (meta.sha) parts.push(`版本 ${meta.sha.slice(0, 8)}`);
    $('sync-meta').textContent = parts.join(' · ');
  }
}

function collect() {
  return {
    repo: $('repo').value.trim(),
    branch: $('branch').value.trim(),
    path: $('path').value.trim(),
    token: $('token').value.trim(),
  };
}

async function saveForm() {
  await window.HcfySync.saveConfig(collect());
  $('token').value = '';
  setStatus($('sync-status'), '设置已保存。', 'success');
}

async function handleSaveConcurrency() {
  const value = await window.HcfySync.saveConcurrency($('concurrency').value);
  $('concurrency').value = value;
  setStatus($('concurrency-status'), '已保存，下次开启全文翻译时生效。', 'success');
}

async function handleTestConnection() {
  await saveForm();
  setStatus($('sync-status'), '正在测试连接……');
  const note = await window.HcfySync.testConnection(await window.HcfySync.readConfig());
  setStatus($('sync-status'), note, 'success');
}

async function handleUpload() {
  await saveForm();
  setStatus($('sync-status'), '正在上传……');
  const result = await window.HcfySync.upload(await window.HcfySync.readConfig());
  setStatus(
    $('sync-status'),
    `上传成功，共同步 ${result.count} 项配置${result.sha ? `，版本 ${result.sha.slice(0, 8)}` : ''}。`,
    'success',
  );
  await loadForm();
}

async function handleDownload() {
  await saveForm();
  setStatus($('sync-status'), '正在下载……');
  const result = await window.HcfySync.download(await window.HcfySync.readConfig());
  setStatus(
    $('sync-status'),
    result.unchanged
      ? '远端版本与上次同步一致，没有新内容。'
      : `下载成功，已写入 ${result.count} 项配置。请刷新已打开的页面；部分设置需重新加载扩展后生效。`,
    'success',
  );
  await loadForm();
}

function bind() {
  $('save-concurrency').addEventListener('click', () => {
    handleSaveConcurrency().catch((error) => setStatus($('concurrency-status'), error.message, 'error'));
  });
  $('save-config').addEventListener('click', () => {
    saveForm().catch((error) => setStatus($('sync-status'), error.message, 'error'));
  });
  $('test-connection').addEventListener('click', () => {
    handleTestConnection().catch((error) => setStatus($('sync-status'), error.message, 'error'));
  });
  $('upload').addEventListener('click', () => {
    handleUpload().catch((error) => setStatus($('sync-status'), error.message, 'error'));
  });
  $('download').addEventListener('click', () => {
    handleDownload().catch((error) => setStatus($('sync-status'), error.message, 'error'));
  });
  $('export').addEventListener('click', () => {
    window.HcfySync.exportConfig()
      .then(() => setStatus($('backup-status'), '已导出配置文件。', 'success'))
      .catch((error) => setStatus($('backup-status'), error.message, 'error'));
  });
  $('import').addEventListener('click', () => $('import-file').click());
  $('import-file').addEventListener('change', (event) => {
    const file = event.target.files?.[0];
    window.HcfySync.importConfig(file)
      .then((result) =>
        setStatus(
          $('backup-status'),
          `已导入 ${result.count} 项配置。请刷新已打开的页面；部分设置需重新加载扩展后生效。`,
          'success',
        ),
      )
      .catch((error) => setStatus($('backup-status'), error.message, 'error'));
    event.target.value = '';
  });
}

bind();
loadForm().catch((error) => setStatus($('sync-status'), error.message, 'error'));
