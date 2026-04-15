# Obsidian + GitHub Sync 配置指南

## 第一步：安装 Obsidian

### 方法1：官网下载
1. 打开 https://obsidian.md
2. 点击"Download for Windows"
3. 安装运行

### 方法2：Microsoft Store（推荐）
1. 打开 Microsoft Store
2. 搜索"Obsidian"
3. 点击安装

---

## 第二步：创建 GitHub Token

1. 打开 https://github.com/settings/tokens
2. 点击"Generate new token (classic)"
3. 填写 Note: `Obsidian Sync`
4. 勾选权限:
   - ✅ repo (Full control of private repositories)
5. 点击"Generate token"
6. **复制保存好生成的token**（只显示一次！）

---

## 第三步：在 Obsidian 中安装 GitHub Sync 插件

1. 打开 Obsidian
2. 点击左下角"设置" ⚙️
3. 点击"社区插件"
4. 点击"浏览"
5. 搜索"GitHub Sync"
6. 点击安装
7. 点击"启用"

---

## 第四步：配置 GitHub Sync

1. 在 Obsidian 中：
   - 点击左侧"GitHub Sync"图标
   - 或按 Ctrl/Cmd + P，输入"GitHub Sync"

2. 配置设置：
   - **Remote URL**: `https://github.com/Chris03272307/portfolio.git`
   - **Branch**: `main`
   - **Username**: 你的GitHub用户名
   - **Token**: 粘贴第二步生成的token

3. 点击"Sync"按钮测试

---

## 第五步：创建并同步笔记

1. 在 Obsidian 左侧文件列表右键
2. 新建文件夹：`notes/`
3. 新建笔记：`notes/学习笔记.md`
4. 写完后点击 GitHub Sync 图标同步

---

## 自动化同步（可选）

在设置中可以开启：
- Auto-sync on startup: 启动时自动同步
- Auto-sync interval: 自动同步间隔（分钟）

---

## 工作流程

```
在Obsidian写笔记 → 点击Sync → GitHub自动更新 → 网页自动部署
```

---

## 注意事项

1. **不要同时用两个同步插件** - 会冲突
2. 第一次同步可能会有点慢
3. 记得定期同步以防丢失

---

## 如果遇到问题

- 检查token是否正确
- 检查仓库名是否正确
- 确保网络可以访问GitHub