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
    
        
        <van-button type="danger" size="small" block style="margin-top:20px;" @click="logout">退出</van-button>
        <button @click="show=!show">show:{{show}}</button>
        <transition>
            <div class="box" v-if="show"></div>
        </transition>
        <!-- 修改类名前缀 -->
        <transition name="fade">
            <!-- v-enter -> fade-enter -->
            <div class="box" v-if="show"></div>
        </transition>

        <transition 
            enter-class="gostart"
            enter-to-class="goend"
            enter-active-class="animate__backInRight"
        >
            <!-- 
                v-enter -> gostart
                v-enter-to -> goend
             -->
            <div class="box" v-if="show"></div>
        </transition>
    </div>
</template>
<script>
export default {
    name:'Mine',
    data(){
        return {
            show:false
        }
    },
    methods:{
        goBack(){
            this.$router.back();
        },
        goto(path){
            this.$router.push(path)
        },
        logout(){
            this.$store.commit('user/logout')
            this.$router.push('/login')
        }
    },
    // 路由组件守卫
    beforeRouteEnter(to,from,next){

        console.log('Mine.beforeRouteEnter')
        next();

    },
    beforeRouteUpdate(to,from,next){
        console.log('Mine.beforeRouteUpdate')
        next();
    },
    beforeRouteLeave(to,from,next){
        console.log('Mine.beforeRouteLeave')
        next();
    }
}
</script>
<style scoped>
.page-mine{
    text-align:center;
}

/* 过渡动画效果 */
.box{
    background-color: #58bc58;width:100px;height:100px
}
/* 动画初始状态 */
.v-enter{opacity: 0;}
.v-leave{opacity: 1;}

/* 动画过渡状态 */
.v-enter-active{
    transition: opacity 1.5s;
}
.v-leave-active{
    transition: opacity 1s;
}

/* 动画结束状态 */
.v-enter-to{opacity: 1;}
.v-leave-to{opacity: 0;}

/* 
    给transition组件添加name属性,可以修改类型前缀,进而实现不同的动画效果
    * 淡入淡出 
    * 滑入滑出
    * ...

.fade-enter{}
.fade-leave{}
.fade-enter-active,.fade-leave-active{}
.fade-enter-to{}
.fade-leave-to{}

.swiper-enter{}
.swiper-leave{}
.swiper-enter-active,.swiper-leave-active{}
.swiper-enter-to{}
.swiper-leave-to{}
*/
</style>
