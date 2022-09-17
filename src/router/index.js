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
            path:'/search',
            redirect:'/search/tv',
            component: () => import("../views/list/ListView"),
            children:[
                {
                    path: "/search/tv",
                    component: () => import("../views/list/cpn/TvList.vue")
                },
                {
                    path: "/search/movie",
                    component: () => import("../views/list/cpn/MovieList.vue")
                },
                {
                    path: "/search/person",
                    component: () => import("../views/list/cpn/PersonList.vue")
                },
                {
                    path: "/search/collection",
                    component: () => import("../views/list/cpn/CollectionList")
                },
            ]
        },

    ]
})

export default router
