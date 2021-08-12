const express = require('express')
const goodsRouter = require('./goods')
const userRouter = require('./user')
const uploadRouter = require('./upload')


const router = express.Router()

module.exports = router

// 添加请求体格式化中间件，让后面所有接口都实现参数格式化
router.use(
    express.urlencoded({ extended: true }),
    express.json(),
    express.text(),
)

// 利用中间件实现复杂跨域处理
const whiteList = ['http://localhost:8080', 'http://localhost:3000']
router.use(function(req, res, next) {
    const origin = req.get('Origin');console.log('origin=',origin);
    const current = whiteList.find(item => item === origin);
    if (current) {
        res.header('Access-Control-Allow-Origin', origin)
        res.header("Access-Control-Allow-Methods","PUT,POST,GET,PATCH,DELETE,OPTIONS");
        res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With, Token");
    }

    // 跨域请求CORS中的预请求
    if(req.method=="OPTIONS") {
        res.sendStatus(200);/*让options请求快速返回*/
    } else{
        next();
    }
});

// /api/good
router.use('/goods', goodsRouter)

// /api/user
router.use('/user', userRouter)

// /api/order

// 上传
router.use('/upload', uploadRouter)

// 跨域解决方案
const data = {
    username: 'laoxie',
    password: 123,
    role: 'admin'
}
// 1. jsonp
router.get('/jsonp', (req, res) => {
    const { cb } = req.query;


    // 响应js代码
    res.send(`${cb}(${JSON.stringify(data)})`)
})

// 2. CORS

router.put('/cors', (req, res) => {
    // 运行http://localhost:8080跨域访问该接口(只能写一个地址)
    // res.header('Access-Control-Allow-Origin','http://localhost:8080')

    // 运行所有来源跨域访问该接口
    // res.header('Access-Control-Allow-Origin','*')

    // 允许多个域名跨域访问
    // 1. 获取访问来源：req.get(name)
    // 2. 判断来源是否在白名单whiteList中
    // 在：允许跨域
    // 否：不允许跨域
    
    
    res.send(data)
})