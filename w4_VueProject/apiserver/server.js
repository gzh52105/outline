const express = require('express')
const fs = require('fs')
const app = express();

// 静态资源服务器
app.use(express.static('./public'))
app.use('/api',router)

// 支持history路由
app.use('/manage',function(req,res){
    fs.readFile('./public/manage/index.html',(err,content)=>{
        res.header('content-type','text/html;charset=utf-8')
        res.send(content)
    })
})
app.use(function(req,res){
    fs.readFile('./public/index.html',(err,content)=>{
        res.header('content-type','text/html;charset=utf-8')
        res.send(content)
    })
})

app.listen(2105,()=>{
    console.log('server is running ')
})