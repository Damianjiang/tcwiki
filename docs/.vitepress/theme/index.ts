import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import { h } from 'vue'
import { inBrowser } from 'vitepress'
// 顶部进度条
import { NProgress } from 'nprogress-v2/dist/index.js'
import 'nprogress-v2/dist/index.css'
// 图片放大
import mediumZoom from 'medium-zoom'
import { onMounted, watch, nextTick } from 'vue'
import { useRoute } from 'vitepress'
// 自定义布局（主题切换圆形扩散动画）
import MyLayout from './components/MyLayout.vue'
// 样式
import './custom.css'
import './style/custom-block.css'
import './style/vp-code.css'

export default {
  extends: DefaultTheme,
  // 使用自定义 Layout：接管主题切换的视图过渡动画
  Layout: () => h(MyLayout, null, {}),
  enhanceApp({ router }) {
    if (!router) return
    // 顶部进度条：路由切换时显示（仅浏览器环境）
    if (inBrowser) {
      NProgress.configure({ showSpinner: false })
      router.onBeforeRouteChange = () => {
        NProgress.start()
      }
      router.onAfterRouteChange = () => {
        NProgress.done()
      }
    }
  },
  // 图片放大：点击图片可放大查看（medium-zoom）
  setup() {
    const route = useRoute()
    const initZoom = () => {
      // 对文档主内容区的所有图片启用点击放大
      mediumZoom('.main img', { background: 'var(--vp-c-bg)' })
    }
    onMounted(() => {
      initZoom()
    })
    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    )
  }
} satisfies Theme
