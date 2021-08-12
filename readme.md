# gzh52105三阶段课程

## day1-1

* 三阶段学习方式与学习目标
    * 查文档
        * 技术文档
        * 需求文档
    * 问问题
        * 提取关键字
        * 描述问题
    * 自律
* NodeJS
    > 后端语言 + 开发环境（npm）

* javascript(ECMAScript+BOM+DOM)
    > 客户端脚本语言（不需要编译，直接运行），直接在浏览器中运行（客户端语言：需要从服务器下载到客户端后才执行）
    * ES3: 2000推出
    * ES5: 2009推出
    * ES6: 2015推出
    * ES6+: 每年推出一个版本
    ```html
        <script type="text/javascript">

        </script>
    ```
* Chrome浏览：2008推出（V8引擎:js解析器）

* 创建http服务器
    * 依赖内置模块
        * http
    * 请求（request）与响应（response）
    * 响应头 response header
    
* 创建静态资源服务器
    * 依赖内置模块
        * http
        * url
        * fs
        * path
    * __dirname 当前文件所在的目录
    * mime类型
        * text/palin
        * text/html
        * ...

* NodeJS模块
    * 内置模块
    * 自定义模块
    * 第三方模块


## day1-2

### 复习
* http服务器
    * 请求request
        > 客户端发信息给服务器
    * 响应response
        > 服务器发送信息给客户端，前后端数据传递只能是string或二进制类型
* 服务端server与客户端client（浏览器）
* 静态资源服务器
    * 依赖模块
        * http
        * fs
        * path
        * url
    * mime类型：Content-Type
        > 服务器告诉浏览器发送信息的类型

* git
    * 2105三阶段课件仓库地址
        * https://github.com/gzh52105/outline.git
        * git@github.com:gzh52105/outline.git（推荐）
            * 生成公钥：`ssh-keygen`
            * 配置公钥: github -> 账户 -> settings -> SSH and GPG keys
            * 测试配置是否成功:`ssh -T git@github.com`

## 知识点
* 模块化
    * 为什么需要模块化？
        * 复用
        * 维护
        * 分工
    * 规范
        * commonJS      NodeJS
        * ESModule      ES6
        * AMD           require.js
        * CMD           sea.js
    * 分类
        * 内置模块
            > 直接导入：`require('fs')`
        * 自定义模块
            > 必须使用相对路径: `require('./mime.js')`
        * 第三方模块
            > 需要安装，然后引入：`require('express')`
    * 使用
        > 每个模块的作用域是独立作用，相互之间不能直接调用，如需使用其他模块的数据，必须导出与导入
        * 导出
            * commonJS： 
                * `module.exports`
                * `exports`
        * 导入
            * `commonJS: require()`


    ```js
    //   未使用模块化
        let username = 'laoxie'

        // 此处省略1000行代码

        console.log(username)

        // 使用模块
        // moduleA
        let username = 'laoxie'
        // 导出username

        // moduleB
        // 导入模块A中的username
        console.log(username)
    ```
* express / koa
    * 安装：
        ```js
            npm install express
        ```
    * 使用
        ```js
            const express = require('express')
            const app = express()
        ```

    * 中间件:middleware
        > 中间件是一个封装了某些处理数据功能的函数 -> 中间件是一个函数
        * 使用: `app.use([path],...middleware)`
            ```js
                // app.use(middleware1,middleware2,....)
                // app.use(middleware1)
                // app.use(middleware2)
            ```
        * 分类
            * 内置中间件
                * express.static()  静态资源服务器
                * express.urlencoded()  处理请求体数据中间件
            * 自定义中间件
            * 第三方中间件
        * 请求传参
            * url参数：`?id=123`
                > 接收：request.query
            * 请求体：请求体传参有多种数据格式，要根据实际的情况使用相应的中间件
                > 接收：request.body
            * 请求头
                > 接收：request.get()
            * 动态路由
                > 接收方式：request.params
        * 编写数据接口
            > 编写符合**RESTful**规范的接口: 
            > 1. 根据不同的请求类型实现相应的接口功能 
            > 2. 根据不同的请求路径实现不同的接口功能
            * 请求类型
                * get       查
                * post      增
                * put       改（表示该接口拥有修改所有属性的能力）
                * patch     改（表示该接口拥有修改部分属性的能力）
                * delete    删
            * 测试请求工具：postman
* 练习
    * 编写一个符合RESTful规范的数据接口，实现CRUD
        * 商品
        * 用户
    * 把二阶段项目使用nodeJS实现接口

## day1-3

### 面试题
* 链式调用的原理
    > 每个函数最后返回一个实例
* event中target和currentTarget区别
    * target 指向触发事件的元素
    * currentTarget 指向绑定事件的元素

    ```js
        <header id="header">
            <div>
                <button id="btn">点我</button>
            </div>
        </header>

        btn.onclick = function(e){
            // e.target: button#btn
            // e.currentTarget:button#btn
        }
        header.onclick = function(e){
            // e.target: button#btn
            // e.currentTarget: header#header
        }
    ```

