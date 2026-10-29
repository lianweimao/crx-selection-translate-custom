/**
 * 将定制功能嵌入扩展设置页：
 * - 「网页全文翻译」菜单（#/fulltext）下：并发数设置
 * - 「登录 / 注册」菜单（#/user）下：GitHub 配置同步
 *
 * 设置页是打包后的 React 应用，这里只在 main 容器末尾追加独立卡片，
 * 不修改原应用的组件；路由切换或 React 重渲染后会自动补回。
 */
(() => {
  const CONCURRENCY_CARD_ID = 'hcfy-concurrency-card';
  const SYNC_CARD_ID = 'hcfy-github-sync-card';
  const VERSION_CARD_ID = 'hcfy-version-card';
  const SYNC_PAGE = chrome.runtime.getURL('sync.html');
  const UPDATE_ZIP_URL =
    'https://codeload.github.com/lianweimao/crx-selection-translate-custom/zip/refs/heads/main';
  const UPDATE_REPO_URL = 'https://github.com/lianweimao/crx-selection-translate-custom';

  const make = (tag, className, text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null) node.textContent = text;
    return node;
  };

  const input = (type, placeholder) => {
    const node = make('input', 'bp6-input');
    node.type = type;
    if (placeholder) node.placeholder = placeholder;
    node.style.width = '100%';
    node.autocomplete = 'off';
    node.spellcheck = false;
    return node;
  };

  const formGroup = (labelText, control, helperText) => {
    const group = make('div', 'bp6-form-group');
    const label = make('label', 'bp6-label', labelText);
    group.appendChild(label);
    const content = make('div', 'bp6-form-content');
    if (helperText) content.appendChild(make('div', 'bp6-form-helper-text', helperText));
    content.appendChild(control);
    group.appendChild(content);
    return group;
  };

  const button = (text, primary) => {
    const node = make('button', `bp6-button${primary ? ' bp6-intent-primary' : ''}`, text);
    node.type = 'button';
    node.style.marginRight = '8px';
    return node;
  };

  const status = () => {
    const node = make('p', 'bp6-form-helper-text');
    node.style.marginTop = '10px';
    node.style.minHeight = '18px';
    return node;
  };

  const setStatus = (node, message, ok) => {
    node.textContent = message;
    node.style.color = ok ? '#1a7f37' : message ? '#cf222e' : '';
  };

  const run = (node, task) => {
    node.disabled = true;
    Promise.resolve()
      .then(task)
      .finally(() => {
        node.disabled = false;
      });
  };

  /* ---------- 并发数卡片 ---------- */

  function buildConcurrencyCard() {
    const card = make('div', 'bp6-card bp6-elevation-0');
    card.id = CONCURRENCY_CARD_ID;
    card.style.margin = '15px';

    const heading = make('h5', 'bp6-heading', '全文翻译并发数');
    heading.style.marginTop = '0';
    card.appendChild(heading);
    card.appendChild(
      make(
        'div',
        'bp6-form-helper-text',
        '全文翻译会把页面文本分批并发发送给翻译服务。并发越高速度越快，但可能触发翻译接口的限流；建议 4–8，默认 8。',
      ),
    );

    const row = make('div');
    row.style.display = 'flex';
    row.style.alignItems = 'center';
    row.style.gap = '8px';
    row.style.marginTop = '10px';

    const number = input('number');
    number.min = '1';
    number.max = '16';
    number.step = '1';
    number.value = '8';
    number.style.width = '90px';
    row.appendChild(number);

    const save = button('保存', true);
    row.appendChild(save);
    card.appendChild(row);

    const hint = status();
    card.appendChild(hint);

    save.addEventListener('click', () => {
      run(save, async () => {
        try {
          const value = await window.HcfySync.saveConcurrency(number.value);
          number.value = value;
          setStatus(hint, '已保存，下次开启全文翻译时生效。', true);
        } catch (error) {
          setStatus(hint, error.message, false);
        }
      });
    });

    window.HcfySync.getConcurrency()
      .then((value) => {
        number.value = value;
      })
      .catch(() => {});

    return card;
  }

  /* ---------- GitHub 同步卡片 ---------- */

  function buildSyncCard() {
    const card = make('div', 'bp6-card bp6-elevation-0');
    card.id = SYNC_CARD_ID;
    card.style.margin = '15px';

    const heading = make('h5', 'bp6-heading', 'GitHub 配置同步');
    heading.style.marginTop = '0';
    card.appendChild(heading);

    const callout = make('div', 'bp6-callout bp6-callout-has-body-content');
    callout.style.marginBottom = '12px';
    callout.appendChild(
      make(
        'div',
        null,
        '使用 GitHub Personal Access Token（仅授予目标仓库的 Contents 读写权限）在多台设备间同步设置项、收藏夹和历史记录。为安全起见只支持私有仓库。',
      ),
    );
    card.appendChild(callout);

    const repo = input('text', 'owner/repo');
    const branch = input('text', '留空使用默认分支');
    const path = input('text', 'hcfy-config.json');
    const token = input('password', 'github_pat_...（留空表示不修改）');

    card.appendChild(formGroup('仓库（owner/repo）', repo));
    card.appendChild(formGroup('分支', branch));
    card.appendChild(formGroup('文件路径', path));
    card.appendChild(formGroup('Token', token));

    const actions = make('div');
    actions.style.marginTop = '4px';
    const saveButton = button('保存设置');
    const testButton = button('测试连接');
    const uploadButton = button('上传到 GitHub', true);
    const downloadButton = button('从 GitHub 下载', true);
    actions.append(saveButton, testButton, uploadButton, downloadButton);
    card.appendChild(actions);

    const hint = status();
    card.appendChild(hint);

    const meta = make('p', 'bp6-form-helper-text');
    meta.style.marginTop = '6px';
    card.appendChild(meta);

    const collect = () => ({
      repo: repo.value.trim(),
      branch: branch.value.trim(),
      path: path.value.trim(),
      token: token.value.trim(),
    });

    const refreshMeta = () => {
      window.HcfySync.readMeta()
        .then((info) => {
          if (!info) return;
          const parts = [`上次同步：${new Date(info.syncedAt).toLocaleString()}`];
          if (info.direction) parts.push(info.direction === 'upload' ? '上传' : '下载');
          if (info.sha) parts.push(`版本 ${info.sha.slice(0, 8)}`);
          meta.textContent = parts.join(' · ');
        })
        .catch(() => {});
    };

    saveButton.addEventListener('click', () => {
      run(saveButton, async () => {
        try {
          await window.HcfySync.saveConfig(collect());
          token.value = '';
          setStatus(hint, '设置已保存。', true);
        } catch (error) {
          setStatus(hint, error.message, false);
        }
      });
    });

    testButton.addEventListener('click', () => {
      run(testButton, async () => {
        try {
          await window.HcfySync.saveConfig(collect());
          token.value = '';
          const note = await window.HcfySync.testConnection(await window.HcfySync.readConfig());
          setStatus(hint, note, true);
        } catch (error) {
          setStatus(hint, error.message, false);
        }
      });
    });

    uploadButton.addEventListener('click', () => {
      run(uploadButton, async () => {
        try {
          await window.HcfySync.saveConfig(collect());
          token.value = '';
          setStatus(hint, '正在上传……', true);
          const result = await window.HcfySync.upload(await window.HcfySync.readConfig());
          setStatus(
            hint,
            `上传成功：${result.count} 项设置、${result.favorites} 条收藏、${result.history} 条历史${result.sha ? `，版本 ${result.sha.slice(0, 8)}` : ''}。`,
            true,
          );
          refreshMeta();
        } catch (error) {
          setStatus(hint, error.message, false);
        }
      });
    });

    downloadButton.addEventListener('click', () => {
      run(downloadButton, async () => {
        try {
          await window.HcfySync.saveConfig(collect());
          token.value = '';
          setStatus(hint, '正在下载……', true);
          const result = await window.HcfySync.download(await window.HcfySync.readConfig());
          if (result.unchanged) {
            setStatus(hint, '远端版本与上次同步一致，没有新内容。', true);
          } else {
            setStatus(
              hint,
              `下载成功：已写入 ${result.count} 项设置，新增 ${result.addedFavorites} 条收藏、${result.addedHistory} 条历史。请刷新已打开的页面；部分设置需重新加载扩展后生效。`,
              true,
            );
          }
          refreshMeta();
        } catch (error) {
          setStatus(hint, error.message, false);
        }
      });
    });

    window.HcfySync.readConfig()
      .then((config) => {
        repo.value = config.repo || '';
        branch.value = config.branch || '';
        path.value = config.path || 'hcfy-config.json';
      })
      .catch(() => {});
    refreshMeta();

    return card;
  }

  /* ---------- 版本更新卡片 ---------- */

  function buildVersionCard() {
    const card = make('div', 'bp6-card bp6-elevation-0');
    card.id = VERSION_CARD_ID;
    card.style.margin = '15px';

    const heading = make('h5', 'bp6-heading', '版本更新');
    heading.style.marginTop = '0';
    card.appendChild(heading);

    const summary = make('p', 'bp6-form-helper-text');
    summary.style.marginTop = '0';
    summary.textContent = `当前版本 v${chrome.runtime.getManifest().version}`;
    card.appendChild(summary);

    const state = make('p', 'bp6-form-helper-text');
    state.style.minHeight = '18px';
    card.appendChild(state);

    const actions = make('div');
    actions.style.display = 'flex';
    actions.style.alignItems = 'center';
    actions.style.gap = '8px';
    actions.style.flexWrap = 'wrap';

    const checkButton = button('检查更新', true);
    actions.appendChild(checkButton);

    const downloadLink = make('a', 'bp6-button', '下载最新版本');
    downloadLink.href = UPDATE_ZIP_URL;
    downloadLink.style.textDecoration = 'none';
    downloadLink.style.marginRight = '0';
    downloadLink.style.display = 'none';
    actions.appendChild(downloadLink);

    const repoLink = make('a', 'bp6-button', '打开仓库');
    repoLink.href = UPDATE_REPO_URL;
    repoLink.target = '_blank';
    repoLink.rel = 'noreferrer';
    repoLink.style.textDecoration = 'none';
    repoLink.style.marginRight = '0';
    actions.appendChild(repoLink);

    card.appendChild(actions);

    const guide = make('div', 'bp6-form-helper-text');
    guide.style.marginTop = '10px';
    guide.style.whiteSpace = 'pre-line';
    guide.textContent =
      '更新方式：检测到新版本后会自动把仓库压缩包下载到「下载/hcfy-update/」，运行项目中的 output/update-extension.ps1 自动覆盖扩展文件，然后在 edge://extensions 点击「重新加载」即可生效。';
    card.appendChild(guide);

    const render = (info) => {
      const local = chrome.runtime.getManifest().version;
      if (!info || !info.checkedAt) {
        state.textContent = '尚未检查。';
        state.style.color = '';
        downloadLink.style.display = 'none';
        return;
      }
      if (info.error) {
        state.textContent = `${info.error}（本地 v${local}）`;
        state.style.color = '#cf222e';
        downloadLink.style.display = 'none';
        return;
      }
      if (info.hasUpdate) {
        state.textContent = `发现新版本 v${info.latestVersion}（本地 v${local}）。`;
        state.style.color = '#cf222e';
        downloadLink.style.display = '';
        if (info.downloadedVersion === info.latestVersion) {
          guide.textContent =
            `最新版本已下载到「下载/hcfy-update/crx-selection-translate-custom-main.zip」。\n` +
            '运行项目中的 output/update-extension.ps1 自动覆盖扩展文件，然后在 edge://extensions 点击「重新加载」。';
        } else if (info.downloadError) {
          state.textContent += ` 自动下载失败：${info.downloadError}，可点击「下载最新版本」手动下载。`;
        }
      } else {
        state.textContent = `已是最新版本（本地 v${local}）。`;
        state.style.color = '#1a7f37';
        downloadLink.style.display = 'none';
      }
    };

    const load = () => {
      chrome.storage.local
        .get('hcfyUpdateState')
        .then((result) => render(result.hcfyUpdateState))
        .catch(() => render(null));
    };

    checkButton.addEventListener('click', () => {
      run(checkButton, async () => {
        state.textContent = '正在检查……';
        state.style.color = '';
        try {
          const response = await chrome.runtime.sendMessage({ type: 'hcfy-update-check', force: true });
          if (!response || !response.ok) throw new Error((response && response.error) || '检查失败');
          render(response.state);
        } catch (error) {
          state.textContent = `检查更新失败：${error.message}`;
          state.style.color = '#cf222e';
        }
      });
    });

    load();
    return card;
  }

  /* ---------- 路由与注入 ---------- */

  const ALLOWED_SERVICES = ['谷歌翻译', 'ChatGPT'];
  const hiddenServiceCards = new Set();

  function hideExtraServices(main) {
    for (const card of main.querySelectorAll('div.bp6-card')) {
      const heading = card.querySelector(':scope > h4, :scope > h5, :scope > h6');
      if (!heading) continue;
      const name = heading.textContent.trim();
      if (name && !ALLOWED_SERVICES.includes(name)) {
        card.style.display = 'none';
        hiddenServiceCards.add(card);
      }
    }
  }

  function restoreServices() {
    for (const card of hiddenServiceCards) card.style.display = '';
    hiddenServiceCards.clear();
  }

  /* ---------- 服务申请页：精简内容 ---------- */

  const hiddenNodes = new Set();

  function hideNode(node) {
    if (!node) return;
    node.style.display = 'none';
    hiddenNodes.add(node);
  }

  function restoreHiddenNodes() {
    for (const node of hiddenNodes) node.style.display = '';
    hiddenNodes.clear();
  }

  function hideServicesExtras(main) {
    // 移除「关于第三方服务」说明
    for (const callout of main.querySelectorAll('.bp6-callout')) {
      const heading = callout.querySelector('h3, h4, h5');
      if (heading && /^关于第三方服务/.test(heading.textContent.trim())) hideNode(callout);
    }
    // 移除「图片转文字」「语音转文字」分组
    for (const heading of main.querySelectorAll('h2')) {
      if (/图片转文字|语音转文字/.test(heading.textContent.trim())) {
        hideNode(heading.parentElement);
      }
    }
    // 移除翻译服务中的谷歌翻译
    for (const heading of main.querySelectorAll('h4')) {
      if (heading.textContent.trim() === '谷歌翻译') {
        hideNode(heading.closest('.bp6-card') || heading.parentElement);
      }
    }
  }

  /* ---------- 各页面精简 ---------- */

  function hideSettingGroups(main, keywords) {
    for (const group of main.querySelectorAll('.bp6-form-group')) {
      const label = group.querySelector('.bp6-label, label');
      const text = (label ? label.textContent : '').trim();
      if (text && keywords.some((k) => text.includes(k))) hideNode(group);
    }
  }

  function hideCardsByHeading(main, titles) {
    for (const heading of main.querySelectorAll('h2, h3, h4, h5, h6')) {
      if (!titles.some((t) => heading.textContent.trim() === t)) continue;
      hideNode(heading.closest('.bp6-card') || heading.parentElement);
    }
  }

  function hideNotice(main, pattern) {
    for (const el of main.querySelectorAll('div, p')) {
      const text = (el.textContent || '').trim();
      if (!pattern.test(text) || text.length > 150 || el.children.length > 3) continue;
      hideNode(el);
      break;
    }
  }

  /* ---------- 收藏夹 / 历史记录：接入 GitHub 同步 ---------- */

  let cloudBar = null;

  function buildCloudSyncBar(name) {
    const bar = make('div', 'bp6-callout bp6-intent-primary');
    bar.id = 'hcfy-cloud-sync-bar';
    bar.style.marginBottom = '12px';

    const row = make('div');
    row.style.display = 'flex';
    row.style.alignItems = 'center';
    row.style.gap = '8px';
    row.style.flexWrap = 'wrap';

    const label = make('span', null, `${name}已纳入 GitHub 同步：`);
    label.style.fontWeight = '600';
    row.appendChild(label);

    const uploadButton = button('上传到 GitHub', true);
    const downloadButton = button('从 GitHub 下载', true);
    const configButton = button('同步设置');
    row.append(uploadButton, downloadButton, configButton);

    const hint = make('span', 'bp6-text-small bp6-text-muted');
    hint.style.marginLeft = '4px';
    row.appendChild(hint);
    bar.appendChild(row);

    uploadButton.addEventListener('click', () => {
      run(uploadButton, async () => {
        try {
          const result = await window.HcfySync.upload(await window.HcfySync.readConfig());
          hint.textContent = `已上传（${result.favorites} 条收藏、${result.history} 条历史）。`;
        } catch (error) {
          hint.textContent = error.message;
        }
      });
    });

    downloadButton.addEventListener('click', () => {
      run(downloadButton, async () => {
        try {
          const result = await window.HcfySync.download(await window.HcfySync.readConfig());
          hint.textContent = result.unchanged
            ? '远端没有新内容。'
            : `已下载，新增 ${result.addedFavorites} 条收藏、${result.addedHistory} 条历史。`;
        } catch (error) {
          hint.textContent = error.message;
        }
      });
    });

    configButton.addEventListener('click', () => {
      location.hash = '#/user';
    });

    return bar;
  }

  function handleCollectionsPage(main, hash) {
    const isFavorites = hash.startsWith('#/stars');
    const isHistory = hash.startsWith('#/history');
    if (!isFavorites && !isHistory) {
      if (cloudBar) {
        cloudBar.remove();
        cloudBar = null;
      }
      return;
    }
    // 隐藏官方的「同步到云端」入口：GitHub 是唯一同步方式
    for (const link of main.querySelectorAll('a, button')) {
      if (/同步到云端/.test(link.textContent || '')) hideNode(link);
    }
    if (!cloudBar) {
      cloudBar = buildCloudSyncBar(isFavorites ? '收藏夹' : '历史记录');
      main.insertBefore(cloudBar, main.firstChild);
    }
  }

  let scheduled = false;

  function scheduleInject() {
    if (scheduled) return;
    scheduled = true;
    // 用 setTimeout 而不是 requestAnimationFrame：后台标签页会暂停 rAF
    setTimeout(() => {
      scheduled = false;
      inject();
    }, 50);
  }

  function inject() {
    const main = document.getElementById('main');
    if (!main) return;
    const hash = location.hash || '';

    // 只在「网页全文翻译」页显示并发卡片，切到其他菜单时移除
    const concurrencyCard = document.getElementById(CONCURRENCY_CARD_ID);
    if (hash.startsWith('#/fulltext')) {
      if (!concurrencyCard) main.appendChild(buildConcurrencyCard());
    } else if (concurrencyCard) {
      concurrencyCard.remove();
    }

    // 「第三方服务」页面只保留谷歌翻译和 ChatGPT
    if (hash.startsWith('#/services-options')) {
      hideExtraServices(main);
    } else {
      restoreServices();
    }

    // 服务申请页：移除说明、图片/语音转文字与谷歌翻译
    if (hash.startsWith('#/services') && !hash.startsWith('#/services-options')) {
      hideServicesExtras(main);
    }

    // 其它页面：移除「自定义翻译源」整个功能
    if (hash.startsWith('#/other')) hideCardsByHeading(main, ['自定义翻译源']);

    // 翻译面板页面：移除专业版提示、显示顺序、跳转链接与下方三个界面区块
    if (hash.startsWith('#/panel')) {
      hideSettingGroups(main, ['显示顺序', '跳转链接']);
      hideCardsByHeading(main, ['自定义界面', '网页划词面板', '独立翻译窗口']);
      hideNotice(main, /选项已转移至通用/);
    }

    // 网页全文翻译页面：移除「突出显示译文」（连同其遗留的卡片，避免留下空白区域）
    if (hash.startsWith('#/fulltext')) {
      for (const group of main.querySelectorAll('.bp6-form-group')) {
        const label = group.querySelector('.bp6-label, label');
        const text = (label ? label.textContent : '').trim();
        if (!text.includes('突出显示译文')) continue;
        const card = group.closest('.bp6-card');
        hideNode(card && (card.textContent || '').trim().length < 120 ? card : group);
      }
    }

    // 离开精简页面时恢复被隐藏的节点
    const slimPage =
      (hash.startsWith('#/services') && !hash.startsWith('#/services-options')) ||
      hash.startsWith('#/other') ||
      hash.startsWith('#/panel') ||
      hash.startsWith('#/fulltext');
    if (!slimPage) restoreHiddenNodes();

    // 收藏夹 / 历史记录：接入 GitHub 同步
    handleCollectionsPage(main, hash);

    if (hash.startsWith('#/user')) {
      let card = document.getElementById(SYNC_CARD_ID);
      if (!card) {
        card = buildSyncCard();
        main.appendChild(card);
      }
      let versionCard = document.getElementById(VERSION_CARD_ID);
      if (!versionCard) {
        versionCard = buildVersionCard();
        main.appendChild(versionCard);
      }
      // 「设置同步」页面只保留同步与版本卡片，隐藏原有的登录 / 注册表单
      for (const child of Array.from(main.children)) {
        if (child !== card && child !== versionCard) child.style.display = 'none';
      }
    } else {
      // 离开该页面时恢复被隐藏的节点
      const card = document.getElementById(SYNC_CARD_ID);
      if (card) card.remove();
      const versionCard = document.getElementById(VERSION_CARD_ID);
      if (versionCard) versionCard.remove();
      for (const child of Array.from(main.children)) {
        if (child.style.display === 'none') child.style.display = '';
      }
    }
  }

  window.addEventListener('hashchange', scheduleInject);
  window.addEventListener('popstate', scheduleInject);

  const observer = new MutationObserver(scheduleInject);
  observer.observe(document.documentElement, { childList: true, subtree: true });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', scheduleInject, { once: true });
  } else {
    scheduleInject();
  }
})();
