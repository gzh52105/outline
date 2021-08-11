const express = require('express')

// 创建一个路由中间件（是一个功能类似与app的中间）
const router = express.Router()

module.exports = router;

// mock数据
const goodslist = []
const arrPrice = '19,29,59,99,199,299,5999,8999'.split(',')
for (let i = 0; i < 10; i++) {
    const goods = {
        id: Math.ceil(Math.random() * 100000),
        name: `goods${i + 1}`,
        price: arrPrice[parseInt(Math.random() * arrPrice.length)],
        imgurl: `img/goods${i + 1}.jpg`
    }
    goodslist.push(goods);
}

// 数据接口
// 1.商品列表 get /api/goods/list
router.get('/list', (req, res) => {
    res.send(goodslist)
})

// 2.商品详情 get /api/goods/123
router.get('/:id', (req, res) => {
    // 获取前端传入的id
    // console.log('query', req.query)
    // const { id } = req.query;
    const {id} = req.params

    // 根据id获取对应商品并响应给前端
    // const currentGoods = goodslist.filter(item=>item.id==id)[0];
    // find()/findIndex()
    const currentGoods = goodslist.find(item=>item.id==id)
    if(currentGoods){
        res.send(currentGoods)

    }else{
        res.send(`商品${id}不存在`)
    }
})


// 3.添加商品
router.post('/',(req,res)=>{
    console.log('body',req.body)
    console.log('header',req.get('User-Agent'))
    res.send('添加商品成功')
})


// 4.删除商品
router.delete('/:id',(req,res)=>{
    const {id} = req.params;
    // const sql = `delete from goods where id=${id}`
    res.send(`删除商品${id}成功`)
})

// 5. 修改商品
router.put('/:id',(req,res)=>{
    // 动态路由接收方式：req.params
    console.log('params',req.params)
    const {id} = req.params;

    // req.body 包含修改数据

    res.send(`修改商品${id}成功`)
})

// 6. 上下架
router.patch('/:id',(req,res)=>{
    const {id} = req.params

    // const sql = `update goods set online=xxx where id=${id}`

    res.send('上下架成功')
})
