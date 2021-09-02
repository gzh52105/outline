<template>
    <div>
        编辑用户
    </div>
</template>
<script>
export default {
    name:'UserEdit',
    data(){
        return {
            
        }  
    },
    created(){
        console.log('UserEidit.created')
        this.getData();
    },
    destroyed(){
        console.log('UserEidit.destroyed')
    },
    methods:{
        getData(){
            this.$request.get('/user',{
                page:this.currentPage,
                size:this.pageSize
            }).then(res=>{
                this.datalist = res.data.result,
                this.total = res.data.total
            })
        },
        
    }
}
</script>
