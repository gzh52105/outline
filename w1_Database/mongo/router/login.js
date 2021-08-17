const express = require('express')
const mongo = require('../db')
const router = express.Router()
const {formatData} = require('../utils')
module.exports = router;

// 登录用户
router.post('/',async (req,res)=>{
    const {username,password} = req.body
    console.log('username',username,password)
    const result = await mongo.find('user',{username,password})
    res.send(
        formatData({
            code: result.length>0 ? 200 : 400
        })
    )
})