# Wiki

欢迎来到 Wiki！

## 快速开始

这是一个基于 Docsify 构建的文档站点。

### 功能特性

- 搜索
- 图片缩放
- 代码复制
- 分页导航

### 文档结构

```text
.
├── index.html
├── README.md
├── _sidebar.md
├── _coverpage.md
└── .nojekyll
```

### 部署到 GitHub Pages

1. 初始化 Git 仓库
   ```bash
   git init
   git add .
   git commit -m "Initial Docsify site"
   git branch -M main
   ```

2. 创建 GitHub 仓库并推送代码
   ```bash
   git remote add origin https://github.com/<username>/<repo>.git
   git push -u origin main
   ```

3. 启用 GitHub Pages
   - 进入仓库 Settings
   - 找到 Pages 部分
   - Branch 选择 `main`，目录选择 `/ (root)`
   - 点击 Save

4. 访问站点
   - 等待几分钟后访问 `https://<username>.github.io/<repo>/`

**重要配置说明：**
- `.nojekyll` 文件：禁用 GitHub Pages 的 Jekyll 处理
- `alias` 配置：确保侧边栏在所有页面正确加载
