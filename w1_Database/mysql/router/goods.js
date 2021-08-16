const express = require('express')
const mysql = require('../db')
const {formatData} = require('../utils')
const router = express.Router()
module.exports = router;

router.get('/list',async (req,res)=>{
    let {page=1,size=10,ids} = req.query;console.log('ids',ids)
    // 计算索引值
    const idx = (page-1)*size
    size = Number(size)
    
    // 重点：拼接sql语句
    let sql = `select * from goods`
    if(ids){
        sql += ` where id in (${ids})`
    }

    sql += ` limit ${idx},${size}`

    console.log('sql=',sql);
    // select * from goods where id in (1,3,8,9) 
    const data = await mysql.query(sql);
    res.send(formatData({data})) 
})