const express = require('express')
const mongo = require('../db')
const router = express.Router()
const { formatData, encrypt } = require('../utils')
// const crypto = require('crypto')
module.exports = router;

// 注册用户
router.post('/', async (req, res) => {
    let { username, password } = req.body

    // 对密码进行加密
    // 加密算法：md5,sha256,sha512
    // const hash = crypto.createHash('sha256'); // createHmac('sha256', 'laoxie');
    // hash.update(password)
    // password = hash.digest('hex')

    password = encrypt(password);

    const result = await mongo.create('user', { username, password })
    res.send(
        formatData({
            code: result ? 200 : 400
        })
    )
})

// 检测用户名是否存在 get /api/reg/check
router.get('/check', async (req, res) => {
    const { username } = req.query;

    const docs = await mongo.find('user', { username });

    res.send(
        formatData({
            code: docs.length > 0 ? 400 : 200
        })
    )
})