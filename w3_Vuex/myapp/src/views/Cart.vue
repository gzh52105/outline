<template>
    <NavbarPage title="购物车">
        <template #right>
            <!-- <van-icon name="edit" size="20" /> -->
            <van-button type="info" icon="edit" size="mini" plain style="border:none">编辑</van-button>
        </template>
        <van-steps :active="active">
            <van-step>购物车</van-step>
            <van-step>确认订单</van-step>
            <van-step>付款</van-step>
            <van-step>完成</van-step>
        </van-steps>
        <van-row type="flex" align="center" gutter="" v-for="item in goodslist" :key="item._id">
            <van-col span="2"><van-checkbox :value="selectIds.includes(item._id)" @click="selectItem(item._id)"></van-checkbox></van-col>
            <van-col span="20">
                <van-card
                    :num="item.qty"
                    :origin-price="item.price"
                    :price="item.sales_price"
                    :thumb-link="'#/goods/'+item._id"
                    desc="描述信息"
                    :title="item.goods_name"
                    :thumb="$baseUrl+item.img_url"
                    style="padding-left:0;background-color:#fff"
                    >
                        <template #num>
                            <van-stepper v-model="item.qty" theme="round" button-size="20" :max="5" disable-input :name="item._id" @change="changeQty" />
                        </template>
                        <template #thumb>
                            <van-image  :src="$baseUrl+item.img_url"  width="60" height="60" />
                        </template>
                    </van-card>
            </van-col>
            <van-col span="2">
                <!-- <van-button size="mini" type="danger" icon="delete" plain></van-button> -->
                <van-icon name="delete" color="#666" size="16" @click="removeItem(item._id)" />
            </van-col>
        </van-row>

        <van-submit-bar
            :price="totalPrice*100"
            button-text="提交订单"
            @submit="onSubmit"
        >
            <van-checkbox v-model="checkAll">全选</van-checkbox>
            <template #tip>
                你的收货地址不支持同城送, <span>修改地址</span>
            </template>
        </van-submit-bar>
    </NavbarPage>
</template>
<script>
import NavbarPage from '@/layout/NavbarPage.vue';
import { Toast,Dialog } from 'vant';
import {mapState,mapActions} from 'vuex'

// const res = mapState(['a'])
// console.log('res=',res);

export default {
  name: "Cart",
  data() {
    return {
        // checkAll:false,
        active:0,
    //    goodslist: [
    //     {
    //       _id: "6037755f08f65d3a6c243510",
    //       goods_name:
    //         "瑞士 爱宝时（EPOS）-Sportive运动系列海兽克拉肯 深海蓝 3441.131.96.56.30 潜水机械男表",
    //       category: "运动表",
    //       price: 9900,
    //       sales_price: 7095,
    //       installment: 825,
    //       sales_qty: 315,
    //       inventory: 651,
    //       img_url: "/img/a6e3bdaff5094acb86e77320d3074c47.jpg",
    //       views: 904,
    //       qty: 2
    //     },
    //     {
    //       _id: "6037755f08f65d3a6c243511",
    //       goods_id: "70662",
    //       goods_name:
    //         "瑞士艺术制表大师 爱宝时（EPOS）-Sportive运动系列海兽克拉肯 砾岩黑 3441.131.20.55.30 潜水机",
    //       category: "运动表",
    //       price: 9900,
    //       sales_price: 17095,
    //       installment: 825,
    //       sales_qty: 422,
    //       inventory: 180,
    //       img_url: "/img/62973840d24947d696882fdec2174492.jpg",
    //       views: 24,
    //       qty: 10
    //     }
    //    ],
      selectIds:[]
    };
  },
  computed:{
    //   goodslist(){
    //       return this.$store.state.cart.goodslist;
    //   },
    // userInfo(){
    //       return this.$store.state.user.userInfo
    // },

    // 映射全局状态:数组形式
    // ...mapState(['a','msg']),
    // ...mapState({a:'a',msg:'msg',list:'goodslist'})
    
    // 映射模块状态:对象形式+函数
    ...mapState({
        goodslist:state=>state.cart.goodslist,
        // userInfo:state=>state.user.userInfo,
    }),
    // 映射带命名空间模块
    // ...mapState('cart',['goodslist']),
    // ...mapState('cart',{goodslist:state=>state.goodslist}),
    ...mapState('user',['userInfo']),
    
      totalPrice(){
          return this.goodslist.filter(item=>this.selectIds.includes(item._id)).reduce((prev,item)=>prev+item.sales_price*item.qty,0)
      },
      checkAll:{
          get(){
             return this.goodslist.every(item=>{
                 return this.selectIds.includes(item._id)
             }) 
          },
          set(checked){
              if(checked){
                  this.selectIds = this.goodslist.map(item=>item._id)
              }else{
                  this.selectIds = []
              }

              console.log('checked',checked,this.selectIds)
          }
      },
      
  },
  components:{
      NavbarPage
  },
  methods:{
      onSubmit(){

      },
      selectItem(id){
          const idx = this.selectIds.indexOf(id)
          if(idx>=0){
              this.selectIds.splice(idx,1)
          }else{
              this.selectIds.push(id);
          }
      },
      /*// 获取购物车商品列表
      async getData(){
          const data = await this.$request.get('/cart',{
              userid:this.userInfo._id
          },{
              headers:{
                  Authorization:this.userInfo.authorization
              }
          })

          console.log('cart',data)
          this.goodslist = data.data.goodslist
      },

      //修改商品数量
      async changeQty(qty,{name:id}){

          const data = await this.$request.patch('/cart',{
              userid:this.userInfo._id,
              id,
              qty
          },{
              headers:{
                  Authorization:this.userInfo.authorization
              }
          })
      },

      // 删除商品
      async removeItem(id){
          try{
              await Dialog.confirm({
                  title: '确认操作',
                  message: '是否确认删除',
              });
            

            const data = await this.$request.delete('/cart',null,{
                // 请求头
                headers:{
                    Authorization:this.userInfo.authorization
                },

                // 请求体
                data:{
                    userid:this.userInfo._id,
                    ids:[id],
                }
            })

            if(data.code === 200){
                this.goodslist = this.goodslist.filter(item=>item._id !== id)
            }else{
                Toast.fail('删除失败')
            }

          }catch(err){
              console.log('cancel')
          }
      }*/
    
      ...mapActions(['initCart']),
      ...mapActions({
          removeItem(dispatch,id){
              dispatch('removeCart',[id])
          },
          changeQty:function(dispatch,qty,{name:id}){
              // 当actions中所需参数格式与实际不符时,使用对象实行
              dispatch('changeQty',{_id:id,qty})
          }
      }),

  },
  created(){
    //   this.getData();
    console.log('Cart',this);
  }
};
</script>
<style scoped>
    .van-card__thumb{width:60px;height:60px;}
</style>

