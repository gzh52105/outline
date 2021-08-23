<template>
  <div id="app">
    <!-- <Todolist/> -->
    <Todo />

    <!-- 自定义组件 -->
    <Button type="primary" size="large">完成</Button>
    <Button type="danger">删除</Button>
    <Button type="success" size="small">添加</Button>
    <Button type="primary" size="small">添加</Button>
    <!-- <Button index="10" size="20">TEST</Button> -->
    <button @click="handle">button</button>
  </div>
</template>
<link 
<script>
// import HelloWorld from './components/HelloWorld.vue'
import Todolist from './components/Todolist.vue'
import Todo from './components/todolist/Todolist.vue'
import Button from './components/Button.vue'

export default {
  // 组件配置
  name: 'App',
  data(){
    return {

    }
  },
  methods:{
    handle(){
      console.log('click')
    }
  },

  components: {
    // HelloWorld,
    Todolist,
    Todo,
    Button
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
</style>
