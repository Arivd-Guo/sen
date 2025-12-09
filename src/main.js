// 使用CDN引入的全局Vue对象
const { createApp } = Vue;

// 导入路由和组件
import './utils/rem.js'
import router from './router/index.js'
import App from './App.vue'

const app = createApp(App)
app.use(router)
app.mount('#app')