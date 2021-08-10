// 引入第三方模块express
const express = require('express')

// 创建一个服务器
const app = express()

// 开启静态资源服务器
const static = express.static('./')
app.use(static)
console.log('static',static)

// 自定义中间件
// 参数：
// * request    经过express处理过的请求对象
// * response   经过express处理过的响应对象
// * next       一个函数，用于执行下一个中间件
app.use(function(req,res,next){
    console.log('中间件1')

    // 原生响应方式
    // res.write(JSON.stringify({username:'laoxie',password:123}))
    // res.end('hello')

    // express响应方式: res.send() 等效于 处理了数据类型的 res.end()
    res.send({username:'laoxie',password:123})
    next();
})
// app.use(function(req,res,next){
//     console.log('中间件2')
//     // res.send('hi')
// })

// 带路径的中间件
app.use('/list',function(req,res){
    console.log('list')
})


// 监听端口
app.listen(2105,()=>{
    console.log('server is running at port 2105')
})