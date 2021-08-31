import Vue from 'vue'
import Vuex from 'vuex'
// import request from '@/utils/request'
import user from './user'

// 权限路由
import authRoutes from '@/router/authRoutes'
import router from '@/router'

// 2. 安装插件
Vue.use(Vuex);

// 3. 创建仓库: 实例化store
const store = new Vuex.Store({

    // 全局状态
    state:{
        msg:'hello',
    },
    getters:{
        qty(state){
            return state.a*2;
        }
    },
    mutations:{
        addRoute(){
            // router.addRoutes(authRoutes)
            router.addRoute(authRoutes)
        }
    },
    actions:{
        addAsync(context){
            setTimeout(()=>{
                context.commit('add')
            },2000)
        }
    },

    // Store模块化: 局部状态
    modules:{
      user  
    }
})

// 刷新页面后根据登录状态动态添加路由
if(store.getters['user/isLogin']){
    store.commit('addRoute')
}

// 4. 注入Vue根实例
export default store