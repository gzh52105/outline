import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../views/Login.vue'
import Manage from '../views/Manage.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    routes:[
        {
            path:'/login',
            component:Login
        },
        {
            path:'/manage',
            component:Manage,
            meta:{
                requiresAuth:true
            }
        },
    ]
})

// 利用路由拦截实现页面访问权限控制
router.beforeEach((to,from,next)=>{
    // 1. 判断目标路由是否需要登录权限
    if(to.meta.requiresAuth){
        // 2. 判断是否登录(通过全局状态vuex)
        if(store.getters.isLogin){
            // 3. 判断用户身份(是否过期,是否被篡改)
            next();
            // ajax().then(res=>{
            //     if(res.code === 400){
            //         next({
            //             path:'/login',
            //             query:{
            //                 target:to.fullPath
            //             }
            //         })
            //     }
            // })
        }else{
            // 没登陆: 则让用户跳到登录页面
            next({
                path:'/login',
                query:{
                    target:to.fullPath
                }
            })
        }
    }
})

export default router