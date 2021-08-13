const request = require('request')
const cheerio = require('cheerio')
const fs = require('fs');
const path = require('path');

// 爬取目标地址：
const targetUrl = `http://localhost:2105/views/goodslist`

request(targetUrl, (error, response, body) => {
    // body：爬取的内容（html内容）
    // console.log(body)

    // 提取需要的数据
    const $ = cheerio.load(body);
    const goodslist = []
    $('#goodslist .col').each((idx,item)=>{
        // const id = $(item).attr('data-id')
        const $item = $(item)
        const id = $item.data('id')
        const name = $item.find('h4').text()
        const imgurl = $item.find('img').attr('src')
        const price = $item.find('.price').text().replace('价格：','')
        const goods = {
            id,
            name,
            imgurl,
            price
        }

        goodslist.push(goods)

        // 爬取图片
        
        // 获取图片名称
        const fileName = path.basename(imgurl)
        // 写入目录
        const downloadPath = path.join('./download/',fileName)
        console.log('downloadPath',downloadPath)
        // 创建写入流
        const writerStream = fs.createWriteStream(downloadPath)

        // request爬取图片，返回文件流（文件的）
        request('http://localhost:2105' + imgurl).pipe(writerStream)
    })


    console.log('goodslist',goodslist)
});
