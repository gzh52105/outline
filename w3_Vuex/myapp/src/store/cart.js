import request from '@/utils/request'
import {Dialog,Toast} from 'vant'
export default {
    // namespaced:true,
    state:{
        goodslist:[],
    },
    getters:{
        totalPrice(state){
            return state.goodslist.reduce((prev,item)=>prev+item.sales_price*item.qty,0)
        },
    },
    mutations:{
        // this.$store.commit('add2cart',goods)
        add2cart(state,payload){
            state.goodslist.unshift(payload)
        },
        removeCart(state,payload){
            state.goodslist = state.goodslist.filter(item=>!payload.includes(item._id))
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
    },
    actions:{
        add2cart(context,goods){
            // const {_id:userid,authorization} = context.state.userInfo
            // 在当前模块获取其他模块数据
            const {_id:userid,authorization} = context.rootState.user.userInfo
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
            const {_id:userid,authorization} = context.rootState.user.userInfo
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
            console.log('context',context);
            const {_id:userid,authorization} = context.rootState.user.userInfo
            request.get('/cart',{
                userid
            },{
                headers:{
                    Authorization:authorization
                }
            }).then(res=>{
                context.commit('initCart',res.data.goodslist);
            })
        },
        async removeCart(context,payload){
            // payload 为数组,支持批量商品删除
            const {_id:userid,authorization} = context.rootState.user.userInfo
            try{
                await Dialog.confirm({
                    title: '确认操作',
                    message: '是否确认删除',
                });
              
  
              request.delete('/cart',null,{
                  // 请求头
                  headers:{
                      Authorization:authorization
                  },
  
                  // 请求体
                  data:{
                      userid,
                      ids:payload,
                  }
              }).then(data=>{

                  if(data.code === 200){
                      context.commit('removeCart',payload)
                  }else{
                      Toast.fail('删除失败')
                  }
              })
  
  
            }catch(err){
                console.log('cancel')
            }
        }
    }
}