/**
 * 服务端代码
 */

// 引入模块：require()
const http = require('http');

// 创建http服务器
const server = http.createServer((request,response)=>{
    // request: 请求对象，包含客户端传给服务端的信息
    // response: 响应对象，利用该对象传递信息到客户端

    // 任何请求都会进入这里
    // console.log('http server created')

    // 指定响应内容与编码
    response.writeHead(200,{
        // 'Content-Type':'text/plian;charset=utf-8'
        'Content-Type':'text/html;charset=utf-8',
    })

    // 响应内容给客户端
    response.write('<strong>hello</strong> 浏览器')
    response.write('<p>my name is laoxie</p>')
    // 结束响应
    response.end()
})

// 绑定端口(2^16=65536)
server.listen(2105,()=>{
    console.log('服务器启动成功...')
})