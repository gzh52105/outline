const express = require('express');
const compression = require('compression')

const app = express();

// 启动服务器压缩
app.use(compression());

app.use(express.static('./public'))

app.use('/api',apiRouter)

app.listen(2108,function(){
    console.log('server is runing')
})