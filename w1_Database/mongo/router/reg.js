const express = require('express')
const mongo = require('../db')
const router = express.Router()
const {formatData} = require('../utils')
module.exports = router;

// 注册用户
router.post('/',async (req,res)=>{
    const {username,password} = req.body

    const result = await mongo.create('user',{username,password})
    res.send(
        formatData({
            code: result ? 200 : 400
        })
    )
})

// 检测用户名是否存在 get /api/reg/check
router.get('/check',async (req,res)=>{
    const {username} = req.query;
    
    const docs = await mongo.find('user',{username});

    res.send(
        formatData({
            code: docs.length>0 ? 400 : 200
        })
    )
})