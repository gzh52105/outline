const express = require('express')
const userRouter = require('./user')
const goodsRouter = require('./goods')
const categoryRouter = require('./category')
const regRouter = require('./reg')

const router = express.Router()
module.exports = router;

// 设置数据格式化中间
router.use(
    express.urlencoded({extended:false}),
    express.json(),
)

router.use('/user',userRouter)
router.use('/goods',goodsRouter)
router.use('/category',categoryRouter)
router.use('/reg',regRouter)