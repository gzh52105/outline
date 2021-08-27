<template>
  <div id="app">
    <!-- VueRouter
    <nav>
      <router-link tag="div" to="/home" active-class="current">首页</router-link>
      <router-link tag="div" to="/login" active-class="current">登录</router-link>
      <router-link tag="div" to="/reg" active-class="current" replace>注册</router-link>
    </nav> -->
    <!-- router-view用于显示路由组件 -->
    <router-view></router-view>

    <!-- <button @click="goHome">跳转到首页</button> -->

    <van-tabbar 
    v-model="currentTab" 
    active-color="#58bc58" 
    route
    >
      <van-tabbar-item :icon="item.icon" v-for="item in menu" :key="item.path" :to="item.path" :badge="item.path==='/cart'?5:null">
      {{$store.getters.isLogin&&item.path==='/mine' ? $store.state.userInfo.username : item.text}}
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      currentTab:0,
      menu: [
        {
          path: "/home",
          text: "首页",
          icon: "wap-home-o"
        },
        {
          path: "/category",
          text: "分类",
          icon: "apps-o"
        },
        {
          path: "/cart",
          text: "购物车",
          icon: "cart-o"
        },
        {
          path: "/mine",
          text: "我的",
          icon: "contact"
        }
      ]
    };
  },
  components: {},
  created() {
    console.log("App.created", this);
  },
  methods: {
    goHome() {
      // 编程式导航
      // this.$router.push('/home') ; // 会生成浏览记录
      this.$router.replace("/home"); // 不会形成浏览记录
    },
    changeTabbar(active){
      console.log('active',active)
      const {path} = this.menu[active]
      this.$router.push(path)
    },
    goto(path){
      console.log(666,path)
      this.$router.push(path)
    }
  }
};
</script>

<style>
#app {
  padding:0.5em;
}
.router-link-active,
.current {
  color: rgb(233, 118, 118);
}
.price del{color:#666;margin-right:5px;}
.price span{color:#f00}
.price del::before,.price span::before{
  content:'￥'
}
.van-tabbar.hide{
  display: none
}
</style>
