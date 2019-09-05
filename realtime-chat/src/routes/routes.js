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
        path: '/chat',
        name: 'Chat',
        props: true,
        component: Chat,
        beforeEnter: (to, from, next) => {
            if (to.params.nickname) {
                next()
            } else {
                next({name: 'Home'})
            }
        }
    },

    
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router