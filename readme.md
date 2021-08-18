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

## day1-5

### 面试题
1. 实现深拷贝的方式有哪些
    ```js
        obj = {a:10,b:20,c:{d:10,e:20}}
        // obj2 = obj

        // 浅拷贝
        let obj2 = {}
        for(let k in obj){
            obj2[k] = obj[k]
        }
        // Object.assign({},obj1,obj2,obj3....)
        Object.assign({},obj)
        jQuery.clone({},obj)

        // 深拷贝
        // 1. 递归遍历
        function copy(obj){
            let result = {}
            for(let k in obj){
                if(typeof obj[k] === 'object'){
                    result[k] = copy(obj[k])
                }
                result[k] = obj[k]
            }
            return result;
        }
        const obj2 = copy(obj)
        // 2.JSON
        const obj3 = JSON.parse(JSON.stringify(obj))
        // 3.jQuery
        jQuery.clone(true,{},obj)
    ```
2. 如何取消ajax请求
    * 设置超时时间timeout
    * 调用abort()方法
    ```js
        let xhr = new XMLHttpRequest()
        xhr.open()
        xhr.send()

        // 取消ajax
        xhr.abort();
    ```

### 复习
* 图片上传
    * FormData
    * multer
* 跨域解决方案
    * jsonp
        > 原理
    * CORS
        * 类型
            * 简单跨域
            * 复杂跨域
                > 浏览器不明确是否允许这种请求，所以会自动发起一个预检请求（OPTIONS），服务必须响应该请求
                * 非GET、HEAD、POST请求
                * POST请求的`Content-Type`不是`application/x-www-form-urlencoded`, `multipart/form-data`, 或`text/plain`。
                * 添加了自定义header，例如Token。
        * 前后端支持
            * 前端：浏览器需要支持CORS
            * 后端：
                * Access-Control-Allow-Origin
                    * 单域名
                    * `*`
                    * 多域名：不支持多域名，但可以通过条件判断实现
                        > 设置白名单，通过`req.get('Origin')`获取请求源并判断是否存在白名单中
                * Access-Control-Allow-Mehods
                * Access-Control-Allow-Headers
### 知识点
* 服务器代理
    > 原理：利用服务器没有跨域限制的特点，从服务器发起请求并响应给前端
    * http-proxy-middleware
* 爬虫
    > 目标服务器没有接口，但我想获取它的数据
    * 需要具备的技能
        * 分析html结构
    * 爬虫与防爬

* Stream流
    > 文件流：文件的液体状态，一般用于对大文件的处理操作
    * 读取流：读取大文件时分多次读取
        > fs.createReadStream(filePath)
    * 写入流：写入大文件时分多次写入
    * 传输: 管道流pipe

* 数据库
    * 关系型数据库
        * mySQL/MariaDB
            > sql语句
    * 驱动
        * 在PHP中使用mySQL: mysqli
        * 在NodeJS中使用mySQL: mysql
            * 连接对象
            * 连接池
    * 使用
        * 拼接sql语句
        * 统一前后端数据格式
            > 任何接口都返回json格式数据
            ```js
                {
                    code, // 200成功，400失败
                    msg,  // success成功，fail失败
                    data //  必须为数组
                }
            ```
* 周末练习
    1. 用NodeJS实现二阶段项目接口（后期上线）
    2. 选一个网站，并爬取数据到本地，并存入数据库

## day2-1

### 复习
* 爬虫
* Stream
    > 解决大文件的读取、写入、传输
* mySQL
    > 在NodeJS中使用MySQL
    * 数据库mysql
    * 驱动mysql
* 前后端数据格式统一

### 知识点
* MongoDB
    * 分类
        * 关系型数据库
            * mySQL
            * SQLServer
            ....
        * 非关系型数据库
            > 类似json
    * 对比
        ```
                        数据库      表/集合          数据
            mySQL       database    table           row
            MongoDB     database    collection      document
        ```
* 操作Mongodb
    * 命令行工具
        * 数据库操作
        * 集合操作
        * 文档操作：CRUD
            * 增
                > 插入一个文档对象
                * insertOne(document)
                * insertMany([document,document])
            * 删
                * deleteOne(query)
                * deleteMany(query)
            * 改
                * updateOne(query,data)
                * updateMany(query,data)
            * 查
                * find(query)
                * findOne(query)
    * 可视化工具
        * robo3T

