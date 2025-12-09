import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  // 移除vue插件，因为使用CDN引入Vue
  server: {
    port: 3000,
    host: "0.0.0.0", // 允许外部访问
    open: true, // 自动打开浏览器
  },
  base: '/sen/',
});
