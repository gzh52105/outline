'use strict';

// 在云函数中不能直接调用wx接口，需要通过wx-server-sdk工具包来实现，require('wx-server-sdk')得到一个与wx.cloud一致的对象
const cloud = require('wx-server-sdk');

// 初始化
cloud.init({
    // env:'class-test-cvn29',
    env: cloud.DYNAMIC_CURRENT_ENV
})

// 获取数据库对象
// wx.cloud.database()
const db = cloud.database();

// 获取集合
const col = db.collection('class');


// 云函数运行在NodeJS环境中，遵循commonJS规范
// 必须导出名为main的函数，这个函数为入口函数
exports.main = async (event, context, callback) => {
    console.log('event',event)
    const {
        // 操作类型：CRUD
        type='get',

        // 数据：update,create
        data={},

        // 查询条件
        query={},

        // 配置参数
        config={}
    } = event;
    

    switch(type){
        // 增
        case 'create':
            return create(data)
        // 增
        case 'remove':
            return remove(query)
        // 改
        case 'update':
            return update(query,data,config)

        // 查
        case 'get':
            return get(query,config);
    }
    
};


async function get(query,config){
    const {size=10} = config;
    const data = await col.where(query).limit(size).get()
    return data
}

async function create(data){
    return await col.add({
        data:data
    })
    
}
async function remove(query){
    return col.where(query).remove()
}
async function update(query,data,config){
    // mongodb: col.updateMany(query,{$set:{name:'11'},$inc:{hot:1}})
    // const _ = db.command
    // 云开发： col.where(query).update({data:{name:'11',hot:_.inc(1)}})
    return await col.where(query).update({data:data})
}