const express = require('express')
const router = require('./router')
const app = express();

// 静态资源服务器
app.use(express.static('./public'))

// 接口
app.use('/api',router)

const PORT = 2105;
app.listen(PORT,()=>{
    console.log(`server is running at port ${PORT}`)
})