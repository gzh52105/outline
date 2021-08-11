const express = require('express')
const router = express.Router()

module.exports = router

// get /api/user
router.get('/',(req,res)=>{
    res.send('用户列表')
})

// get /api/user/123
router.get('/:id',(req,res)=>{
    const {id} = req.params;
    res.send(`单个用户${id}信息`)
})