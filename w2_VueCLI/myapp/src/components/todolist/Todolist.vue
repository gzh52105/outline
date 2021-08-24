<template>
    <div class="container">
        <div class="title">TodoList待办事项</div>
        <!-- <todo-head @add="addItem"></todo-head> -->
        <!-- <todo-body v-bind:datalist="list" :complete="completeItem"></todo-body> -->
        <TodoHead @add="addItem" />
        <TodoBody>
          <template #head>
              <thead>
                <tr>
                    <th scope="col"><input type="checkbox" v-model="checkAll"></th>
                    <th scope="col">#</th>
                    <th scope="col">todo</th>
                    <th scope="col">添加时间</th>
                    <th scope="col">是否完成</th>
                    <th scope="col">操作</th>
                </tr>
            </thead>
          </template>
          <TodoItem v-for="(item,idx) in list" :item="item" :idx="idx" :key="item.id" />
          <template v-slot:foot>
            <TodoFoot :datalist="list">
              <!-- 需要组件内的数据完成html结构的生成 -->
              <template v-slot="{datalist,uncompletelist,completelist}">
              total：{{datalist.length}}条，complete：{{completelist.length}}条，uncomplete：{{uncompletelist.length}}条
              </template>
            </TodoFoot>
          </template>
        </TodoBody>


        <!-- <TodoBody :datalist="list">
          <TodoItem v-for="(item,idx) in list" :item="item" :idx="idx" :key="item.id" />
          <template v-slot:foot>
            <TodoFoot :datalist="list" />
          </template>
        </TodoBody> -->
    </div>
</template>
<script>
import Bus from './Bus';
import TodoHead from './TodoHead.vue'
import TodoBody from './TodoBody.vue'
import TodoFoot from './TodoFoot.vue'
import TodoItem from './TodoItem.vue'
import 'bootstrap/dist/css/bootstrap.css'

export default {
  data() {
    // 给Bus添加事件，并把父组件方法作为事件处理函数
    Bus.$on('remove',this.removeItem)
    Bus.$on('complete',this.completeItem)
    Bus.$on('select',this.selectItem)
    Bus.$on('selectall',this.selectAll)
    // vm.$on('remove',this.removeItem)
    // vm.$on('complete',this.completeItem)

    // this.$root.$on("remove", this.removeItem);
    // this.$root.$on("complete", this.completeItem);

    return {
      list: [
        {
          id: 1,
          todo: "赚他一个亿津巴布韦币",
          complete: true,
          checked: false,
          addtime: Date.now() + 3600 * 1000
        },
        {
          id: 2,
          todo: "迎娶白富美，达到人生巅峰",
          complete: false,
          checked: false,
          addtime: Date.now() + 3600 * 1000 * 5
        },
        {
          id: 3,
          todo: "出任CEO，达到疯癫状态",
          complete: false,
          checked: true,
          addtime: Date.now() + 3600 * 1000 * 10
        }
      ]
    };
  },
  computed:{
    checkAll:{
      get(){
        return this.list.every(item=>item.checked)
      },
      set(checked){
        return this.list.forEach(item=>item.checked=checked)
      }
    }
  },

  // 局部组件
  components: {
    TodoHead,
    TodoBody,
    TodoFoot,
    TodoItem
  },
  methods: {
    addItem(todo) {
      console.log("todolist.addItem", todo);
      const newItem = {
        id: parseInt(Math.random() * 100000),
        todo,
        complete: false,
        checked: false,
        addtime: Date.now()
      };
      this.list.unshift(newItem);
    },
    removeItem(id) {
      this.list = this.list.filter(item => item.id !== id);
    },
    completeItem(id) {
      this.list.forEach(item => {
        if (item.id === id) {
          item.complete = !item.complete;
        }
      });
    },
    selectItem(id,checked) {
      this.list.forEach(item => {
        if (item.id === id) {
          item.checked = checked!==undefined ? checked : !item.checked;
        }
      });
    },
    selectAll(checked){
         this.list.forEach(item => {
        
          item.checked = checked;
      });
    }
  }
};
</script>
<style>
</style>


