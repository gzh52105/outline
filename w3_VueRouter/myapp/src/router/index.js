import Vue from 'vue'
// 1.引入
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Reg from '../views/Reg.vue'
import Category from '../views/Category.vue'
import Mine from '../views/Mine.vue'
import Cart from '../views/Cart.vue'
import Goods from '../views/Goods.vue'

import request from '@/utils/request'

// 2. 安装插件
Vue.use(VueRouter)

// 3. 实例化router并配置参数
const router = new VueRouter({
    // mode:'history', // hash(默认),history
  // 路由表
  routes:[
    // 当浏览器地址匹配/home时，渲染Home组件中的内容
    {
      // 命名路由：给路由设置一个名字
      name:'Home',
      path:'/home',
      component:Home
    },
    {
      path:'/category',
      component:Category
    },
    {
      path:'/cart',
      component:Cart,
      meta:{
        requiresAuth:true
      }
    },
    {
      name:'Mine',
      path:'/mine',
      component:Mine,
      meta:{
        requiresAuth:true
      },
      // 路由独享守卫
      beforeEnter(to,from,next){
        console.log('Mine.beforeEnter')
        next();
      }
    },
    {
      path:'/login',
      component:Login
    },
    {
      path:'/reg',
      component:Reg
    },
    {
      name:'Goods',
      path:'/goods',
      component:Goods
    },
    {
      name:'GoodsDetail',
      path:'/goods/:id', // /goods/1->/goods/2
      component:Goods
    },
  ]
})


// 全局路由守卫(所有的导航都会进入全局守卫)
router.beforeEach(function(to,from,next){
  console.log('beforeEach');
  // 判断目标路由是否需要登录权限
  if(to.meta.requiresAuth){
    // 判断是否登录
    const userInfo = JSON.parse(localStorage.getItem('userInfo'))||{}
    console.log('userInfo=',userInfo)
    if(userInfo.authorization){
      // 发送token给服务器校验
      request.get('/user/verify',null,{
        headers:{
          Authorization:userInfo.authorization
        }
      }).then(data=>{
        if(data.code === 400){
          next({
            path:'/login',
            query:{
              targetUrl:to.fullPath
            }
          })
        }
      })
      // 请求可能花费很长时间,为了用户体验,不管token是否有效,先放行
      next();
    }else{
      router.push({
        path:'/login',
        query:{
          targetUrl:to.fullPath
        }
      })
      // next('/login')
    }
  }else{
    next();
  }
})
router.beforeResolve(function(to,from,next){
  console.log('beforeResolve');
  next();
})

router.afterEach(function(to,from){
  console.log('afterEach',to.path,from.path);
})

export default router