<template>
    <tr @click="selectItem(item.id)">
            <!-- <th><input type="checkbox" v-model="item.checked"></th> -->
            <th><input type="checkbox" v-bind:checked="item.checked" @change="checkItem(item.id,$event)"></th>
            <th>{{idx+1}}</th>
            <td>{{item.todo}}</td>
            <td>{{item.addtime}}</td>
            <td>{{item.complete ? '是' : '否'}}</td>
            <td>
                <!-- 逐层传递complete方法到todoItem中执行 -->
                <!-- <button class="btn btn-outline-primary btn-sm" @click.stop="complete(item.id)">完成</button> -->
                <!-- Bus事件总线实现 -->
                <button class="btn btn-outline-primary btn-sm" @click.stop="completeItem(item.id)">完成</button>
                <button class="btn btn-outline-danger btn-sm" v-on:click.stop="removeItem(item.id)">删除</button>
            </td>
        </tr>
</template>
<script>
import Bus from './Bus';
export default {
  props: ["item", "idx"],
  data() {
    return {};
  },
  methods: {
    removeItem(id) {
      Bus.$emit('remove',id)
      // vm.$emit('remove',id)
      // this.$root.$emit("remove", id);
    },
    completeItem(id) {
      Bus.$emit('complete',id)
      // vm.$emit('complete',id)
      // this.$root.$emit("complete", id);
    },
    selectItem(id,checked){
      Bus.$emit('select',id)
    },
    checkItem(id,e){
      Bus.$emit('select',id,e.target.checked)
    }
  }
};
</script>

