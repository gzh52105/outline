<template>
    <div>
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item>1</van-swipe-item>
            <van-swipe-item>2</van-swipe-item>
            <van-swipe-item>3</van-swipe-item>
            <van-swipe-item>4</van-swipe-item>
        </van-swipe>
        <h4>最新商品</h4>
        <van-grid column-num="2" :gutter="10">
            <van-grid-item v-for="item in newlist" :key="item._id">
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
    </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Home",
  data() {
    return {
      newlist: []
    };
  },
  created() {
    axios.get("http://120.76.247.5:2003/api/goods").then(({ data }) => {
      console.log("data=", data);
      this.newlist = data.data.result;
    });
  },
  methods: {
    gotoDetail(id) {
      // this.$router.push('/goods?id='+id)
      // 1. 通过路径跳转
    //   this.$router.push({
    //     path: "/goods",
    //     query: { id },
    //     // params:{a:10,b:20,id}, // 路径跳转方式不支持params
    //   });

    // 2. 通过路径名称跳转(前提必须给路由命名)
    this.$router.push({
        name:'GoodsDetail',
        // query:{id},
        // params传参,只支持name方式跳转
        params:{id,a:10,b:20}
    })
    }
  }
};
</script>
<style scoped>
.my-swipe {
  height: 120px;
  text-align: center;
  line-height: 120px;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 120px;
  text-align: center;
  background-color: #39a9ed;
}
</style>
