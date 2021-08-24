<template>
    <div id="msg">
        <h1>生命周期</h1>
        <p>msg:{{msg}}</p>
        <p>qty:{{qty}}</p>
        <input v-model="msg" />
        <button @click="changeQty">修改qty</button>
        <button @click="xiaohui">销毁</button>
    </div>
</template>
<script>
export default {
    // el,
    // template,
    // render,
    data(){
        return {
            msg:'hello',
            qty:10,
            timer:null
        }
    },
    methods:{
        xiaohui(){
            console.log('销毁')
            this.$destroy()
        },
        changeQty(){
            this.qty++;

            // console.log('qty=',this.qty)
        }
    },

    // 生命周期函数（钩子函数）
    // 1. 创建阶段
    beforeCreate(){
        console.log('beforeCreate',this.msg)
    },
    created(){
        console.log('created',this.msg)
        
        // ajax().then(()=>{
            //节点操作
        // })
    },
    
    // 2. 挂载阶段
    beforeMount(){
        console.log('beforeMount',this.$el)

        
    },
    mounted(){
        console.log('mounted',this.$el)

        // for(let i=0;i<10;i++){
        //     this.qty = i;
        // }

        // 设置定时器
        this.timer = setInterval(()=>{
            console.log('timer')
        },500)
    },

    // 3. 销毁阶段
    // 触发销毁条件：v-if,$destroy()
    beforeDestroy(){
        console.log('beforeDestroy')
    },
    destroyed(){
        console.log('destroyed')

        // 清除定时器，取消ajax请求等(一般用于异步操作处理)
        clearInterval(this.timer)
    },

    // 4. 更新阶段
    beforeUpdate(){
        this.qty++
        console.log('beforeUpdate',this.qty)
    },
    updated(){
        console.log('updated',this.qty)
        // 在更新阶段修改数据要避免死循环(进行条件判断)
        // this.qty++
    },

}
</script>
