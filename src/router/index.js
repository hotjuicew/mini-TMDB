import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/home/HomeView.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
        children: [{
          path: '/search',
          name: 'search',
          component: () => import('@/views/list/ListView')
        }]
    },

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
