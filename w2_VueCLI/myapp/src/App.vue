<template>
  <div id="app">
    <!-- <Todolist/> -->
    <!-- <Todo /> -->

    <!-- 自定义组件 -->
    <!-- <Button type="primary" size="large">完成</Button>
    <Button type="danger">删除</Button>
    <Button type="success" size="small">添加</Button>
    <Button type="primary" size="small">添加</Button> -->
    <!-- <Button index="10" size="20">TEST</Button> -->
    <!-- <button @click="handle">button</button> -->

    <!-- <Totop/>
    <Totop position="lb">返回顶部</Totop> -->
    <Lifecycle v-if="show"></Lifecycle>
    <!-- <button @click="show=!show">显示/隐藏</button> -->
  </div>
</template>
<link 
<script>
// import HelloWorld from './components/HelloWorld.vue'
// import Todolist from './components/Todolist.vue'
// import Todo from './components/todolist/Todolist.vue'
import Button from './components/Button.vue'
import Totop from './components/Totop.vue'
import Lifecycle from './components/Lifecycle.vue'

export default {
  // 组件配置
  name: 'App',
  data(){
    return {
      show:true
    }
  },
  methods:{
    handle(){
      console.log('click')
    }
  },

  components: {
    // HelloWorld,
    // Todolist,
    // Todo,
    Button,
    Totop,
    Lifecycle
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
  padding-bottom:2000px;
}
</style>
