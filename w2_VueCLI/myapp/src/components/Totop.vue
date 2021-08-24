<template>
    <div :class="[position]" @click="gotoTop">
        <slot>top</slot>
    </div>
</template>
<script>
export default {
    props:{
        position:{
            type:String,
            default:'rb', // rb,lb,lt,rt
        }
    },
    data(){
        return {}
    },
    methods:{
        gotoTop(){
            const timer = setInterval(()=>{
                // 获取滚动条距离
                let offsetTop = window.scrollY;
                
                // 计算速度
                let speed = Math.ceil(offsetTop/10)

                // // 计算滚动距离
                // let top = offsetTop - speed;
                
                // console.log('top=',offsetTop,speed,top)
                if(offsetTop <=10){
                    // top = 0
                    speed = 0;
                    clearInterval(timer)
                }

                // window.scrollTo(0,top)
                window.scrollBy(0,-speed)

            },30)

            // 引入bootstrap后直接使用以下代码（因为bootstrap已经实现了css动画）
            // window.scrollTo(0,0)
        }
    }
}
</script>
<style scoped lang="scss">
    $mainColor:#58bc58;
    div{
        position:fixed;
        border:2px solid #ddd;
        padding:0.5em 1em;
        background-color:rgba(255,255,255,0.8);
        font-size:16px;
        text-align: center;
    }
    div.rb{
        right:20px;
        bottom:20px;
    }
    div.lb{
        // @extend .rb;
        left:20px;
        bottom:20px;
    }
</style>

