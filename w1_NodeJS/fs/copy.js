const fs = require('fs');
/**
 * 管道流
 * 复制文件：
 * 1.读取一个文件
 * 2.通过pipe传输
 * 3.写入一个文件
 */

// 创建一个可读流
var readerStream = fs.createReadStream('./goods1.jpg');
        
// 创建一个可写流 
var writerStream = fs.createWriteStream('./非洲美女.jpg');
  
// 管道读写操作
readerStream.pipe(writerStream);