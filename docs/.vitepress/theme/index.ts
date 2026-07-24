import Teek from "vitepress-theme-teek";
import "vitepress-theme-teek/index.css";
import "./custom.css";

// 使用 Teek 主题（基于 VitePress 默认主题扩展）
// 提供：主题切换圆形扩散动画、代码块美化、返回顶部、主题增强面板等
// 首页风格通过 config.ts 的 teekHome: false + vpHome: true 保留 VitePress 默认文档首页
export default {
  extends: Teek,
  enhanceApp({ router }) {
    // 首次页面加载进度条（pace-js 自动监测 HTML/JS/CSS 下载进度）
    // SSR 构建守卫：VitePress 构建时也会执行 enhanceApp
    if (typeof window === 'undefined') return

    // 动态引入 pace，避免 SSR 问题
    import('pace-js').then((pace) => {
      pace.start({
        // 禁用默认的 AJAX 监测（VitePress SPA 路由切换不需要）
        ajax: false,
        // 监测 document 加载状态
        document: true,
        // 监测资源加载（JS/CSS/字体/图片）
        eventLag: false,
        elements: false,
        restartOnPushState: false,
        restartOnRequestAfter: false,
        // 平滑过渡
        catchupTime: 100,
        minTime: 250,
        ghostTime: 300,
        // 进度条最小/最大值
        initialRate: 0.03,
        minPaceRate: 0.05,
      })
    })

    // 路由切换时也触发进度条（客户端导航）
    if (router) {
      const startProgress = () => {
        import('pace-js').then((pace) => pace.restart())
      }
      const stopProgress = () => {
        import('pace-js').then((pace) => pace.stop())
      }
      router.onBeforeRouteChange = startProgress
      router.onAfterRouteChanged = stopProgress
    }
  }
}
