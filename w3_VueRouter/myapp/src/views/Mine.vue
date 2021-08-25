<template>
    <div class="page-mine">
        <van-nav-bar
            title="我的"
            left-text="返回"
            left-arrow
            @click-left="goBack"
        />
        <div></div>
        <van-button type="primary" size="small" plain @click="goto('/reg')">注册</van-button>
        <van-button type="primary" size="small" plain @click="goto('/login')">登录</van-button>
    
        
        <van-button type="danger" size="small" block style="margin-top:20px;">退出</van-button>
    </div>
</template>
<script>
export default {
    name:'Mine',
    data(){
        return {
            
        }
    },
    methods:{
        goBack(){
            this.$router.back();
        },
        goto(path){
            this.$router.push(path)
        }
    }
}
</script>
<style scoped>
.page-mine{
    text-align:center;
}
</style>
