import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import * as Icons from '@element-plus/icons-vue'
import './assets/css/index.css'
const app = createApp(App)

// 注册Icons 全局组件
Object.keys(Icons).forEach(key => {
    app.component(key, Icons[key])
})
app.use(router).mount('#app')
