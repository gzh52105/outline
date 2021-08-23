<template>
    <table class="table">
            <thead>
                <tr>
                    <th scope="col"><input type="checkbox" v-model="checkAll"></th>
                    <th scope="col">#</th>
                    <th scope="col">待办事项</th>
                    <th scope="col">添加时间</th>
                    <th scope="col">是否完成</th>
                    <th scope="col">操作</th>
                </tr>
            </thead>
            <tbody>
                <!-- <todo-item></todo-item> -->
                <!-- <tr is="todo-item" v-for="(item,idx) in datalist" :item="item" :idx="idx" :complete="complete"></tr> -->
                <TodoItem v-for="(item,idx) in datalist" :item="item" :idx="idx" :key="item.id" />
            </tbody>
            <!-- <todo-foot></todo-foot> -->
            <!-- <tfoot is="todo-foot" :datalist="datalist"></tfoot> -->
            <TodoFoot :datalist="datalist" />
        </table>
</template>
<script>
import Bus from "../Bus";
import TodoItem from "./TodoItem.vue";
import TodoFoot from "./TodoFoot.vue";

export default {
  props: ["datalist"],
  data() {
    return {};
  },
  computed: {
    checkAll: {
      get() {
        return this.datalist.every(item => item.checked);
      },
      set(checked) {
        Bus.$emit("selectall", checked);
      }
    }
  },
  components: {
    TodoItem,
    TodoFoot
  }
};
</script>