* 在NodeJS中使用MongoDB
    * 驱动
        * mongodb
        * mongoose
    * 封装CRUD
    * 过滤字段
        > projection


## day2-2

### 面试题
* 防抖与节流
    > 都是为了性能优化，只是采用的手段不一样
    * 防抖
        > 当同一时间段内有多次重复操作，只生效最后一次，忽略前面所有操作
        * 搜索建议
    * 节流
        > 当同一时间段内有多次重复操作，只生效第一次，忽略第一次后的操作
        * 滚动加载

### 复习
* mongodb
    * 命令行
    * 可视化工具：robo3T
    * nodeJS中操作
        > 需要安装驱动：mongodb
        * 封装CRUD

    * 数据的CRUD
        * 增
            * insertOne(data)
            * insertMany([])
        * 删
            * deleteOne(query)
            * deleteMany(query)
        * 改
            * updateOne(query,data)
            * updateMany(query,data)
            * save(doc)
        * 查
            * find(query)
            * findOne(query)
        * 聚合
            * aggregate()
### 知识点
* 加密
    * 单向加密：
        * 无法解密
        * 可以暴力破解
            * 加盐
            * 多次加密
    * 双向加密
        * 对称加密
            > 加密解密共用一把钥匙
        * 非对称加密
            * 公钥
            * 私钥

            * https
                > ssl

* 项目上线
    1. 购买服务器
        > 地区、硬件、网络
    2. 配置安全组
        > 开放端口
    3. 安装环境
        * nodeJS
        * MongoDB
        * mysql
    4. 上传代码到服务器
    5. 启动服务器

* 数据库
    * 导入导出
        * mongoimport
        * mongoexport 
    * 备份与恢复
        * mongodump
        * mongorestore

## day2-3

### 知识点
* 前端框架历史
    * 第一阶段：javascript原生（1995）
        > 操作比较繁琐
    * 第二阶段：jQuery工具库（2006）-> jQuery.Mobile
        > 简化操作
    * 第三阶段：框架
        * AngularJS（2009） -> Angular 
            > MVC分层，数据双向绑定(后台管理系统中的表单)
        * React（2013）
            > 虚拟DOM（virtual DOM）
        * Vue（2014，2020）
            > MVVM,数据双向绑定,Virtual DOM
* Vue的学习目标
    > 不仅仅是会用
    * 会用 -> 原理 -> 读源码 -> 会写
        
* Vue版本
    * 按环境分
        * 开发版本  development (vue.js)
            > 未压缩，有提示
        * 生产版本  production  (Vue.min.js)
            > 压缩，去除一些提示功能
    * 按构建版本分
        * 完整版    (vue.js)
            > 运行时 + 编译器
        * 运行时版 runtime  (vue.runtime.js)
            > 只包含运行Vue所必须的代码
    * 按模块规范分
        * commonJS: (vue.common.js)
        * ESModule: (vue.esm.js)
        * UMD通用模块化规范
            > 支持commonJS/AMD/CMD/全局引入

* Vue的使用
    * 实例化
        * 关联视图层
        * 关联数据层
    * 数据绑定
        * 单向数据绑定
            > 数据层的改变 导致 视图层的变化
            * {{}}      把数据绑定到标签内容
            * v-bind    把数据绑定到属性
        * 双向数据绑定
            > 原理：单向+事件
            * v-model = v-bind:value + v-on:input


* 指令
    > 自定义html属性
    * v-bind 绑定数据到属性
        > 格式：v-bind:属性="数据"
    * v-on  绑定事件
        > 格式：v-on:事件类型="事件处理函数"
    * v-model 双向数据绑定

* 思维转变
    > **节点操作思维** 转变到 **数据驱动思维**

* 架构分层
    * MVC
        * M: Model      数据模型
        * V: View       视图层
        * C: Controller 控制层
    * MVP
        * M: Model      数据模型
        * V: View       视图层
        * P: Presenter  控制层
    * MVVM
        * M: Model      数据模型
        * V: View       视图层
        * VM: ViewModel 控制层

* 响应式属性
    > 特点：当数据发生变化时，自动更新视图
    * 实现原理：监听数据变化(getter&setter)，当数据变化时更新视图
    * 如何设置响应式属性
        * 把数据写入model
        * Vue.set(target,key,value)
            * target: 给目标对象添加响应式属性
            * key: 属性名
            * value: 属性值