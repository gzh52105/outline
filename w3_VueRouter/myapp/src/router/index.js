import Vue from 'vue'
// 1.引入
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Reg from '../views/Reg.vue'

// 2. 安装插件
Vue.use(VueRouter)

// 3. 实例化router并配置参数
const router = new VueRouter({
  // 路由表
  routes:[
    // 当浏览器地址匹配/home时，渲染Home组件中的内容
    {
      path:'/home',
      component:Home
    },
    {
      path:'/login',
      component:Login
    },
    {
      path:'/reg',
      component:Reg
    }
  ]
})

export default router