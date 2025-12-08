import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3000,
    host: "0.0.0.0", // 允许外部访问
    open: true, // 自动打开浏览器
  },
  base: "/sen/", // 关键：使用相对路径
  plugins: [vue()],
});
