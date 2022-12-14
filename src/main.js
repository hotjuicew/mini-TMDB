import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import * as Icons from '@element-plus/icons-vue'
import './assets/css/index.css'
import instanceP from '@/stores/index'
const app = createApp(App)
app.use(instanceP).use(router).mount('#app')

// 注册Icons 全局组件
Object.keys(Icons).forEach(key => {
    app.component(key, Icons[key])
})
