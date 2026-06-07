# 玩家百科 - 皮肤系统

## 玩家常用指令（必记）

| 指令 | 说明 |
|------|------|
| `/skin` | 打开皮肤面板（GUI） |
| `/skin <正版ID>` | 套用正版玩家皮肤（例：`/skin Notch`） |
| `/skin url "图片链接" [classic/slim]` | 上传自定义皮肤（PNG 64×64）<br>`classic`：Steve 粗手臂；`slim`：Alex 细手臂 |
| `/skin update` | 刷新当前皮肤 |
| `/skin clear` | 清除皮肤，恢复默认 |
| `/skin edit` | 在线编辑当前皮肤（生成链接后上传） |

---

## 自定义皮肤上传步骤

1. 准备 64×64 PNG 皮肤图
2. 访问 skinsrestorer.net/upload 上传，生成指令
3. 复制 `/skin url "链接"` 进游戏发送，立即生效

---

## 常见问题

### Q：皮肤不显示？
A：检查权限 `skinsrestorer.player`，确认图片链接有效、格式为 PNG。

### Q：换肤没反应？
A：用 `/skin update` 刷新，或检查网络/缓存。