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
    ],
    scrollBehavior (to, from, savedPosition) {
        // return 期望滚动到哪个的位置
        console.log('scrollBehavior=',to, from, savedPosition)
        // 同步滚动:如一开始就有滚动条的情况,用以下代码保持滚动条位置
        // return savedPosition ? savedPosition : {x:0,y:0}

        // 异步滚动:如是异步请求数据回来后才出现的滚动条,则需要返回promise对象
        return new Promise((resolve)=>{
            console.time('scroll')
            setTimeout(()=>{
                resolve(savedPosition ? savedPosition : {x:0,y:0})
                console.timeEnd('scroll') 
            },3000)
        })
    }
})
console.log('router',router)

export default router