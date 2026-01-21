import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './analytics-sdk.js'

const app = createApp(App)

app.use(router)

// 初始化 Analytics SDK
// eslint-disable-next-line no-undef
Analytics.init('http://127.0.0.1:8888')

// 绑定 Vue Router（自动追踪所有路由变化）
// eslint-disable-next-line no-undef
Analytics.bindVueRouter(router)

app.mount('#app')
