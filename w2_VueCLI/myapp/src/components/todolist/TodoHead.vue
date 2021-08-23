<template>
    <div class="input-group mb-3">
            <input type="text" class="form-control" ref="input" v-model="todo" v-on:keyup.enter="addItem">
            <button class="btn btn-success" v-on:click="addItem">添加</button>
        </div>
</template>
<script>
export default {
  data() {
    // this.$on('add',handle); this.$off('add');this.$emit('add')
    // 等效于 <todo-head v-on:add="handle" />
    return {
      todo: ""
    };
  },
  template: "#todoHead",
  methods: {
    addItem() {
      console.log("todoHead.addItem");
      // 触发自定义事件
      this.$emit("add", this.todo);

      this.todo = "";
      this.$refs.input.focus();
    }
  }
};
</script>

