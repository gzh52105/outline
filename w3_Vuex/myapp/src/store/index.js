import Vue from 'vue'
import Vuex from 'vuex'

// 2. 安装插件
Vue.use(Vuex);

// 数据持久化(刷新时从本地存储获取数据)
let userInfo = localStorage.getItem('userInfo');
try{
    userInfo = JSON.parse(userInfo) || {}
}catch(err){
    userInfo = {}
}

// 3. 创建仓库: 实例化store
const store = new Vuex.Store({
    // 配置参数
    // 状态
    state:{
        goodslist:[],
        userInfo,
    },
    // 类似于组件中的computed,一般用于根据state映射出其他的数据
    // getters只能获取,不能修改
    getters:{
        totalPrice(state){
            return state.goodslist.reduce((prev,item)=>prev+item.sales_price*item.qty,0)
        },
        isLogin(state){
            return Boolean(state.userInfo.authorization)
        }
    },

    // 修改state的唯一方式
    mutations:{
        // this.$store.commit('add2cart',goods)
        add2cart(state,payload){
            state.goodslist.unshift(payload)
        },
        removeCart(state,id){
            state.goodslist = state.goodslist.filter(item=>item._id !==id)
        },
        changeQty(state,payload){
            state.goodslist.forEach((item)=>{
                // 找到当前商品,并修改它的数量
                if(item._id === playload._id){
                    item.qty = palyload.qty;
                }
            })
        },

        // 登录
        login(state,payload){
            state.userInfo = payload;
            localStorage.setItem('userInfo',JSON.stringify(payload))
        },
        logout(state){
            state.userInfo = {};
            localStorage.removeItem('userInfo')
        }
    }
})

// 4. 注入Vue根实例
export default store