import Teek from "vitepress-theme-teek";
import "vitepress-theme-teek/index.css";
import "./custom.css";

// 使用 Teek 主题（基于 VitePress 默认主题扩展）
// 提供：主题切换圆形扩散动画、代码块美化、返回顶部、主题增强面板等
// 首页风格通过 config.ts 的 teekHome: false + vpHome: true 保留 VitePress 默认文档首页
export default {
  extends: Teek,
}
