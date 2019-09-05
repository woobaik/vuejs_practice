import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/Home.vue'
import Chat from '@/components/Chatroom.vue'
Vue.use(VueRouter)

const routes = [
    
    {
        path: '/',
        name: 'Home',
        component: Home
    },

    {
        path: '/chat/:nickname',
        name: 'Chat',
        component: Chat,
        params: true
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router