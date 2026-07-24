<!-- MyLayout.vue: 主题切换圆形扩散动画（View Transition API） -->
<script setup lang="ts">
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { nextTick, provide } from 'vue'

const { isDark } = useData()

// 仅在支持 View Transition API 且用户未设置"减少动画"时启用圆形扩散
const enableTransitions = () =>
  'startViewTransition' in document &&
  window.matchMedia('(prefers-reduced-motion: no-preference)').matches

// 提供给 VitePress 内部切换按钮调用：从点击位置圆形扩散切换主题
provide('toggle-appearance', async ({ clientX: x, clientY: y }: MouseEvent) => {
  if (!enableTransitions()) {
    isDark.value = !isDark.value
    return
  }
  const endRadius = Math.hypot(
    Math.max(x, innerWidth - x),
    Math.max(y, innerHeight - y)
  )
  document.documentElement.style.setProperty('--v-x', `${x}px`)
  document.documentElement.style.setProperty('--v-y', `${y}px`)
  const transition = document.startViewTransition(async () => {
    isDark.value = !isDark.value
    await nextTick()
  })
  await transition.ready
  const clipPath = isDark.value
    ? [`circle(${endRadius}px at ${x}px ${y}px)`, `circle(0px at ${x}px ${y}px)`]
    : [`circle(0px at ${x}px ${y}px)`, `circle(${endRadius}px at ${x}px ${y}px)`]
  document.documentElement.animate(
    { clipPath },
    {
      duration: 400,
      easing: 'ease-in',
      pseudoElement: isDark.value
        ? '::view-transition-old(root)'
        : '::view-transition-new(root)'
    }
  )
})
</script>

<template>
  <DefaultTheme.Layout v-bind="$attrs" />
</template>

<style>
/* 视图过渡：禁用默认动画，由 clipPath 接管 */
::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
}
::view-transition-old(root) {
  z-index: 1;
}
::view-transition-new(root) {
  z-index: 9999;
}
.dark::view-transition-old(root) {
  z-index: 9999;
  clip-path: circle(0px at var(--v-x, 50%) var(--v-y, 50%));
}
.dark::view-transition-new(root) {
  z-index: 1;
}
/* 修正因视图过渡导致的月牙图标偏移 */
.VPSwitchAppearance .check {
  transform: none !important;
}
.VPSwitchAppearance .check .icon {
  top: -2px;
}
</style>
