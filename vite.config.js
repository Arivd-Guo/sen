import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3000,
    host: '0.0.0.0', // 允许外部访问
    open: true // 自动打开浏览器
  },
  // GitHub Pages部署时的基础路径，根据实际情况修改
  // 如果部署在https://username.github.io/下，使用'/'
  // 如果部署在https://username.github.io/repo-name/下，使用'/repo-name/'
  base: '/'
})
