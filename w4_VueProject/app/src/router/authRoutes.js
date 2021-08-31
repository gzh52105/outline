import Manage from '../views/Manage.vue'
import Goods from '../views/goods/Goods.vue'
import Order from '../views/order/Order.vue'
import User from '../views/user/User.vue'
import Home from '../views/Home.vue'

// 导出单个路由, 匹配router.addRoute()参数
export default {
    path:'/manage',
    component:Manage,
    // 子路由(嵌套路由)
    children:[
        {
            path:'',
            redirect:{name:'Home'}
        },
        {
            path:'home',
            component:Home,
            name:'Home'
        },
        {
            path:'goods',
            component:Goods,
        },
        {
            path:'user',
            component:User
        },
        {
            path:'order',
            component:Order
        },
    ]
}