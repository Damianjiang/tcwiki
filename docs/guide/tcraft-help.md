# TCraft 命令总览

TCraft 服务器自研帮助插件 `tcraft-help` 提供了一系列便捷指令。本页汇总所有可用命令及其用法。

::: tip 💡 使用提示
- 所有指令均在**游戏内聊天框**输入，输入完成后按回车执行
- `<方括号>` 表示必填参数，`[方括号]` 表示选填参数
- 忘记指令时，可随时在游戏内输入 `/tcraft help` 查看完整帮助
- 部分指令需要对应权限，普通玩家可用的指令均已默认开放
:::

## 主命令 /t

**指令：** `/t [子命令]`

**别名：** `/tcraft`

主命令聚合了大量功能子命令，输入 `/tcraft help` 可在游戏内查看完整子命令列表。

### 常用子命令

| 子命令 | 说明 | 详细文档 |
|--------|------|----------|
| `/tcraft jf <玩家名> <积分数量>` | 积分转账给指定玩家 | [经济系统](/guide/economy) |
| `/tcraft bal` | 查询自己的积分余额 | [经济系统](/guide/economy) |
| `/tcraft tell <玩家名> <内容>` | 向在线玩家发送私信 | [私信命令](/guide/mention) |
| `/tcraft forum <密码>` | 注册论坛账号 / 修改论坛密码 | [论坛系统](/guide/forum) |
| `/tcraft status` | 查询服务器当前状态 | [状态查询](/guide/status) |
| `/tcraft web` | 获取官方网站链接 | — |
| `/tcraft help` | 查看完整帮助列表 | — |

### 其他子命令

以下子命令可通过游戏内 `/tcraft help` 查看详细说明：

| 子命令 | 说明 |
|--------|------|
| `/tcraft hjf` | 会员积分相关功能 |
| `/tcraft dl` | 登录相关功能 |
| `/tcraft log` | 日志查询功能 |
| `/tcraft sick` | 病假相关功能 |
| `/tcraft sickd` | 病假相关功能 |
| `/tcraft jy` | 经验相关功能 |
| `/tcraft jyd` | 经验相关功能 |
| `/tcraft pingwarn` | 高延迟警告开关 |
| `/tcraft reload` | 重载插件配置（仅管理员） |

::: warning ⚠️ 管理员指令
`/tcraft reload` 为管理员专用指令，普通玩家无法使用。重载配置会短暂影响部分功能，请勿随意执行。
:::

## 玩家菜单 /cd

**指令：** `/cd`

**功能：** 打开玩家核心可视化菜单，包含世界切换、角色信息、签到、商店、市场等功能。

详细使用说明请参考 [玩家核心可视化菜单](/guide/menu)。

## 飞行切换 /fly

**指令：** `/fly`

**权限：** `tcraft.fly`（默认所有玩家可用）

**功能：** 切换飞行模式开关。在生存模式下输入即可开启 / 关闭飞行。

::: tip 🪽 飞行提示
飞行功能默认对所有玩家开放。在飞行状态下再次输入 `/fly` 即可关闭飞行并恢复生存模式。
:::

## 在线玩家查询 /player

**指令：** `/player`

**别名：** `/players`、`/online`

**功能：** 查看当前服务器所有在线玩家列表。

## 服务器统计 /shows

**指令：** `/shows <sound|entities|blockentities>`

**别名：** `/show`、`/s`

**权限：** `youer.shows`（默认仅 OP）

**功能：** 显示服务器运行统计信息，用于排查服务器卡顿、实体过多等问题。

| 参数 | 说明 |
|------|------|
| `sound` | 查看当前服务器声音列表 |
| `entities` | 查看实体统计（各类实体数量） |
| `blockentities` | 查看方块实体统计（如箱子、漏斗等） |

::: warning ⚠️ 管理员专用
`/shows` 系列指令默认仅管理员可用，用于服务器运维与性能排查，普通玩家无权限。
:::

## 击杀实体 /killentities

**指令：** `/killentities <实体类型> [confirm|cancel]`

**别名：** `/kille`

**权限：** `youer.shows.kill`（默认仅 OP）

**功能：** 批量击杀指定类型的实体，用于清理卡服实体。需二次确认才执行。

**使用流程：**

1. 先用 `/shows entities` 查看实体统计，找出异常多的实体类型
2. 输入 `/killentities <实体类型>` 发起击杀请求
3. 输入 `/killentities <实体类型> confirm` 确认执行击杀
4. 如需取消，输入 `/killentities <实体类型> cancel`

::: danger ⚠️ 谨慎操作
批量击杀实体为**不可撤销**操作，请务必确认实体类型正确后再执行 `confirm`，避免误杀有用实体（如村民、命名实体等）。
:::

## 实体统计 GUI /entitygui

**指令：** `/entitygui`

**权限：** `youer.shows.reopen`（默认仅 OP）

**功能：** 重新打开实体统计 GUI 界面，方便管理员可视化查看各类实体分布。

## 权限一览

| 权限节点 | 说明 | 默认 |
|----------|------|------|
| `tcraft.fly` | 允许使用飞行命令 | 所有玩家 |
| `tcraft.admin` | 管理员权限 | OP |
| `tcraft.mute` | 允许禁言玩家 | OP |
| `youer.shows` | 允许使用 `/shows` 命令 | OP |
| `youer.shows.sound` | 允许使用声音功能 | OP |
| `youer.shows.entities` | 允许使用实体统计 | OP |
| `youer.shows.blockentities` | 允许使用方块实体统计 | OP |
| `youer.shows.kill` | 允许击杀实体 | OP |
| `youer.shows.reopen` | 允许重新打开实体统计 GUI | OP |
