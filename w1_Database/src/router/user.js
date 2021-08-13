const express = require('express')
const mysql = require('../db');
const { formatData } = require('../utils');
const router = express.Router()
module.exports = router;

/**
 * 用户接口
 * 增
 * 删
 * 改
 * 查
 */


// 用户列表
router.get('/list',async (req,res)=>{
    let sql = `select * from user`
    // mysql.query(sql,function(data){
    //     console.log('data=',data)
    // });
    const data = await mysql.query(sql);
    res.send(formatData({data})) 
})

// 获取单个用户信息
router.get('/:id',async (req,res)=>{
    const {id} = req.params;
    let sql = `select * from user where id=${id}`
    const data = await mysql.query(sql);
    res.send(formatData({data}))
})
router.delete('/:id',async (req,res)=>{
    const {id} = req.params;
    let sql = `delete from user where id=${id}`
    try{
        await mysql.query(sql);
        // res.send({
        //     code:200,
        //     msg:'delete successfuly'
        // })
        res.send(formatData({msg:'delete successfuly'}))
        
    }catch(err){
        res.send(formatData({code:400}))
    }
})

const ignoreFileds = ['username','id','regtime'];
router.put('/:id',async (req,res)=>{
    const {id} = req.params;

    // 重点：拼接sql语句
    let sql = `update user set `

    // 拼接修改字段
    const setData = []; // [password=123,gender=男,age=18]
    for(let key in req.body){
        if(ignoreFileds.find(item=>item===key)) continue;
        setData.push(`${key}='${req.body[key]}'`)
    }
    sql += setData.join(',')

    // 拼接条件
    sql += ` where id=${id}`
    console.log('sql',sql);
    const data = await mysql.query(sql);
    res.send(formatData())
})

