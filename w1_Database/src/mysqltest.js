const mysql = require('mysql')

// // 连接数据库
// // 方式一：使用连接对象方式

// //创建连接对象，并配置参数
// const connection = mysql.createConnection({
//     host     : 'localhost',
//     user     : 'root',
//     password : '',
//     database : 'jiaoxue'
// });

// // 连接数据库
// connection.connect();

// // 操作数据库：sql语句实现CRUD
// const sql = `select * from user`
// connection.query(sql, function (error, results, fields) {
//     if (error) throw error;
//     console.log('query: ', results);

//     // 关闭连接，释放资源
//     connection.end();
// });

// 方式二：使用连接池的方式（推荐）
// 默认一个连接池中自动创建10个连接对象，用完会自动回收，不需要手动关闭
var pool  = mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    password : '',
    // port: 3306,
    database: 'jiaoxue',
    multipleStatements: true
});

// 操作数据库
const sql = `select * from user`
pool.query(sql, function(error, rows){
    console.log(rows);
});