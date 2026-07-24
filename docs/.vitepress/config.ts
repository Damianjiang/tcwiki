import { defineConfig } from 'vitepress'
import { defineTeekConfig } from 'vitepress-theme-teek/config'

// Teek 主题配置
const teekConfig = defineTeekConfig({
  teekTheme: true, // 启用 Teek 主题
  teekHome: false, // 不启用博客风格首页，保留 VitePress 默认文档首页（hero + features）
  vpHome: true, // 保留 VitePress 首页风格

  // 深色/浅色模式切换时的圆形扩散动画（View Transition API）
  viewTransition: {
    enabled: true,
    mode: 'out-in',
    duration: 300,
    easing: 'ease-in'
  },

  // 代码块美化
  codeBlock: {
    enabled: true,
    collapseHeight: 700
  },

  // 返回顶部按钮（显示阅读进度百分比）
  backTop: {
    enabled: true,
    content: 'progress'
  },

  // 主题增强面板（右上角）
  themeEnhance: {
    enabled: true,
    position: 'top'
  },

  // 关闭博客向组件（文档站不需要）
  toComment: { enabled: false }, // 滚动到评论区按钮（右下角"聊天"图标）
  notice: { enabled: false }, // 公告弹窗
  articleBanner: { enabled: false }, // 文章页 Banner 大图
  articleUpdate: { enabled: false }, // 文章最近更新栏
  articleAnalyze: { enabled: false }, // 文章字数/阅读时间分析
  breadcrumb: { enabled: false }, // 面包屑导航

  // 启用路由切换 loading 遮罩（SPA 客户端导航时显示）
  loading: true,

  // 禁用 teek 的博客向 Vite 插件：
  // sidebar 插件会自动扫描文档用文件名(英文 slug)生成侧边栏，覆盖手动配置的中文侧边栏
  // permalink/mdH1/docAnalysis 均为博客向功能，文档站不需要
  vitePlugins: {
    sidebar: false,
    permalink: false,
    mdH1: false,
    docAnalysis: false
  }
})

