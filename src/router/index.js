import {createRouter, createWebHistory} from 'vue-router'

// 创建一个路由: 映射关系
const router = createRouter({
    history: createWebHistory(),
    // 映射关系
    routes: [
        {
            //redirect是重定向, 也就是我们将根路径重定向到/home的路径下.可以让路径默认跳到到首页, 并且<router-view>渲染首页组件
            path: "/",
            redirect: "/home"
        },
        {
            name: "home",
            path: "/home",
            component: () => import("@/views/home/HomeView"),

        }, {
            path: "/search",
            redirect: "/home/search"
        },
        {
            path: "/home/search",
            component: () => import("../views/list/ListView")
        }
    ]
})

export default router
