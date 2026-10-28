# 划词翻译定制版（Edge）

基于 Edge 应用商店「划词翻译」**v11.9.1** 的解包代码所做的个人定制版本，仅供本人自用。

> 原插件自 7.x 起已闭源，本仓库不以源码工程形式存在，而是对商店发布包做了最小化修改。请勿分发或用于商业用途。

## 定制功能

### 1. 网页全文翻译：串行 → 并发

官方版本的全文翻译由 `Ve` 调度器统一发送翻译请求，内部用 `handling` 布尔锁保证同一时刻只有一个请求在飞：页面上几十个文本批次只能一个接一个执行，长页面速度很慢。

本版本把该锁替换为**并发池**：

- 默认并发 **8**，可在设置页调整（1–16）
- 仍然按约 3000 字符分批（AI 类接口按单段请求），批次切分和译文回填顺序完全不变
- 加载状态由计数器管理：第一个请求开始时显示，最后一个请求结束时隐藏，不会闪烁
- 并发越高越快，但部分免费翻译接口有速率限制，建议 4–8

实测（40 段英文，ChatGPT 接口）：峰值并发 8，全部译文约 9 秒完成。

### 2. GitHub 配置同步

设置项、API Key 等 `chrome.storage.local` 数据可以上传到 GitHub 私有仓库，在另一台设备上一键拉取。实现参考 [yetone/magpie](https://github.com/yetone/magpie) 的同步设计：

- **只支持私有仓库**：公开仓库会把配置历史暴露给所有人
- 使用 GitHub Personal Access Token（细粒度令牌，仅需目标仓库的 `Contents: Read and write` 权限）
- 写入时携带远端文件 SHA，防止覆盖别人刚推送的版本；SHA 与上次同步一致时提示「没有新内容」
- Token 只保存在本机 `chrome.storage.local`，导出和上传时自动剔除
- 错误提示覆盖 401 / 403 / 404 / 分支不存在 / 速率限制等常见情况

### 3. 设置页入口

| 功能 | 位置 |
|---|---|
| 全文翻译并发数 | 设置 → 网页全文翻译（页面底部卡片） |
| GitHub 配置同步 | 设置 → 登录 / 注册（页面底部卡片） |
| 完整同步页面（含本地导入 / 导出） | 同步卡片中的链接，或直接打开 `sync.html` |

## 目录结构

```
manifest.json          扩展清单（version 11.9.1.1）
b.js                   background service worker（翻译请求、API 调度）
861.js                 内容脚本主 UI（全文翻译调度器 Ve 在此）
9.js                  翻译接口实现（ChatGPT、DeepSeek 等）
sync.html / sync.css  配置同步完整页面
sync-core.js          同步核心逻辑（GitHub API、storage 读写）
sync.js               sync.html 的界面绑定
sync-entry.js         设置页卡片注入（并发数 + GitHub 同步）
settings.html         设置页（末尾引入 sync-entry.js）
...                   其余为原扩展的资源与打包文件
```

## 安装（Edge）

1. 打开 `edge://extensions`，开启「开发人员模式」。
2. **先处理已安装的商店版**：本定制版保留了原扩展的 `key`，扩展 ID 与商店版相同（`oikmahiipjniocckomdccmplodldodja`），两者不能共存。
   - 卸载商店版会同时删除其配置数据。如需保留，可在卸载前备份目录：
     `%LOCALAPPDATA%\Microsoft\Edge\User Data\Default\Local Extension Settings\oikmahiipjniocckomdccmplodldodja`
   - 加载本版本后，把备份的目录放回同一位置，即可恢复设置（扩展需处于关闭状态）。
3. 点击「加载解压缩的扩展」，选择本仓库目录。
4. 建议先在原版中记录关键设置（或截图），安装后重新配置一次。

## 使用 GitHub 同步

1. 在 GitHub 创建（或复用一个）**私有**仓库，例如 `hcfy-config`。
2. 创建细粒度 Personal Access Token：`Settings → Developer settings → Fine-grained tokens`，仓库权限只勾选 `Contents: Read and write`。
3. 打开 设置 → 登录 / 注册 → GitHub 配置同步，填写：
   - 仓库：`你的用户名/hcfy-config`
   - 分支：留空使用默认分支
   - 文件路径：默认 `hcfy-config.json`
   - Token：粘贴上一步的令牌
4. 点击「测试连接」确认无误，再点「上传到 GitHub」。
5. 另一台设备安装本扩展后，填相同配置，点「从 GitHub 下载」，按提示刷新页面。

> 同步的是 `chrome.storage.local` 的全部配置（排除 Token、同步元数据、内部运行时字段）。本地备份 / 导入导出在完整同步页面中。

## 修改点汇总

| 文件 | 改动 |
|---|---|
| `861.js` | `Ve` 类：`handling` 单请求锁 → 并发池（`running` / `maxConcurrency`），新增 `runTask()`；并发数从 `pageTrsConcurrency` 读取 |
| `sync-core.js` | 新增：GitHub Contents API 读写、配置收集与合并、Token 与元数据管理 |
| `sync.html` / `sync.css` / `sync.js` | 新增：完整同步页面与本地导入导出 |
| `sync-entry.js` | 新增：在设置页 `#/fulltext`、`#/user` 路由下注入卡片 |
| `settings.html` | 末尾引入 `sync-entry.js` |
| `manifest.json` | 版本号改为 `11.9.1.1` |

## 免责声明

本项目仅用于个人学习和自用，基于闭源商业软件的发布包修改。请勿公开分发、上架商店或用于任何商业场景；由此产生的风险由使用者自行承担。
