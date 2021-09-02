import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../views/Login.vue'
import Manage from '../views/Manage.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: process.env.NODE_ENV === 'production' ? 'history' : 'hash',
    routes:[
        // 先配置基础路由
        {
            path:'/login',
            component:Login
        },

        // 重定向
        {
            path:'/',
            redirect:'/login'
        },
        // {
        //     path:'*',
        //     redirect:'/login'
        // }
    ]
})
console.log('router',router)

export default router