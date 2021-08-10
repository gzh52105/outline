// 导入一个文件
// const {username} = require('./module/hello')
// console.log('tt',username)

// 导入一个目录
// 1. 目录有如果包含package.json，则引入文件中main属性对应的文件
const hello = require('./modulea')
console.log('hello',hello)

const lx = require('./moduleb')
// 2.目录有如果包含index.js，则直接引入index.js
console.log('lx',lx)