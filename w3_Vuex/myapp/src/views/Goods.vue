<template>
    <NavbarPage title="商品详情" @share="shareGoods">
        <van-image
            :src="'http://120.76.247.5:2003'+goods.img_url"
        />
        <h1>{{goods.goods_name}}</h1>
        <p class="price"><del>{{goods.price}}</del><span>{{goods.sales_price}}</span></p>

        <h4>{{this.goods.category}}相关商品</h4>
        <van-grid column-num="2" :gutter="10">
            <van-grid-item v-for="item in goodslist" :key="item._id">
                <van-image
                width="100"
                height="100"
                 :src="'http://120.76.247.5:2003'+item.img_url"
                 @click="gotoDetail(item._id)"
                >
                    <template #loading>
                        <van-loading type="spinner" size="20" />
                    </template>
                </van-image>
                <h6 class="van-multi-ellipsis--l3">{{item.goods_name}}</h6>
                <p class="price"><del>{{item.price}}</del><span>{{item.sales_price}}</span></p>
            </van-grid-item>
        </van-grid>

        <van-goods-action>
            <van-goods-action-icon icon="chat-o" text="客服" color="#ee0a24" />
            <van-goods-action-icon icon="cart-o" text="购物车" />
            <van-goods-action-icon icon="star" text="已收藏" color="#ff5000" />
            <van-goods-action-button type="warning" text="加入购物车" />
            <van-goods-action-button type="danger" text="立即购买" />
        </van-goods-action>
    </NavbarPage>
</template>
<script>
import NavbarPage from '@/layout/NavbarPage.vue'
import axios from 'axios'
export default {
    name:'Goods',
    data(){
        return {
            goods:{},
            goodslist:[], // 相关商品
        }
    },
    components:{
        NavbarPage,
    },
    // 监听动态路由id变化
    // watch:{
    //     "$route.params.id":function(n,o){
    //         console.log(n,o)
    //         this.getData();
    //     }
    // },
    methods:{
        gotoDetail(id){
            this.$router.push({
                // path:'/goods/'+id,
                name:'GoodsDetail',
                params:{id}
            })
        },
        async getData(){
            // const {id} = this.$route.query;
            const {id} = this.$route.params;

            const {data} = await axios.get("http://120.76.247.5:2003/api/goods/"+id);
            console.log("data=", data);
            this.goods = data.data;
        },
        shareGoods(){
            console.log('分享商品')
        }
    },
    async created(){
        console.log('created.$route',this.$route)
        

        // 获取指定id商品
        await this.getData();

        // 获取相关商品
        axios.get("http://120.76.247.5:2003/api/goods/",{
            params:{
                category:this.goods.category,
                total:false
            }
        }).then(({ data }) => {
            console.log("goodslist=", data);
            this.goodslist = data.data;
        });

    },
    mounted(){
        // 隐藏tabbar
        document.querySelector('.van-tabbar').classList.add('hide')

    },
    destroyed(){
        document.querySelector('.van-tabbar').classList.remove('hide')
    },

    // 路由组件守卫
    beforeRouteEnter(to,from,next){
        // to: 目标路由(与$route属性一致的对象)
        // from: 来源路由(与$route属性一致的对象)
        // next(): 是否允许下一步
        console.log('beforeRouteEnter',to.path,from.path,next)

        // 只允许从首页进入页面
        // if(from.path === '/home'){
            next();
        // }
    },
    beforeRouteUpdate(to,from,next){
        console.log('beforeRouteUpdate',to,from,next)
        next();
        this.getData();
    },
    beforeRouteLeave(to,from,next){
        console.log('beforeRouteLeave',to,from,next)
        next();
    }
}
</script>
<style scoped>
    h1{
    font-size:20px; 
    }
</style>
