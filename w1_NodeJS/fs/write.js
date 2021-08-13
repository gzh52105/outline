const fs = require('fs');

// 写入流
const writerStream  = fs.createWriteStream('./login.txt')

// 使用 utf8 编码写入数据
for(let i=0;i<520;i++){
    writerStream.write('hello 520 \n','UTF8');
}

// 标记文件末尾
writerStream.end();

// 处理流事件 --> data, end, and error
writerStream.on('finish', function() {
    console.log("写入完成。");
});

writerStream.on('error', function(err){
    console.log(err.stack);
});