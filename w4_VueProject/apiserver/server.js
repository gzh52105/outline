const express = require('express')

const app = express();

// 静态资源服务器
app.use(express.static('./public'))

app.listen(2105,()=>{
    console.log('server is running ')
})