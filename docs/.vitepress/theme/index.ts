import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ router }) {
    if (!router) return
    // 路由切换后触发内容区进入动画（仅浏览器环境）
    // 内容元素会依次渐入，形成层次感
    router.onAfterRouteChanged = () => {
      if (typeof document === 'undefined') return
      const content = document.querySelector('.VPContent')
      if (!content) return
      // 重置动画 class，强制重排后重新触发
      content.classList.remove('page-enter')
      void (content as HTMLElement).offsetWidth
      content.classList.add('page-enter')
    }
  }
} satisfies Theme
