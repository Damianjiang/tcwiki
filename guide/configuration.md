# 配置说明

## 基本配置

### 站点名称

在 `index.html` 中修改：

```javascript
window.$docsify = {
  name: '你的站点名称'
}
```

### 仓库链接

```javascript
window.$docsify = {
  repo: 'https://github.com/username/repo'
}
```

## 插件配置

### 搜索插件

```javascript
search: {
  maxAge: 86400000,
  paths: 'auto',
  placeholder: '搜索文档',
  noData: '没有找到结果',
  depth: 6
}
```

### 分页插件

```javascript
pagination: {
  previousText: '上一章',
  nextText: '下一章',
  crossChapter: true,
  crossChapterText: true
}
```
