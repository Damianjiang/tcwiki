# 皮肤设置教程

::: warning 📌 重要：皮肤站账号无法自动同步
本服务器**不支持**从 LittleSkin、皮肤站等第三方皮肤站自动提取皮肤。即使你在 LittleSkin 等皮肤站注册了账号并登录服务器，皮肤也**不会自动加载**。

你必须按照下方教程，**手动上传或设置皮肤**，才能在游戏内显示自定义皮肤。
:::

## 下载皮肤

**皮肤下载网址：**

- [https://zh-cn.namemc.com/minecraft-skins](https://zh-cn.namemc.com/minecraft-skins)
- [https://mcskins.org/zh/minecraft-skins](https://mcskins.org/zh/minecraft-skins)

::: tip 💡 皮肤格式要求
- 皮肤文件必须为 **PNG 格式**
- 标准尺寸为 **64×64**（也支持 64×32 经典尺寸）
- 下载后请保存为 `.png` 文件备用
:::

## 在线网页上传皮肤（推荐方式）

**皮肤上传网址：** [https://skinsrestorer.net/upload](https://skinsrestorer.net/upload)

**操作步骤：**

1. 准备好 64×64 的 PNG 皮肤图片
2. 访问上方网址，上传皮肤图片
3. 网站会生成一条 `/skin url "链接"` 指令
4. 复制该指令，进入游戏在聊天框粘贴并发送
5. 皮肤立即生效

## 游戏内指令设置皮肤

### 玩家常用指令（必记）

| 指令 | 说明 |
|------|------|
| `/skin` | 打开皮肤面板（GUI） |
| `/skin <正版ID>` | 套用正版玩家皮肤（例：`/skin Notch`） |
| `/skin url "图片链接" [classic/slim]` | 上传自定义皮肤（PNG 64×64） |
| `/skin update` | 刷新当前皮肤 |
| `/skin clear` | 清除皮肤，恢复默认 |
| `/skin edit` | 在线编辑当前皮肤（生成链接后上传） |

### 手臂类型说明

使用 `/skin url` 指令时可指定手臂类型：

| 参数 | 说明 |
|------|------|
| `classic` | Steve 粗手臂模型（3 像素宽） |
| `slim` | Alex 细手臂模型（2 像素宽） |

**示例：** `/skin url "https://example.com/skin.png" slim`

### 自定义皮肤上传步骤

1. 准备 64×64 PNG 皮肤图
2. 访问 skinsrestorer.net/upload 上传，生成指令
3. 复制 `/skin url "链接"` 进游戏发送，立即生效

::: tip 💡 皮肤链接要求
- 链接必须为**直链**（直接指向 PNG 图片文件）
- 链接需以 `http://` 或 `https://` 开头
- 建议使用图床或 skinsrestorer 生成的稳定链接，避免链接失效导致皮肤丢失
:::

### 常见问题

**Q：皮肤不显示？**

A：检查权限 `skinsrestorer.player`，确认图片链接有效、格式为 PNG。

**Q：换肤没反应？**

A：用 `/skin update` 刷新，或检查网络/缓存。

**Q：我用了 LittleSkin 账号登录，为什么皮肤没自动同步？**

A：本服务器使用 SkinsRestorer 插件管理皮肤，**不对接任何第三方皮肤站**。LittleSkin 等皮肤站的账号登录不会自动提取皮肤，请用上方指令手动设置。

**Q：套用正版 ID 皮肤失败？**

A：`/skin <正版ID>` 仅支持正版（Mojang）账号的皮肤。如果该玩家未购买正版或改名，可能无法获取。建议改用 `/skin url` 上传自定义皮肤。
