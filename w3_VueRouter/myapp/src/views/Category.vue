<template>
    <div>
        Category
    </div>
</template>
<script>
export default {
    name:'Category',
    data(){
        return {
            
        }
    },

    // 组件内守卫
    beforeRouteLeave(to,from,next){
        console.log('Category.beforeRouteLeave')
        next();
    }
}
</script>
