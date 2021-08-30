import Vue from 'vue'
import Vuex from 'vuex'
// import request from '@/utils/request'
import cart from './cart'
import user from './user'

// 2. 安装插件
Vue.use(Vuex);

// 数据持久化(刷新时从本地存储获取数据)
// let userInfo = localStorage.getItem('userInfo');
// try{
//     userInfo = JSON.parse(userInfo) || {}
// }catch(err){
//     userInfo = {}
// }

// 3. 创建仓库: 实例化store
const store = new Vuex.Store({
    /*// 配置参数
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
                if(item._id === payload._id){
                    item.qty = payload.qty;
                }
            })
        },
        initCart(state,payload){
            state.goodslist = payload
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
    },

    // actions:类似与mutation,一般用于异步操作
    actions:{
        add2cart(context,goods){
            const {_id:userid,authorization} = context.state.userInfo
            request.post('/cart',{
                goods,
                userid
            },{
                headers:{
                    Authorization:authorization
                }
            }).then(res=>{
                if(res.code === 200){
                    // 只有在服务器添加到购物车成功后,本地才执行添加到购物车的操作
                    context.commit('add2cart',goods)
                }
            })
        },
        changeQty(context,{_id,qty}){
            const {_id:userid,authorization} = context.state.userInfo
            request.patch('/cart',{
                userid,
                id:_id,
                qty
            },{
                headers:{
                    Authorization:authorization
                }
            }).then(res=>{
                if(res.code === 200){
                    context.commit('changeQty',{_id,qty})
                }
            })
        },
        initCart(context){
            const {_id:userid,authorization} = context.state.userInfo
            request.get('/cart',{
                userid
            },{
                headers:{
                    Authorization:authorization
                }
            }).then(res=>{
                context.commit('initCart',res.data.goodslist);
            })
        }
    },*/

    // 全局状态
    state:{
        a:10,
        msg:'hello',
    },
    getters:{
        qty(state){
            return state.a*2;
        }
    },
    mutations:{
        add(state){
            console.log('global.add')
            state.a++;
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
      cart,
      user  
    }
})

// 测试数据
console.log('store',store);
// 触发全局mutaiton
store.commit('add');
// 触发局部mutation(设置了命名空间的模块)
store.commit('user/add')

// 初始化购物车
store.dispatch('initCart');


// 4. 注入Vue根实例
export default store