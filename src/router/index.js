import {createRouter, createWebHistory} from 'vue-router'

// 创建一个路由: 映射关系
const router = createRouter({
    history: createWebHistory(),
    // 映射关系
    routes: [
        {
            path: "/",
            name: "home",
            component: () => import("@/views/home/HomeView"),

        },

        {
            path: "/search",
            component: () => import("../views/list/ListView")
        }
    ]
})

export default router
