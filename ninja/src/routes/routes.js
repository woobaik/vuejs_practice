import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/Home.vue'
import NewJuice from '@/components/NewJuice.vue'
Vue.use(VueRouter)


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },

    {
        path:'/addNewJuice',
        name: 'NewJuice',
        component: NewJuice
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router