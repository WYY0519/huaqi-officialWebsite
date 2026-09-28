import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

// 兼容旧 hash 链接：/#/products/H400 → /products/H400（history 模式下 # 后内容不参与路由）
if (window.location.hash.startsWith('#/')) {
  window.location.replace(window.location.hash.slice(1))
}

const app = createApp(App)
app.use(router)
app.mount('#app')
