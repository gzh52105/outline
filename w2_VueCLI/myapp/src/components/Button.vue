<template>
    <button :class="['btn',size,type]">
        <slot>Button</slot>
    </button>
</template>
<script>
export default {
  //   props: ["type"],
  props: {
    //   type:String,
    type: {
      type: String,
      required: true,
      validator(value){
          return ['primary','success','danger'].includes(value)
      }
    },
    index: [Number, String],
    size: {
      type: [Number, String],
      default: "default"
    }
  },
  methods: {}
};
</script>
<style scoped>
/** 
    scoped: 局部样式，添加scoped后，这里的样式只在当前组件生效
 */
.btn {
  border: 1px solid #999;
  color: #fff;
  padding: 0.2em 0.5em;
}
.success {
  border-color: #58bc58;
  background-color: #58bc58;
}
.danger {
  border-color: #f00;
  background-color: #f00;
}
.primary {
  border-color: #0d6efd;
  background-color: #0d6efd;
}
.large {
  font-size: 26px;
}

.small {
  font-size: 12px;
}
</style>


