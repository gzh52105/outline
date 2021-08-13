const fs = require('fs');

// 读取流
// const readerStream  = fs.createReadStream('./Express_10_了解跨域.wmv')
const readerStream  = fs.createReadStream('./index.html')

let content = ''
readerStream.on('data',(chunk)=>{
    // chunk: 每次读取的内容，类型为Buffer
    console.log('chunk=')
    // content += chunk;
})

// 数据读取完毕
readerStream.on('end',()=>{
    console.log('end',content)
})

// 错误处理
readerStream.on('error', function(err){
    console.log(err.stack);
});