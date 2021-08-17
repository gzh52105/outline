const express = require('express')
const mongo = require('../db')
const router = express.Router()
const {formatData,encrypt} = require('../utils')
// const crypto = require('crypto')
module.exports = router;

// 登录用户
router.post('/',async (req,res)=>{
    let {username,password} = req.body
    console.log('username',username,password)

    // const hash = crypto.createHash('sha256')
    // hash.update(password)
    // password = hash.digest('hex')
    password = encrypt(password);

    const result = await mongo.find('user',{username,password})
    res.send(
        formatData({
            code: result.length>0 ? 200 : 400
        })
    )
})