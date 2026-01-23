import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './analytics-sdk.js'

const app = createApp(App)

app.use(router)

// 初始化 Analytics SDK
// eslint-disable-next-line no-undef
Analytics.init('http://127.0.0.1:5217', { autoTrackPageView: true, skipInitialPageView: true })

// 等路由 ready 后再绑定并发送首屏 PV，避免刷新时先被记录为 '/'
router.isReady().then(() => {
  // eslint-disable-next-line no-undef
  Analytics.bindVueRouter(router)
  // eslint-disable-next-line no-undef
  Analytics.trackPageView()
})

app.mount('#app')
