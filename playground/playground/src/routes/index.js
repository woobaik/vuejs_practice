import Vue from 'vue';
import Router from 'vue-router'

import Home from '@/components/Home.vue'
import About from '@/components/About.vue'
import userProfile from '@/components/UserProfile.vue'

Vue.use(Router)

export default new Router ({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        }, 
        {
            path: '/about',
            name: 'About',
            component: About
        }, {
            path: '/profile/:user_id',
            name: 'Profile',
            component: userProfile
        }
    ]

})