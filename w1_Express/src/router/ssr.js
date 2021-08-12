const express = require('express')

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
router.get('/goodslist', (req, res) => {
    // 渲染模板：利用模板生成html结构
    // 传递数据
    res.render('goodslist', { goodslist,content:'<strong>测试</strong>内容'})
})