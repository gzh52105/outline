const express = require('express')
const mongo = require('../db')
const {formatData} = require('../utils')
const router = express.Router()
module.exports = router;

router.get('/list',async (req,res)=>{
    let {page=1,size=10,ids} = req.query;
    // 计算索引值
    const idx = (page-1)*size
    size = Number(size)
    
    const data = await mongo.find('goods',{},{
        limit:size,
        skip:idx
    })
    
    res.send(formatData({data})) 
})