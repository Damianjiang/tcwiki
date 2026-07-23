import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ router }) {
    if (router) {
      // 路由切换后触发内容区进入动画（仅浏览器环境）
      router.onAfterRouteChanged = () => {
        if (typeof document === 'undefined') return
        const el = document.querySelector('.VPContent')
        if (el) {
          el.classList.remove('page-enter')
          // 强制重排，使动画能重新触发
          void (el as HTMLElement).offsetWidth
          el.classList.add('page-enter')
        }
      }
    }
  }
} satisfies Theme