### 复习
* 模块化
    > 在nodejs中，把一个文件当作一个模块，每个模块是独立作用域
    * 规范
        * commonJS      nodejs
        * ESModule      ES6
        * AMD           require.js
        * CMD           sea.js
    * 分类
        * 内置模块
        * 自定义模块
        * 第三方模块
    * 使用
        * 导出（暴露）
            * module.exports
            * exports
        * 导入（引入）
            * require()
* express
    * 中间件
        * 分类
            * 内置中间
                * express.static(root)
                * express.urlencoded()      body-parser
                * express.json()            body-parser
                * express.raw()             body-parser
                * express.text()            body-parser
        * 使用：
            ```js
                app.use([path],...middleware)

                app.use([path],middleware)
                app.use([path],middleware)
                //...
            ```
    * 编写接口
        > RESTful：根据不同的请求类型和不同的请求路径显示不同的接口

        * 请求类型
            * get
            * post
            * put
            * patch
            * delete
        * 传递参数
            * url传参：request.query
            * 动态路由: request.params
            * 请求体传参: rquest.body
                > 需要中间件处理不同类型的数据
            * 请求头: request.get(name)

### 知识点
* 编写数据接口
    * 商品
        * 商品列表      get     /goodslist
        * 商品详情      get     /goods/:id
        * 添加商品      post    /goods
        * 删除商品      delete  /goods/:id
        * 修改商品      put     /goods/:id
        * 上下架商品    patch   /goods/:id
    * 用户

* 利用`express.Router()`中间件实现模块化路由
    > 让代码实现可维护性

* 页面渲染方式
    * 客户端渲染BSR（Browser Side Rendering）
        > html结构在客户端生成
        * 渲染步骤
            1. 发起页面请求，加载一个空的html结构
            2. 利用ajax请求获取接口数据
            3. 在客户端生成html结构
            4. 并渲染到页面
        * 优点
            * 用户体验好
            * 局部刷新
        * 缺点
            * 多次请求，速度较慢
            * 不利于SEO（搜索引擎优化）
    * 服务器渲染SSR（Server Side Rendering）
        > html结构在服务器生成
        * 渲染步骤
            1. 发起页面请求，在服务端生成html结构并返回
            2. 渲染到页面
        * 优点
            * 请求少，速度快
            * SEO友好
        * 缺点
            * 无交互，用户体验较差
            * 不能实现局部刷新

* 练习
    * 利用ssr实现注册登录页面

## day1-4

### 复习
* 模块化路由
    > 使用`express.Router()`连接所有的模块，形成一个路由树
* 页面渲染模式
    * 客户端渲染BSR
        > html结构在客户端生成
    * 服务端渲染SSR
        > html结构在服务端生成
        * ejs模板语法
            * 使用步骤
                1. 安装
                    ```bash
                        npm install ejs
                    ```
                2. 设置模板引擎
                    ```js
                        app.set('views', path.join(__dirname,'./views'));
                        app.set('view engine', 'ejs');
                    ```
                3. 编译html并绑定数据
                    ```js
                        res.render('goodslist',{goodslist})
                        // 等效于 res.send(ejs.renderFile(filename, data))
                    ```
            * 语法
                ```html
                    <% %>       不输出内容，主要用于流程控制
                    <%= %>      输出内容，如果是html则转义
                    <%- %>      输出不转义内容
                ```

### 知识点
* 图片上传
    * multer中间
    * FormData
         > 可以传递非字符类数据（注意请求头Content-Type的类型：`multipart/form-data`）
        * 使用：`new FormData()`
            * set(key,value)    设置单个值
            * get(key)          获取key对应的值
            * append(key,value) 追加值
            * getAll(key)       获取所有值
* 跨域解决方案
    * 搞懂以下问题
        * 什么情况下会产生跨域
            > 协议，域名(主机)，端口三者有一个不一致，就形成跨域
            ```js
                http://localhost:2105/views/goodslist?page=1&size=10

                http://baidu.com
            ```
        * 为什么会存在跨域限制
            > 因为安全因素：同源策略
            * 限制
                * ajax
                * cookie
                * webStorage
        ```js
            接口地址：http://localhost:2105/api/goods/list

            页面地址：
                * http://localhost:2105/goodslist.html
                * file:///F:/mydoc/kphone/class/gz_h5_2105/w1_Express/src/public/goodslist.html（跨域）
                * http://localhost:8080/goodslist.html（跨域）
            
        ```

        * 解决方案
            * JSONP
                > 原理：利用script标签不受跨域限制的特点来请求数据
                * 前端
                    * 定义全局函数
                    * 传递全局函数名
                * 后端
                    * 接口响应**全局函数执行**的js代码,并传递数据
                * 缺点
                    * 只能时get
                    * 并不是真正的ajax
            * CORS
                > 跨域资源共享（Cross Origin Resource Sharing），需要服务器与浏览器的支持
                * 服务器支持
                    * Access-Control-Allow-Origin
                        * 允许单个域名跨域访问
                        * 允许所有来源访问：`*`
            * 服务器代理