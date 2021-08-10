/**
 * 数据接口
 */

const express = require('express')
const app = express();

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
// app.use('/goodslist', (req, res) => {
app.get('/goodslist', (req, res) => {
    res.send(goodslist)
})

// 查询单个商品
app.get('/goods', (req, res) => {
    // 获取前端传入的id
    console.log('query', req.query)
    const { id } = req.query;
    // 根据id获取对应商品并响应给前端
    // const currentGoods = goodslist.filter(item=>item.id==id)[0];
    // find()/findIndex()
    const currentGoods = goodslist.find(item=>item.id==id)
    res.send(currentGoods)
})

// 添加请求体格式化中间件，让后面所有接口都实现参数格式化
app.use(express.urlencoded({extended:true}),express.json())

// 添加商品
// app.post('/goods',express.urlencoded({extended:true}),express.json(),(req,res)=>{
app.post('/goods',(req,res)=>{
    console.log('body',req.body)
    console.log('header',req.get('User-Agent'))
    res.send('add')
})

// 修改商品
// 动态路由
app.put('/goods/:id/:p?',(req,res)=>{
    // 动态路由接收方式：req.params
    console.log('params',req.params)
    res.send('put')
})
app.delete('/goods',(req,res)=>{
    res.send(req.body)
})

app.listen(2105, () => {
    console.log('server is running at port 2105')
})