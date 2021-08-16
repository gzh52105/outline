const express = require('express')
const mongo = require('../db')
const { formatData } = require('../utils');
const router = express.Router()
module.exports = router;


// 用户列表
router.get('/list',async (req,res)=>{
    
   const data = await mongo.find('user',{},{projection:{password:0}})

   res.send(formatData({
       data
   }))
})

// 获取单个用户信息
router.get('/:id',async (req,res)=>{
    const {id} = req.params
    console.log('id=',id)
    const docs = await mongo.find('user',{_id:id})
    console.log('docs',docs);
    res.send(formatData({data:docs}))
})
router.delete('/:id',async (req,res)=>{
    const {id} = req.params;
   
})

const ignoreFileds = ['username','id','regtime'];
router.put('/:id',async (req,res)=>{
    const {id} = req.params;

    
    res.send(formatData())
})

