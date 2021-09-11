import React from 'react'
import {Button, Table} from 'antd'
import request from '@/utils/request'
import moment from 'moment'

class List extends React.PureComponent{
    constructor(){
        super()
        this.state = {
            datalist:[],
            total:0,
            pageSize:10,
            page:1
        }
        
    }
    getData = ()=>{
        const {page,pageSize}  = this.state;
        request.get('/class',{
            page,
            size:pageSize
        }).then(({data})=>{
            console.log('data=',data)
            this.setState({
                datalist:data.result,
                total:data.total
            })
        })
    }
    componentDidMount(){
        this.getData();
    }
    
    render(){
        const {datalist,total} = this.state;
          const columns = [
            {
              title: '班级名称',
              dataIndex: 'name',
              // 控制数据显示格式
              render: (text,row,index) => {
                //   console.log('text',text,row,index)
                  return (
                      <div>{row.city}-{row.category}-{row.name}</div>
                  )
              },
            },
            {
              title: '添加时间',
              dataIndex: 'add_time',
              render(text){
                  return moment(text).format('YYYY/MM/DD')
              }
            },
            {
              title: '操作',
              width:100,
              render:()=>{
                  return (
                      <>
                        <Button type="primary" size="small" ghost>编辑</Button>
                        <Button type="primary" size="small" ghost danger>删除</Button>
                      </>
                  )
              }
            },
          ];
         const pagination = {
             size:'small',
             total,
             pageSize:10,
             showTotal(total){
                 return `共 ${total} 条记录`
             },
             onChange:(page,pageSize)=>{
                 console.log('page',page,pageSize)
                this.setState({
                    page,
                    pageSize
                },()=>{
                    this.getData();
                })
             }
         }
        return(
            <div>
                List
                <Table
                    rowKey="_id"
                    rowSelection={{
                        type: 'checkbox',
                    }}
                    columns={columns}
                    dataSource={datalist}
                    pagination={pagination}
                />
            </div>
        )
    }
}

export default List;