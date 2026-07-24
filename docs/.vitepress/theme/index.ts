import Teek from "vitepress-theme-teek";
import "vitepress-theme-teek/index.css";
import "./custom.css";

// 使用 Teek 主题（基于 VitePress 默认主题扩展）
// 提供：主题切换圆形扩散动画、代码块美化、返回顶部、主题增强面板等
// 首页风格通过 config.ts 的 teekHome: false + vpHome: true 保留 VitePress 默认文档首页
export default {
  extends: Teek,
  enhanceApp() {
    if (typeof window === "undefined") return;

    // 路由切换 loading 遮罩里注入"关闭加载"按钮
    // teek 的 loading 用 v-show 控制: 点击按钮后设 mask.style.display='none' 临时隐藏
    // 下次路由开始 v-show=true 时会把 style.display 设回 '' (恢复 block), 不影响后续使用
    const injectCloseBtn = () => {
      const loader = document.querySelector(".tk-route-loading__loader");
      if (!loader || loader.querySelector(".tk-close-loading-btn")) return;

      const btn = document.createElement("button");
      btn.className = "tk-close-loading-btn";
      btn.type = "button";
      btn.textContent = "关闭加载";
      btn.addEventListener("click", () => {
        const mask = document.querySelector(
          ".tk-route-loading__mask"
        ) as HTMLElement | null;
        if (mask) mask.style.display = "none";
      });
      loader.appendChild(btn);
    };

    // 首次注入 + 后续 DOM 变化时补注入（路由切换会重新挂载 loader）
    injectCloseBtn();
    new MutationObserver(injectCloseBtn).observe(document.body, {
      childList: true,
      subtree: true,
    });
  },
}
