const express = require('express')
const mysql = require('../db')
const router = express.Router()
const {formatData} = require('../utils')
module.exports = router;

// 注册用户
router.post('/',async (req,res)=>{
    const {username,password} = req.body

    // 写入数据库
    let sql = `insert into user(username,password) values('${username}','${password}')`
    
    try{
        await mysql.query(sql)
        // res.send({
        //     code:200,
        //     msg:'success',
        //     data:[]
        // })
        res.send(formatData())
    }catch(err){
        // res.send({
        //     code:400,
        //     msg:'fail',
        //     data:[]
        // })
        res.send(formatData({code:400})); //{code:400,msg:'success,data:[]}
    }

    
})

// 检测用户名是否存在 get /api/reg/check
router.get('/check',async (req,res)=>{
    const {username} = req.query;
    let sql = `select id from user where username='${username}'`
    const data = await mysql.query(sql)
    // 根据用户名查询数据库是否存在
    // 存在：不可注册
    // 否：可以注册
    if(data.length>0){
        req.send(formatData({code:400}))
    }else{
        res.send(formatData())
    }
})