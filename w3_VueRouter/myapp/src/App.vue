<template>
  <div id="app">
    VueRouter
    <nav>
      <router-link tag="div" to="/home" active-class="current">首页</router-link>
      <router-link tag="div" to="/login" active-class="current">登录</router-link>
      <router-link tag="div" to="/reg" active-class="current" replace>注册</router-link>
    </nav>
    <!-- router-view用于显示路由组件 -->
    <router-view></router-view>

    <button @click="goHome">跳转到首页</button>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  created(){
    console.log('App.created',this);
  },
  methods:{
    goHome(){
      // 编程式导航
      // this.$router.push('/home') ; // 会生成浏览记录
      this.$router.replace('/home') // 不会形成浏览记录
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.router-link-active,.current{color:rgb(233, 118, 118)}
</style>
