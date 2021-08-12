const {Router} = require('express');
const multer = require('multer') 
const path = require('path')

const router = Router();

module.exports = router;

// 1.简单上传：设置上传文件路径 
// const upload = multer({ dest: 'uploads/' })

// 2. 控制上传细节（配置上传参数）
let storage = multer.diskStorage({
    // destination: function (req, file, cb) {
    //   cb(null, './uploads/');
    // },

    // 上传文件保存目录，无则自动创建
    destination:path.join(__dirname,'../public/uploads/'),

    // 格式化文件名
    filename: function (req, file, cb) {
        // req: request
        // file: 文件信息
        // cb: callback回调函数，用户修改文件名称
        // 获取文件后缀名
        let ext = path.extname(file.originalname);

        cb(null, file.fieldname + '-' + Date.now() + ext);
    }
})
let upload = multer({storage});

// 商品图片上传
// multer.array(fieldname,maxCount)中间会把文件信息格式化到req.files
router.post('/goods',upload.array('goods',5),(req,res)=>{
    console.log('body',req.body)
    console.log('files',req.files)
    res.send('商品图片上传')
})

// 头像上传
// multer.single()中间件会把文件信息格式化到req.file
router.post('/avatar',upload.single('avatar'),(req,res)=>{
    console.log('avatar.body',req.body)
    console.log('avatar.file',req.file)
    res.send('头像上传')

})