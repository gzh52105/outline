<template>
    <div>
        <el-table
            :data="datalist"
            style="width: 100%"
            @selection-change="select"
        >
            <el-table-column
            type="selection"
            width="55">
            </el-table-column>
            <el-table-column
                prop="username"
                label="用户名"
                >
            </el-table-column>
            <el-table-column
                prop="regtime"
                label="注册时间"
                width="280"
                >
            </el-table-column>
            <el-table-column
                width="180"
                label="操作">
                <template v-slot="{ row, column, $index }">
                    <!-- row: 当前行对应的数据 -->
                    <el-button icon="el-icon-edit-outline" type="primary" size="mini" plain @click="editItem(row._id)">编辑</el-button>
                    <el-button icon="el-icon-delete" type="danger" size="mini" plain>删除</el-button>
                </template>
            </el-table-column>
        </el-table>
         <el-pagination
            @current-change="changePage"
            @size-change="changeSize"
            :page-size="pageSize"
            layout="total, prev, pager, next, sizes"
            :total="total">
        </el-pagination>
    </div>
</template>
<script>
export default {
    name:'UserList',
    data(){
        return {
            datalist:[],
            total:0,
            pageSize:30,
            currentPage:1
        }  
    },
    created(){
        console.log('UserList.created')
        this.getData();
    },
    destroyed(){
        console.log('UserList.destroyed')
    },

    // 以下两个生命周期函数在使用keep-alive缓存组件时被调用
    activated(){
        console.log('UserList.activated')
    },
    deactivated(){
        console.log('UserList.deactivated')
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
        changePage(currentPage){
            console.log('currentPage',currentPage)
            this.currentPage = currentPage;
            this.getData();
        },
        changeSize(size){
            this.pageSize = size;
            this.getData();
        },
        select(selection){
            console.log('selection',selection)
        },
        editItem(id){
            console.log('id',id)
            // this.$router.push('/manage/user/'+id)
            this.$router.push({
                name:'UserEdit',
                params:{
                    id
                }
            })
        }
    }
}
</script>