// 部署 base 路径：GitHub Pages 在子路径 /tcwiki/ 下，Cloudflare Pages 在根路径 /
// 通过环境变量 BASE_PATH 区分，默认根路径（适配 Cloudflare Pages）
export default defineConfig({
  extends: teekConfig,
  lang: 'zh-CN',
  title: 'TCraft WIKI',
  description: 'TCraft Minecraft 服务器帮助文档',
  base: process.env.BASE_PATH || '/',

  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'TCraft WIKI - Minecraft 服务器帮助文档' }],
    ['meta', { property: 'og:description', content: 'TCraft Minecraft服务器帮助文档，包含服务器规则、功能使用指南、完整的帮助文档' }],
    ['meta', { property: 'og:image', content: '/og-image.jpg' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:image', content: '/og-image.jpg' }],
    // 预连接关键资源域名(虽同域但帮助浏览器尽早建立连接)
    ['link', { rel: 'preconnect', href: '/' }],
    // DNS 预解析(减少首次连接延迟)
    ['link', { rel: 'dns-prefetch', href: 'https://tcwiki.pages.dev' }],
    // ===== 首次加载进度条（内联，零额外下载，HTML 解析时立即执行） =====
    ['style', {}, `#tc-loader{position:fixed;top:0;left:0;height:3px;width:0;z-index:99999;background:linear-gradient(90deg,#3eaf7c,#7dd3a8);box-shadow:0 0 8px rgba(62,175,124,.6);opacity:1;transition:opacity .4s}#tc-loader::after{content:attr(data-pct);position:fixed;top:8px;right:16px;font-size:12px;font-weight:600;color:#3eaf7c;background:rgba(255,255,255,.92);padding:2px 8px;border-radius:4px;box-shadow:0 1px 3px rgba(0,0,0,.12)}html.dark #tc-loader::after{background:rgba(26,26,46,.92);color:#7dd3a8}#tc-loader.done{width:100%!important;opacity:0}`],
    ['script', {}, `(function(){var l=document.createElement('div');l.id='tc-loader';l.setAttribute('data-pct','0%');document.documentElement.appendChild(l);var p=0,t;function up(){if(p<90){p+=Math.random()*(p<30?15:5);l.style.width=p+'%';l.setAttribute('data-pct',Math.round(p)+'%')}t=setTimeout(up,p<30?100:300)}up();function done(){clearTimeout(t);l.style.width='100%';l.setAttribute('data-pct','100%');l.className='done';setTimeout(function(){l.remove()},600)}window.addEventListener('load',done);document.addEventListener('DOMContentLoaded',function(){if(document.readyState==='complete')done()})})();`]
  ],

  // 站点外观
  lastUpdated: true,
  cleanUrls: true,
  appearance: 'dark',
  ignoreDeadLinks: true,

  // Vite 构建优化：拆分大 chunk，让首屏只加载必要代码
  vite: {
    build: {
      chunkSizeWarningLimit: 1000,
      rollupOptions: {
        output: {
          manualChunks(id) {
            // teek 主题代码单独拆分(首屏不需要全部 teek 代码)
            if (id.includes('vitepress-theme-teek')) {
              return 'teek'
            }
            // Vue 运行时单独拆分
            if (id.includes('node_modules/vue') || id.includes('node_modules/@vue')) {
              return 'vue-vendor'
            }
            // medium-zoom / nprogress 等第三方库
            if (id.includes('node_modules/medium-zoom') || id.includes('node_modules/nprogress')) {
              return 'utils'
            }
          }
        }
      }
    }
  },

  themeConfig: {
    // 顶部站点名 + logo
    siteTitle: 'TCraft WIKI',
    logo: '/logo.png',

    // 顶部导航
    nav: [
      { text: '首页', link: '/' },
      { text: '关于服务器', link: '/guide/about' },
      { text: '服务器规则', link: '/guide/server-rules' },
      { text: '官方网站', link: 'https://tcraft.pages.dev' }
    ],

    // 侧边栏（对应原 docsify _sidebar.md 的分组结构）
    sidebar: [
      {
        text: '关于服务器',
        items: [
          { text: '关于服务器', link: '/guide/about' },
          { text: 'TCraft服务器规则', link: '/guide/server-rules' },
          { text: '官方免责声明', link: '/guide/disclaimer' }
        ]
      },
      {
        text: '帮助中心',
        items: [
          { text: 'TCraft 命令总览', link: '/guide/tcraft-help' },
          { text: '账号登录注册系统', link: '/guide/account' },
          { text: '玩家核心可视化菜单', link: '/guide/menu' },
          { text: '个性化昵称设置', link: '/guide/nick' },
          { text: '服务器状态查询指令', link: '/guide/status' },
          { text: '服务器数据与统计查询', link: '/guide/data' },
          { text: '皮肤设置教程', link: '/guide/skin' },
          { text: '领地系统帮助', link: '/guide/residence' },
          { text: '传送功能指令', link: '/guide/teleport' },
          { text: '技能奖励与战利品系统', link: '/guide/skills' },
          { text: '经济系统完整教程', link: '/guide/economy' },
          { text: '白名单系统', link: '/guide/whitelist' },
          { text: '服务器重启更新指令', link: '/guide/restart' },
          { text: '@提及功能与私信命令', link: '/guide/mention' },
          { text: '问题反馈专属渠道', link: '/guide/feedback' },
          { text: '服务器法律合规条款', link: '/guide/legal' },
          { text: 'TCraft 论坛系统使用教程', link: '/guide/forum' },
          { text: '补充重要提醒', link: '/guide/notice' }
        ]
      }
    ],

    // 全文搜索（本地索引，构建时生成，无需外部服务）
    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '搜索文档', buttonAriaLabel: '搜索文档' },
          modal: {
            displayDetails: '显示详情',
            resetButtonTitle: '清除查询条件',
            backButtonTitle: '返回',
            noResultsText: '未找到相关内容',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭'
            }
          }
        }
      }
    },

    // 大纲（右侧目录）
    outline: {
      level: [2, 3],
      label: '本页目录'
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },

    // 页脚
    footer: {
      message: 'TCraft 服务器帮助文档',
      copyright: '© 2021-2026 TCraft 服务器'
    },

    // 返回顶部按钮（VitePress 自带）
    returnToTopLabel: '返回顶部',

    darkModeSwitchLabel: '主题',
    sidebarMenuLabel: '菜单',
    darkModeSwitchTitle: '切换主题',
    lightModeSwitchTitle: '切换主题'
  }
})
