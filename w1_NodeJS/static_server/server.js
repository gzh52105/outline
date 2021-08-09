/**
 * 静态资源服务器
 * 服务器要根据不同的资源请求地址（如：html,css,js,图片等）,响应相应的内容
 */

const http = require('http')
const url = require('url')
const fs = require('fs') // file system
const path = require('path')
const mime = require('./mime');

const server = http.createServer((req,res)=>{
    // 获取请求地址
    const {pathname} = url.parse(req.url) // /img/mv1.jpg,/assets/style.css

    // 转换平台地址（真实地址）
    // __dirname: 
    const realpath = path.join(__dirname,pathname);
    console.log('path',pathname,realpath)

    // 获取后缀名
    const extname = path.extname(pathname).substring(1);

    // 根据请求地址读取对应文件
    fs.readFile(realpath,(err,data)=>{
        // err: 错误信息，默认null
        // data: 文件内容，buffer
        if(err){
            console.log('err=',err)
            return res.end('404');
        }
        res.writeHead(200,{'content-type':mime[extname] + ';charset=utf-8'});
        res.end(data);
    })
    console.log('obj',pathname);
    // res.end('end')
})

.listen(2105,()=>{
    console.log('server is running at port 2105')
})