import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/common.less'   // 常用样式
import './assets/css/index.less'    // 初始样式
import './index.css'
// import router from './router'



const app = createApp(App)

app.mount('#app')