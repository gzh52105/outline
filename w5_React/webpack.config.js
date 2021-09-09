const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode:process.env.NODE_ENV==='production' ? 'production' : 'development',
    entry:'./src/index.js',
    output:{
        path:path.join(__dirname, 'dist')
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                // loader:'babel-loader', // 简写
                use:{
                    loader:'babel-loader',
                    options:{
                        // plugins:[],// 插件
                        presets:['@babel/preset-react'],// 插件集合
                    }
                },
                include:path.join(__dirname, 'src'),
                // exclude:'./node_modules',
            },

            // css加载器：css-loader + style-loader
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },

            // sass加载器：sass-loader + sass
            {
                test:/\.s[ac]ss$/,
                use:['style-loader','css-loader','sass-loader']
            },

            // 文件加载器：url-loader + file-loader
            {
                test:/\.(png|jpe?g|gif|webp)/i,
                use:{
                    loader:'url-loader',
                    options: {
                        // 设置一个文件大小临界值：
                        // * 小于等于这个值的图片会自动转成base64编码
                        // * 大于这个值，采用url形式
                        limit: 10000,

                        // 格式化图片名称：该目录相对于output输出目录
                        name: 'img/[name]-[hash:5].[ext]'
                    }
                },
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./public/index.html',
            // filename:'login.html',
            // hash:true,
        })
    ],
    devServer:{
        static: {
            directory: path.join(__dirname, 'public'),
        },
    }
}