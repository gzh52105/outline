<template>
    <tfoot>
            <tr>
                <td colspan="6">
                  <slot :datalist="datalist" :completelist="completeList" :uncompletelist="unCompleteList">
                    总数：{{datalist.length}}，完成：{{completeList.length}}，未完成：{{unCompleteList.length}}
                  </slot>
                </td>
            </tr>
        </tfoot>
</template>
<script>
export default {
  props: ["datalist"],
  data() {
    return {};
  },
  computed: {
    completeList() {
      return this.datalist.filter(item => item.complete);
    },
    unCompleteList() {
      return this.datalist.filter(item => !item.complete);
    }
  }
};
</script>

