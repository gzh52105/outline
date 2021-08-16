const { MongoClient,ObjectId } = require('mongodb');

const DB_URL = "mongodb://127.0.0.1:27017"
const DB_NAME = 'laoxie'
function connect(){
    return new Promise((resolve,reject)=>{
        // 1. 连接数据库
        MongoClient.connect(DB_URL, async function (err, client) {
            if (err) throw err;
        
            // 2.获取数据库对象
            let db = client.db(DB_NAME);
        
            resolve({db,client})
            // // 3.获取集合对象
            // // db.user.find()
            // const col = db.collection('user')
        
            // // 4. 获取查询对象
            // // find()返回一个查询对象，通过toArray()获取查询到的数据
            // const result = col.find({})
            // const docs = await result.toArray()
            // console.log('result',docs);

            // 关闭数据库连接，释放资源
            // client.close()
        });

    })
}

// 封装CRUD方法

// 添加数据
async function create(colName,data){
    const {db,client} = await connect()
    const col = db.collection(colName);

    let result;
    try{
        if(Array.isArray(data)){
            await col.insertMany(data)
        }else{
            await col.insertOne(data)
        }
        result = true
    }catch(err){
        result = false
    }

    client.close()

    return result;
}

// 删除数据
async function remove(colName,query){
    const {db,client} = await connect()
    const col = db.collection(colName);

    if(typeof query._id === 'string'){
        query._id = ObjectId(query._id)
    }

    let result = true;
    try{
        await col.deleteMany(query)
        result = true;
    }catch(err){
        result = false;
    }

    client.close()
    return result;
}

/**
 * 修改数据
 * @param {String} colName      集合名称
 * @param {Object} query        查询条件
 * @param {Object} data         修改的数据（必须包含操作符）{$set:{},$inc:{}}
 */
async function update(colName,query={},data){
    const {db,client} = await connect()
    const col = db.collection(colName);

    if(typeof query._id === 'string'){
        query._id = ObjectId(query._id)
    }

    let result = true;
    try{
        await col.updateMany(query,data)
    }catch(err){
        result = false;
    }

    client.close()
    return result;
}

async function find(colName,query={},{projection,limit,skip}={}){
    // 连接数据库
    const {db,client} = await connect()

    // 获取集合对象
    const col = db.collection(colName)

    // 处理id
    // cant not read property _id of undefined
    if(typeof query._id === 'string'){
        query._id = ObjectId(query._id)
    }

    let result = col.find(query,{
        // 过滤字段
        projection
    })

    // 分页
    if(skip){
        result = result.skip(skip)
    }

    if(limit){
        result = result.limit(limit)
    }


    const docs = await result.toArray()

    // 关闭数据库，释放资源
    client.close();

    return docs;
}

module.exports = {
    create,
    remove,
    update,
    find
}