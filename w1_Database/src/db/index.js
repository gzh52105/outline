const mysql = require('mysql')
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    // port: 3306,
    database: 'jiaoxue',
    multipleStatements: true
})

// 使用回调函数
// function query(sql,callback) {
//     let result;
//     pool.query(sql, (err, rows) => {
//         result = rows;
//         callback(rows)
//     })
//     return result;
// }

// 使用Promise的方式
function query(sql) {
    return new Promise((resolve,reject)=>{
        pool.query(sql, (err, rows) => {
            if(err){
                reject(err);
            }
            resolve(rows)
        })
    })
}

module.exports = {
    query
};