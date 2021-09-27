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

### 面试题
* js中的数据类型
    * String
    * Number
    * Boolean
    * Null
    * Undefined
    * Symbol    每次调用得到唯一值（ES6）
    * BigInt    （ES10）
        * Number -> BigInt: BigInt(num)
        * BigInt -> Number: toString()
    * Object

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
    * 列表循环
        * v-for
    * 条件绑定
        * v-show

* 指令
    > 自定义html属性
    * v-bind 绑定数据到属性
        > 格式：v-bind:属性="数据"，可以绑定所有属性，并对class与style进行了增强
    * v-on  绑定事件
        > 格式：v-on:事件类型="事件处理函数"
        * 传参
    * v-model 双向数据绑定
    * v-for
        > 格式：v-for="x in xxx" , v-for="x of xxx"
        * 支持：数组、对象、数字、字符串等
    * v-show 是否显示
        > 利用css的display属性实现显示或隐藏

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
        * 把数据写入data
        * Vue.set(target,key,value)
            * target: 给目标对象添加响应式属性
            * key: 属性名
            * value: 属性值


## day2-4

### 面试题
* v-show与v-if的区别，什么时候使用v-show，什么时候使用v-if
    * 都能实现显示隐藏，但v-show通过css的display属性实现显示隐藏，v-if通过节点创建与销毁实现显示隐藏
    * 需要频繁切换显示隐藏状态的操作使用v-show
    * 一开始就确定一个元素是否显示或隐藏，后期不需要频繁切换的操作使用
    * v-if一般不与v-for配合使用，因为v-for的优先级比v-if要高
* computed与methods的区别
    

### 复习
* 指令
    * v-bind
    * v-on
    * v-for
    * v-model
    * v-show

* 数据绑定
    * 单向
        * {{}}
        * v-bind
            > 对class与style属性增强
        * v-text
        * v-html
        * v-once
    * 双向
        * 单向+事件
        * v-model
            > 原理（替代方案）：v-bind:value + v-on:input
* 条件绑定
    * v-show
    * v-if
    * v-else
    * v-else-if
* 列表循环

* 架构分层
    * MVC
    * MVP
    * MVVM
* 响应式属性
    > 原理：getter&setter
    * 如何设置响应式属性
        * 初始化时设置data属性
            > Vue实例化时会遍历data下所有属性，并通过`Object.defineProperty(target,key,descriptor)`把它们变成getter&setter,并写入实例中
            * target: 目标对象
        * Vue.set(target,key,val)

    ```js
        new Vue({
            data:{
                a:10
            }
        })
    ```
### 知识点
* 响应式属性
    > 原理：getter&setter，只能在对象中实现
    * 如何设置响应式属性
        * 初始化时设置data属性
        * Vue.set(target,key,val)
        * 数组
            > 在Vue实例化是，会修改数组原型对象，并在原型对象中添加以下方法实现响应式
            * push()
            * unshift()
            * shift()
            * pop()
            * splice()
            * sort()
            * reverse()
* 事件绑定：v-on （简写：@）
    * 传参
    * event
    * 修饰符

* 配置参数
    > Vue实例化时，会遍历data、methods、computed等下所有的属性，并写入实例属性
    * el
    * data
    * methods
    * computed 计算属性
        > 初始化与依赖数据发生变化时，自动执行computed中的getter，否则从**缓存**中读取值，一般用于一些比较耗时的操作
    * watch
        > 监听实例属性的变化，当监听的属性发生改变时，自动执行监听函数
    * template
    * components
* 实例
    * 属性
        * 内置属性
            > $开头
            * $el       视图层对应节点
            * $refs     保存节点/组件的引用
            * $data     数据层
        * 私有属性
            > _开头
        * 自定义属性
            > Vue实例化时自动写入实例
    * 方法
       * $set(target,key,val) ： Vue.set()的别名 
       * $delete(): Vue.delete的别名
       * $watch(prop,callback)
            * `score.math`
            * `list.0.checked`
* 类
    * 静态属性（全局属性）
    * 静态方法（全局方法）

```js
    const vm = new Vue({
        // 配置参数
        watch:{
            a:funtion(val,oldVal){}
        }
    });

    vm.$watch('a',function(val,oldVal){

    })

    // function hello(){}
    // const hi = hello
```

* 组件Component
    > 定义一个组件就相当于创建了一个标签，一个组件就是一个Vue的实例
    * 定义
        * 全局组件：Vue.component(name,options)
        * 局部组件: components
    * 使用
        > 组件大小写问题

* 模块化开发
    > 把一个大的东西拆分成多个小模块，然后在组装起来形成一个整体，优势如下
    * 复用
    * 分工
    * 维护

### 练习
* 组件化开发todolist
    > 划分组件


## day2-5

### 面试题
* 本地存储
    > 存储在客户端的数据
    * Cookie
        * 大小：4Kb左右，一般用于存放简单的数据
        * cookie会随着请求自动发送给同域服务器
        * 有效期
    * WebStorage
        > 大小：5M左右
        * sessionStorage
        * localStorage
    * 如果本地存储都满了，如何存入更多的数据
        * 使用子域名实现更多存储，然后实现多个域名之间的通讯
        * indexedDB或webSQL

### 知识点
* 组件
    * 全局组件: Vue.component()
    * 局部组件: components

* 组件渲染
    * el
    * template
    * render
* 组件化开发todolist
    1. 划分组件
    2. 组件与结构
    3. 定义数据（遵循以下原则）
        * 数据定义在使用的组件内
        * 如多个组件共用一个数据，则把数据定义在他们共同的父级组件中
        * 谁的数据谁修改
            > 子组件不能修改父组件传入的数据
* vue特殊属性
    * is
* 实例
    * 属性
        * $refs
        * $data
        * $root
        * $parent
        * $children
    * 方法
        * $on()
        * $off()
        * $emit()
* 组件通讯
    * 父->子：props
        1. 父组件操作：给子组件定义属性，并传递父组件的数据
        2. 子组件操作：通过props选项接收父组件数据，props中的属性会自动写入组件实例
    * 子->父: 
        * 方式一：自定义事件
            1. 父组件操作：给子组件自定义事件（如:v-on:show），并使用父组件的方法做为事件处理函数（handle）
            2. 子组件操作：通过`$emit()`触发自定义事件并传递数据
        * 方式二: 父组件方法传递到子组件执行，并回传数据
        * 方式三：sync修饰符
            > 添加sync修饰符后，自动给组件添加`update:xxx`事件
    * 兄弟组件通讯
        * 把数据提升到他们共同的父级（推荐）
        * A->父组件->B
    * 深层级组件通讯
        * 逐层传递（不推荐）
        * 事件总线
            > 利用一个Vue实例作为事件载体实现传参

* VueCLI Vue的命令行工具（脚手架）
    * 安装
        ```js
            npm i -g @vue/cli
        ```
    * 创建项目
        ```js
            vue create myapp
        ```
    * npm script
        * 调用：`npm run <name>`

* 模块化
    * commonJS
        * 导入：require()
        * 导出：module.exports
    * ESModule
        > 必须在服务器环境中使用
        * 导入：import
            > 格式：`import xx from url`
            * url必须为相对路径或绝对路径
            * 导入的必须为js文件，不能省略后缀名
        * 导出：export
            > export后只能跟`function`、`class`、`var`、`let`、`const`、`default`、`{}`
        * 在webpack中使用
        * 在html文件中使用

* 单文件组件
    > 后缀：`.vue`，把视图、js、css组合在一个文件中形成一个组件

### 练习
* 模块化todolist
* 把todolist案例移植到vue-cli创建的项目中

## 3-1

### 面试题
* v-model的替代方案
    ```js
        <input v-model="username" />

        <input v-bind:value="username" v-on:input="username=123" />
    ```
* 如何让v-model在组件上生效
    > 原理（替代方案）：v-bind:value + v-on:input
* 在子组件修改父组件的数据
    > 正常情况下由于单向数据流限制，无法在子组件修改父组件数据
    ```js
        <myform v-bind:user.sync="username"></myform>

        // 添加sync修饰符后，在子组件内通过$emit('update:user',xxx)修改
        this.$emit('update:user',xxx)
    ```
* 有没有写过Vue组件
    * 组件通讯： 把数据传到子组件，然后生成html结构
    * 插槽：在父组件生成html结构后传入子组件
### 知识点
* 单向数据流
    > 父组件数据修改会自动响应到子组件，反之不成立
* 插槽slot
    > 实现组件的可定制化
    * 内置组件：`<slot/>`
    * 指令：`v-slot`
        > 只能用在template标签中
    * 插槽类型
        * 默认插槽: 没有名字的slot
            > 组件标签内的结构会自动写入组件的默认插槽（template除外）
        * 命名插槽: 
            1. 组件内操作：给slot添加name属性
            2. 父组件操作：在template标签中使用`v-slot:name`
    * 插槽默认值
        > 在`<slot></slot>`组件内指定默认内容，当不使用插槽时默认显示这里的内容
* 作用域插槽
    > 需求：需要组件内的数据完成html结构的生成
    ```js
        // 组件<mycomponent>内部代码
        <slot></slot>
        
        // 使用组件的代码
        <mycomponent :data="goodslist">
            <template v-slot="scope">
                // 在这定义代码，并可使用组件内传入的数据
            </template>
        </mycomponent>
    ```
     
* 组件封装
    * 组件通讯
        > props数据类型校验
        ```js
            {
                props:['data','index','list'],
                computed:{
                    completelist(){
                        this.list.filter()
                    }
                }
            }
        ```
    * 插槽

## day3-2

### 面试题
* 项目中的git分支及作用
    * master -> main
    * develop
    * hotfix
    * release

### 知识点
* vue组件内部样式
    > 所写的样式只在当前组件中生效
    * 原理：属性选择器
        > 给style添加scoped属性后，webpack在编译时会自动给当前组件所有的标签添加`data-v-[hash]`，然后通过属性选择器进行匹配
* css预处理器
    * sass
    * less
    * stylus

* 组件生命周期
    > 组件从创建到销毁的过程

    * 阶段
        * 创建阶段
            > 注入与响应式处理
            * beforeCreate
            * created
        * 挂载阶段
            > 把数据挂载到视图（调用render渲染函数）
            * beforeMount
            * mounted
        * 更新阶段
            > 触发条件：数据被修改（VirtualDOM虚拟DOM）
            * beforeUpate
            * updated
        * 销毁阶段 
            > 触发销毁条件：`v-if`,`$destroy()`
            * beforeDestroy
            * destroyed
    * 搞懂以下问题
        1. 生命周期的执行过程
        2. 在每个钩子函数中适合做哪些操作
* 虚拟DOM: VirtualDOM
    > 一个结构类似与真实DOM节点的js对象
    * diff算法：对比虚拟节点前后状态，找出差异项
    * key作用

* 页面刷新流程
    > 要让页面刷新，节点操作不可避免
    * 原生：修改数据 -> 修改真实DOM节点 -> 页面刷新
    * Vue: 修改数据 -> 修改虚拟节点 - 对比虚拟节点前后状态(找出差异项) -> 修改真实DOM节点（修改差异项） -> 页面刷新
        * 规避一些没必要的更新，减少节点操作


## day3-3

### 知识点
* 应用类型
    * 单页面应用：SPA（Single Page Application）
        > 整个应用只有一个页面（index.html），通过hash值进行跳转，跳转时页面不会刷新
    * 多页面应用: MPA（Multiple Page Application）
        > 整个应用存在多个页面，跳到新页面会刷新
* 路由
    * 使用步骤  
        1. 安装引入
            ```
                import VueRouter from 'vue-router'
            ```
        2. 安装插件
            ```js
                Vue.use(VueRouter)
            ```
        3. 实例化并配置路由信息
            ```js
                const router = new VueRouter({
                    routes:[]
                })
            ```
        4. 注入根实例
            ```js
                new Vue({
                    //...
                    router:router
                })
            ```
        5. 在组件中使用
            * 显示路由组件内容： `<router-view/>`

* 路由跳转
    * 声明式导航：`<router-link/>`
    * 编程式导航: 利用js进行跳转
        * $route: 当前路由信息对象
        * $router: 路由实例
            * back()
            * forward()
            * go()
            * push()
            * replace()

* UI框架（组件库）
    * element-ui    饿了么
    * ant-design    蚂蚁金服
    * iView         腾讯
    * vantUI        有赞
    * ...


## day3-4

### 面试题
* 点语法与setAttribute()设置属性的区别(jquery中的prop()与attr())
    * 节点属性
    * html标签属性
        * 公共属性: id,class,title
        * 私有属性
            * img: src,alt
            * input: type,value
            * label: for
    * 点语法设置的是节点属性, setAttribute()设置的是html属性
    ```js
        div.title = 'hello'
        div.setAttribute('title','hello')
        $(div).prop('title','hello')
        $(div).attr('title','hello')
    ```

### 知识点
* 路由模式
    * 类型
        * hash      哈希路由（路径带#）
        * history   HTML5新特性
    ```js
        mode:'hash',// history
    ```
    * hash路由的原理
        > 监听hashchange事件，当hash发生改变时渲染匹配的内容到页面
* 路由跳转
    * 路径跳转
        ```js
            <router-link to="/home" />
            <router-link :to="{path:'/home'}" />
            this.$router.push('/home')
            this.$router.push({path:'/home'})
        ```
    * 路径名称跳转
        > 给路由命名
* 路由传参
    * query： `?xx=xxx`
        > 数据持久化
    * params
        > 只在name方式跳转时生效,缺点是页面刷新时数据丢失(动态路由例外)
        * 动态路由
            * 监听动态路由变化
                * watch
                * 路由守卫beforeRouteUpdate()

* 路由守卫: 路由切换过程中自动执行的钩子函数
    * 全局路由守卫
        > 是路由实例的方法, 一般写在路由配置文件中
        * router.beforeEach(fn)
            * to
            * from
            * next()  
        * router.afterEach(fn)
            * to
            * from
        * router.beforeResolve(fn)
            * to
            * from
            * next() 
    * 路由独享守卫
        > 写在路由配置中
        * beforeEnter(fn)
            * to
            * from
            * next() 
    * 路由组件内守卫
        > 写在路由组件中
        * beforeRouteEnter()
        * beforeRouteUpdate()
        * beforeRouteLeave()

* 路由守卫的应用
    * 页面权限控制

* 路由导航过程
    > /category -> /mine:   1,2,3,5,6,7,8,9,10,11
    > /goods/1 -> /goods/2: 1,3,4,8,9,10,11
    1. 导航被触发
    2. 在**失活的组件**里调用`beforeRouteLeave`离开守卫
    3. 调用全局的 beforeEach 守卫。
    4. 在重用的组件里调用 beforeRouteUpdate 守卫 (2.2+)。
    5. 在路由配置里调用 beforeEnter。
    6. 解析异步路由组件。
    7. 在被激活的组件里调用 beforeRouteEnter。
    8. 调用全局的 beforeResolve 守卫 (2.5+)。
    9. 导航被确认。
    10. 调用全局的 afterEach 钩子。
    11. 触发 DOM 更新。

* 二次封装
    > 在已有组件的基础上再次封装组件,达到简化使用或优化用户体验目的的操作

* Session会话
    1. 第一次请求(获取验证码):在服务器生成验证码(如:cjg9),保存到session,并返回给前端
    2. 第二次请求(校验验证码):注册并发送参数(username,password,vcode)
* http请求是无状态请求
    > 使用sessionid识别用户身份
    * 为什么要通过cookie来识保存sessionid
        1. 可以通过服务器设置cookie（Set-Cookie响应头）
        2. cookie会自动发给同域服务器
* 解决跨域cookie
    > 以下三个条件必须同时满足才能实现cookie跨域通讯
    * 服务器必须设置响应`Access-Controll-Allow-Credentials=true`
    * 每个请求添加`withCredentials=true`
    * 浏览器设置
        V91: 在快捷方式后添加` --flag-switches-begin --disable-features=SameSiteByDefaultCookies,CookiesWithoutSameSiteMustBeSecure --flag-switches-end`


## day3-5

### 知识点
* axios二次封装
* 页面访问权限控制
    1. 设置哪些页面需要登录才能访问
        > requiresAuth
    2. 在beforeEach全局路由守卫中判断登录状态并控制页面访问
        * 必须解决以下问题
            1. 用户信息是否被篡改
            2. 用户登录是否过期
            > 解决方案: token令牌(一个加密后的字符串)

* token令牌
    > 优点: 
    * 简化用户操作: 用户不需要每次输入用户名和密码
    * 减轻服务器压力: 不需要进行数据库的I/O操作

    1. 生成:加密
        > 在服务器生成(加密算法,有效期,密钥)
    2. 校验: 解密
        > 在服务器解密,如token被篡改或已过期,则校验不通过


* Vuex
    > 专门针对Vue的全局状态管理工具,能实现据据共享与监听
* Vuex 使用步骤
    1. 安装与引用
        ```js
            // npm install vuex

            import Vuex from 'vuex'
        ```
    2. 安装插件
        ```js
            Vue.use(Vuex)
        ```
    3. 实例化store
        ```js
            const store = new Vuex.Store({
                // 核心配置
            })
        ```
    4. 将store实例注入到Vue根实例
        ```js
            new Vue{
                // ...
                store:store,
            }
        ```
    5. 在组件中使用
        > this.$store

* Vuex核心配置
    * state 状态(全局共享的数据,类似与组件中的data)
        > 通过`this.$store.state.xxx`获取
    * getters 
        > 通过 `this.$store.getters.xxx`获取,参数state
        ```js
            {
                //...
                getters:{
                    // getter
                    totalPrice(state){
                        return state.goodslist.reduce()
                    }
                }
            }
        ```
    * mutations 修改state的唯一方式,类似于组件中的methods
        > 通过`this.$store.commit(mutation,payload)`调用,必须为同步修改,不能包含异步操作
        ```js
            {
                //...
                mutations:{
                    // this.$store.commit('add2cart',{goods})
                    add2cart(state,payload){
                        state.goodslist.unshift(payload.goods)
                    }
                }
            }
        ```

## day4-1

### 面试题
* 如何在父组件显示子组件的数据
    * 组件层级
    * ref
    ```js
        // 父组件
        <div>
            <son ref="son"/>
        </div>
        {
            mounted(){
                console.log(this.$children[0].num)
                console.log(this.$refs.son.num)
            }
        }

        // 子组件 son
        <div class="son">
            
        </div>
        {
            data(){
                return {
                    num:10
                }
            }
            mounted(){
                console.log(this.num)
            }
        }
    ```
* 父子组件生命周期函数的执行顺序
    1. 父beforeCreate
    2. 父created
    3. 父beforeMount
    4. 子beforeCreate
    5. 子created
    6. 子beforeMount
    7. 子mounted
    8. 父mounted

### 知识点
* Vuex核心配置
    * state
    * getters
    * mutations
        > 唯一修改state的方式(必须为同步修改,不能包含是异步操作),调用方式:`this.$store.commit(mutation,xxx)`
        * 参数
            * state
            * payload
    * actions
        >类似与mutation,一般用于异步操作,调用方式:`this.$store.dispatch(action,xxx)`
        * 参数
            * context: 与store实例具有相同属性和方法的对象
                * context.state
                * context.commit()
                * context.dispatch()
                * ...
            * payload
* VueX的工作流程
    > component -> action -> ajax -> mutation -> state ->
        ^                                               |
        |                                               |
        -------------------------------------------------
    * 使用口述方式描述整个流程

* Vuex模块化
    * module
        > 模块化后，默认只影响state的获取，getters,mutations,actions还是保存在全局状态
    * namespace命名空间
        > `namespaced:true`,设置命名空间后让getters,mutations,actions具有自己的命名空间
        * getters获取: `this.$store.getters['user/isLogin']`
        * mutations触发: `this.$store.commit('user/login')`
        * actions触发: `this.$store.dispatch('user/login')`
* Vuex映射
    > 利用vuex提供的方法简化操作
    * mapState()
        > 把state数据映射到组件computed
    * mapGetters()
        > 把getters数据映射到组件computed
    * mapMutations()
    * mapActions()

    > PS: mapMutations,MapActions都支持数组与对象,当实际参数与mutations,actions中的参数不符时,只能采用对象形式

* 团队项目开发准备工作
    * 组队,选出一个负责人
    * 选项目

## day4-2

### 知识点
* Vue项目要求
    * webApp(移动端) + 后台管理系统(PC端)
* Vue项目前期准备工作
    * 组队
    * 选项目
        > 分析项目模块
    * 分工
        * 一个人负责数据与接口
        * webApp按模块分工
        * 后台管理系统按模块分工
        * 一个人负责全局和公共模块的编写
    * 创建项目
        > 一个人负责创建和各项基础配置,其他人clone
        * VueCLI
        * 使用git与添加过滤清单
        * 添加依赖
        * ...
     * 创建分支
        * 公共分支
            * dev
        * 私有分支(不做要求)
    * 远程仓库
        * 创建团队
        * 创建远程仓库
        * 设置仓库权限
   
    * 推送基础代码
        > 其他成员clone

* 后台管理系统
    > 用于管理数据的系统,一般不提供注册入口,而是由管理员分配用户
    * UI框架: elementUI
        * 按需加载
            * 手动按需加载
            * 利用工具实现按需加载
                > `babel-plugin-component`, 需要配置babel选项:`.babelrc` 或 `babel.config.js`

* 页面权限控制
    > 角色
    * 页面访问权限
        > 根据用户登录状态决定是否允许进入页面
        * 做法一: 先配置所有路由,然后利用路由拦截实现页面访问权限控制
        * 做法二: 先配置**基础路由**(不需要登录权限的路由),然后根据用户登录状态动态添加**权限路由**(需要登录权限才能访问)
            * router.addRoutes() 已废弃
            * router.addRoute()
    * 功能权限(按钮级别权限控制)
        > 根据用户权限决定是否允许用户操作(禁用或隐藏)
        * 一般使用v-if或自定义指令实现
    * 数据权限
        > 根据用户权限不同显示不同的数据

* 子路由(嵌套路由): children
    > `router-view`的嵌套
    ```js
        // Manage组件显示在App的router-view中
        {
            path:'/manage',
            component:Manage,
            children:[
                // Goods与User组件显示在Manage组件中的router-view
                // 路径匹配/manage/goods时渲染Goods组件
                {
                    path:'goods',
                    component:Goods,
                    name:'Goods'
                },
                {
                    path:'user',
                    component:User
                }
            ]
        }
    ```
* 重定向: redirect
    ```js
        {path:'',redirect:{name:'Goods'}}
    ```
    

## day4-3

### 知识点
* 使用git问题
    * 无法`git add`
        > 没有配置name与emain
    * 无法`git push`
        * 没有关联远程仓库: `git remote add origin <url>`
            > clone下来的仓库自动关联
        * 没有权限
        * 没有同步
* Vue过渡动画: 
    > 路由转场动画
    * 动画组件
        * transition
        * transition-group
            * name 修改类名前缀
        ```js
            <transition>
                <div></div>
            </transition>
            <transition-group>
                <div></div>
                <span></span>
            </transition-group>
        ```
    * 触发动画场景
        * 条件渲染 (使用 v-if)
        * 条件展示 (使用 v-show)
        * 动态组件
        * 组件根节点

* Vue内置组件
    * slot
    * transition/transition-group

## day4-4

### 知识点
* 环境判断
    > process.env.NODE_ENV
    * 开发环境: development
        > 10.3.136.163/localhost/127.0.0.1
    * 测试环境
        > 10.3.136.10
    * UAT环境: 用户验收环境
        > http://120.76.247.5
    * 生产环境: production
        > http://laoxie.com
* 缓存组件: keep-alive
    * 属性
        * include
        * exclude
    * 钩子函数
        * activated
        * deactivated


## day4-5

### 知识点
* 保持滚动条位置
    * scrollBehavior
        * 同步滚动
        * 异步滚动

* Vue扩展
    * 自定义组件
        * 分类
            * 全局:Vue.component()
            * 局部:components
    * 自定义指令
        * 分类
            * 全局: Vue.directive()
            * 局部: directives

        * 应用:
            * 利用自定义指令实现按钮权限控制
    * 自定义过滤器
        * 分类
            * 全局: Vue.filter()
            * 局部: filters
        * 使用： `|`
            * {{data | filter}}
            * v-bind
    * 自定义mixin
        混入 (mixins) 一般用于组件选项的复用（所有属性与组件选项一致）。并以一定的合并规则混入到组件中
        * 分类
            * 全局：Vue.mixin()
            * 局部: mixins
    * 插件
        * 函数
        * 带install方法的对象
    * 依赖注入
        > 增强型的props，注入的数据不是响应式数据（如传入响应式对象依然能实现响应式效果）


* 内置指令
    * v-pre
    * v-cloak
    * v-once
* 正则
    * 边界匹配
        * `^`   匹配开头
        * `$`   匹配结尾
        * `\b`  单词边界
        * `\B`  单词非边界
    * 正则匹配条件：零宽断言
        * `(?=\d{3})`
        * `(?!\d)`
* 组件通讯
    * 父子通讯：
        * props
        * 自定义事件（$emit）
    * 兄弟通讯
    * 深层及组件通讯
        * 逐层传递
        * 事件总线 event Bus
    * 全局状态管理：vuex


## day5-1

### 知识点:React

* 特点
    * 一次学习，到处编写
        > react.js
        * webApp        在浏览器中访问
            > react-dom
        * nativeApp     需要在手机端安装使用
            > react-native
        * ...
* 渲染
    * ReactDOM.render(vNode,target)
* 创建虚拟节点
    * React.createElement(type,prop,children)

* JSX
    > 浏览器不能识别JSX，需要通过babel工具进行编译（`JSX -> babel -> React.createElement()`）
    * 编译：`browser.js` babel的浏览器版本
    * 规则
        * 不能直接使用JS关键字
            * class -> className
            * for -> htmlFor
        * 属性必须使用驼峰
            * onkeyup -> onKeyUp
            * colspan -> colSpan
        * 必须结束标签
            * img
            * input
        * 在JSX中使用变量必须放在花括号中`{}`
            > 花括号中不允许出现声明式语句：let var const
            ```js
                {username}
                {true ? <button>xx</button> : <span></span>} -> {React.createElement()}
            ```
        * style只能使用对象形式
            ```js
                const mystyle = {color:'#58bc58'}
                <div style={mystyle}></div>
                <div style={{color:'#58bc58'}}></div>
            ```
        * 使用 js 语法注释
            * 单行注释
            * 多行注释

* React组件
    * 为什么使用组件
        * 复用
        * 分工
        * 维护
    * 分类
        * 类组件
            > 必须包含render函数
            ```js
                class List extends React.Component{
                    render(){
                        return <div></div>
                    }
                }
            ```
        * 函数组件
            ```js
                function List(){
                    return <div></div>
                }
            ```
    * 定义组件要求
        * 组件名首字母必须大写
        * 每个组件只能包含一个根元素
    * 使用
        > 定义一个组件相当于创建了一个标签
        ```js
            <List/>
            <Datalist/>
        ```
* 函数组件与类组件的区别
    1. 定义方式不一样
    2. 功能不一样
        * 函数组件，也称`UI组件`，一般用于实现界面效果，没有自己的状态，所以也称为**无状态组件**，只有在父组件传入的数据发生改变时刷新
        * 类组件，也称**状态组件**，拥有自己的状态，在状态发生改变时会自动刷新，类组件拥有以下函数组件所没有的功能
            * 状态: state
            * 生命周期
            * this： 只在constructor、render、生命周期函数中指向组件实例
    3. 在实际开发中推荐优先使用函数组件进行开发

* 使用React实现todolist待办事项
    * 使用知识点
        * state
            * 定义
                ```js
                    constructor(){
                        super()
                        this.state = {
                            msg:'hello',
                            qty:10
                        }
                    }
                ```
            * 使用
                ```js
                    this.state.msg
                ```
            * 修改state
                ```js
                    // 以下代码只会修改msg，不影响其他的state
                    this.setState({
                        msg: 'hello man'
                    })
                ```
            * 受控组件与非受控组件
                * 受控组件：利用组件的状态state控制表单的值的做法
                    > 把state与表单进行绑定时，必须提供相应修改状态的方法
                    ```js
                        <input value={this.state.todo} onChange={change} />
                    ```
                * 非受控组件：利用节点操作的方式获取输入框的值
                    ```js
                        <input id="box" />
                    ```
        * 父子通讯：props
            1. 父组件操作：给子组件定义属性并传递数据
            2. 子组件操作
                * 函数组件：函数的第一个参数为props
        * 列表循环
            * map()
            * filter
            * ...
        * 条件渲染：三元运算
            ```js
                { 条件 ? 真 : 假}
            ```
        * 事件绑定
            * 使用驼峰
            * event：事件处理函数的最后一个参数


## day5-2

### 知识点

* 组件通讯
    > 数据修改原则: 谁的数据谁修改
    * 父->子：props
        1. 父组件操作：给子组件定义属性并传递数据
        2. 子组件操作
            * 函数组件：函数的第一个参数为props
            * 类组件：
                * constructor的第一个参数
                * this.props
    * 子->父：
        * 把父组件方法传到子组件执行，执行时回传参数
            1. 父组件操作：通过props传递方法到子组件
            2. 子组件操作：执行传入方法，并传递参数
    * 兄弟->兄弟
        * 兄弟->父->兄弟
        * 状态提升（推荐）
            > 把数据放到他们共同的父级

* 改变函数this指向
    > 在通讯过程中为避免函数的this发生变化，一般在定义函数所在组件的construtor中指定this指向
    * fn.call(target,a,b,c,...)       把fn的this指向target，并执行fn
    * fn.apply(target,[a,b,c])      把fn的this指向target，并执行fn
    * fn.bind(target,a,b,c)       把fn的this指向target，并返回一个新的函数newFn（改变了this指向的fn）
        > 只生效第一次


* react 组件的数据挂载方式
    * state
        * 修改状态: `this.setState()`覆盖式修改
            * 默认异步操作(自动合并多次setState): `this.setState(state[,callback])`
            * 依赖上次setState()的结果（不合并setState）：`this.setState(fn[,callback])`
                * fn: 为一个函数，参数为state，必须返回一个新的state
    * props
        * 普通属性
        * render props
            > 使用一个值为函数的 prop 共享代码的简单技术
            （类似于 Vue 中的作用域插槽）
            ```jsx
                <Child renderHead={(todo)=>{
                    return <div><input type="text" value={todo} /><button>添加</button></div>
                }} />

                // 子组件代码
                {props.renderHead('text')}
            ```
        * children
            > 类似于于Vue中的插槽，实现组件可定制化（在父组件生成html结构再写入子组件）
            ```js
                <Child>
                    <p>hello</p>
                    <input type="text" />
                </Child>
                <Child>
                    {
                        (data)=>{
                            return <>
                                <p>hello</p>
                                <input type="text" />
                            </>
                        }
                    }
                </Child>

                // Child内部代码
                <div>
                    //{props.children}
                    {props.children(childData)}
                </div>
            ```
    * 列表循环
    * 条件绑定
    * 事件绑定
        * event
        * this指向
            > 事件处理函数默认没有this指向
    * ref
        * 回调函数写法
            ```js
                <input ref={el=>this.input=el} />

                this.input //得到input对应的节点
            ```
        * createRef()
            ```js
                const myRef = React.createRef()
                <input ref={myRef} />

                myRef.current;// 得到input对应的节点
            ```
## day5-3

### 知识点
* 构建工具
    * grunt
    * gulp
    * webpack   
* webpack
    * 什么是webpack
        * 模块打包工具
    * 工作原理：
        > JSX -> webpack(babel) -> React.createElement -> 输出到浏览器
        * 把项目当做一个整体，通过入口文件（如：index.js）分析整个项目结构，找到所有依赖模块，并利用配置好的加载器、插件处理这些模块，最后打包为一个（或多个）浏览器可识别的文件
    * 从0搭建基于webpack的react项目环境
        * 创建目录
            * src                   源码
                * components
                * views
                * utils
                * layout
                * App.js            根组件
                * index.js          入口文件
            * public                应用根目录
            * dist                  编译目录
            * node_modules          项目依赖包
            * webpack.config.js     webpack配置文件
            * package.json  
                * 依赖
                * npm script
            * .gitignore
        * 安装依赖
            * react & react-dom
            * @babel/core & babel-loader & @babel/preset-react
            * webpack & webpack-cli & webpack-dev-server
            * html-webpack-plugin
        * 配置webpack
            * entry     入口（设置webpack工作起点）
            * output    出口（设置webpack工作终点）
            * loader
                > module.rules
            * plugins
            * devServer
                > static.directory

        * 启动项目: npm script
            * 启动服务器：`webpack server`
            * 编译：`webpack`
    * webpack与gulp
        * gulp: 是一个基于任务的构建工具（命令式编程）
        ```js
            // gulp: sass->css
            // 创建一个任务
            gulp.task('buildSass',(done)=>{
                // 编译sass需要手动编写代码去实现（命令式编程）
                // 1. 匹配sass文件
                gulp.src('./src/sass/*.scss')

                // 2. 编译
                .pipe(sass())

                // 3. 输出未压缩版本
                .pipe(gulp.dest('./dist'))

                // 4. 输出压缩版本并改名

            })

            // 编译sass: 运行这个任务
            // gulp buildSass

            // 运行任务：gulp complieES6
            export.compileEs6 = function(){

            }
        ```
        * webpack: 基于配置的构建工具
            > 在项目根目录下创建`webpack.config.js`（是一个符合commonJS规范的模块）

    * webpack常用加载器
        * js:babel-loader
        * css: css-loader + style-loader
        * sass: sass-loader
        * less: less-loader
        * 文件：file-loader
    * webpack常用插件
        * html-webpack-plugin
### 练习
* 从0配置基于webpack的Vue项目环境

## day5-4

### 知识点
* 深层级组件通讯
    * 逐层传递（繁琐，不推荐）
    * context 组件共享
        > 某个组件只要往自己的 context 里面放了某些状态，这个组件之下的所有子组件都能**直接访问**这个状态
        * 实现步骤
            1. 创建 Context：
                ```js
                    // 默认值在没有Provider共享数据时能获取到
                    let defaultValue = { username: "laoxie" };
                    let myContext = React.createContext(defaultValue);
                ```
            2. 父组件 Provider
                > 父组件利用Provider向子组件共享数据
                ```js
                    <myContext.Provider value="xxx">
                        <Child/>
                    <myContext.Provider>
                ```
            3. 子组件接收
                * 函数组件
                    * Consumer
                        ```js
                            <myContext.Consumer>
                                {
                                    (value)=>{
                                        return (
                                            <div></div>
                                        )
                                    }
                                }
                            </myContext.Consumer>
                        ```
                    * Hooks
                * 类组件
                    * Consumer
                    * contextType
                        > 给子组件设置contextType静态属性(类属性)，设置静态属性后，可通过`this.context`或在constructor中第二个参数获取
* 生命周期
    > 组件从创建到销毁的过程
    * 执行阶段
        * Initial:      初始化阶段
            * constructor
        * Mounting：    挂载阶段
            * componentWillMount -> UNSAFE_componentWillMount（不推荐）
            * componentDidMount
        * Updating：    更新阶段(不断执行render)
            * componentWillUpdate -> UNSAFE_componentWillUpdate（不推荐）
            * componentDidUpdate
        * Unmounting：  卸载阶段
            * componentWillUnmount
        * 特殊钩子函数
            * componentWillReceiveProps -> UNSAFE_componentWillReceiveProps（不推荐）
            * shouldComponentUpdate

    * 学习生命周期需要搞懂以下两个事情
        * 执行过程？
        * 适合做哪个操作？
            * constructor(props,context)
                > 定义初始值，改变函数this指向
            * componentDidMount()
                > ajax请求，定时器，节点操作等，读取本地存储数据
            * componentDidUpdate(prevProps, prevState)
                > 执行依赖新 DOM 节点的操作，依据新的属性发起新的ajax请求（在改钩子函数中修改state**注意避免死循环**）
                * prevPorps 与 this.props
                * prevState 与 this.state
            * componentWillUnmount(
                > 清除定时器、终止ajax请求等
            * shouldComponentUpdate(nextProps, nextState)
                > 组件性能优化
                * nextProps 与 this.props
                * nextState 与 this.state
                ```js
                    shouldComponentUpdate(nextProps, nextState){
                        // 判断两个对象的属性是否一致（使用第三方工具库实现判断，如：lodash -> underscore）
                        if(nextProps.age === this.props.age){
                            return false
                        }
                    }
                ````
* 组件性能优化
    * 组件在什么场景下会刷新
        1. state被修改
        2. props被修改
        3. forceUpdate() 强制刷新
        4. 父组件刷新
            > 传入子组件的props没有改变
            ```js
                this.state = {
                    a:10,
                    b:20,
                }

                <Child a={this.state.a} />
            ```
    * PureComponent
        > PureComponent 与React.Component的区别是PureComponent内部帮我们做了shouldComponentUpdate的简单判断，让state和props不变的情况下自动return false，从而实现性能优化
    * shouldComponentUpdate()
        > 选择性返回true

## day5-5

### 知识点
* ReactRouter
    > 一切皆组件
* ReactRouter常用组件
    * 路由类型
        > process.env.NODE_ENV === 'production' ? BrowserRouter : HashRouter
        * HashRouter
        * BrowserRouter
        * 属性
            * basename
    * 路由配置
        * Switch
        * Route
            * path
            * component
            * exact
            * render    renderProps技术
            * Children  Route双标签中的内容
        * Redirect
            * from
            * to
            * exact
* 路由跳转
    * 声明式导航
        > 利用内置组件实现导航
        * Link
            * to
        * NavLink
            * to
            * activeStyle
            * activeClass
            * replace   不产生浏览记录
    * 编程式导航
        > 利用js进行页面跳转，需要用到history,location,match这几个对象
        * 如何获取`history`,`location`,`match`
            * 通过`Route.component`属性渲染组件
            * `withRouter`高阶函数（高阶组件）
        * 跳转方法
            * history.push()
            * history.replace()
* UI组件库
    * ant-design
    * element-ui
    * ...

* 高阶组件
    > 高阶组件并不是一个React组件，而是一个高阶函数（包装函数）

## day5-6

### 知识点
* 高阶组件HOC（High Order Component）
    > 高阶组件并不是一个React组件，而是一个高阶函数（包装函数）
    * 纯函数
        * 不修改传入的参数
        * 固定输入有固定输出
        ```js
            function sum(a,b){
                return a+b;
            }
            sum(10,20);// 30
            sum(10,20);// 30

            function randomNumber(min,max){
                return parseInt(Math.random*(max-min+1))+min
            }
            randomNumber(10,20);//11
            randomNumber(10,20);//16

            function formatData(data){
                const newData = []
                for(let key in data){
                    let item = []
                    item[0] = key
                    item[1] = data[key]
                    newData.push(item)
                }
                return newData
            }
            formatData({a:10,b:20,c:30}); // [['a',10],['b',20],['c',20]]
        ```
    * 高阶组件定义
        > 命名规则：`with`开头，高阶组件的参数为组件，返回值为新组件
        * 定义方式一： 
            * 属性代理
            * 提取公共代码
        * 定义方式一： 反向继承
            > 实现页面访问权限控制

        > PS: 定义高阶组件时必须向下传递props与children

### 练习
* 实现withStorage高阶组件
    > 函数柯里化：通过函数调用继续返回函数的方式，实现多次接收参数后统一处理的函数编码形式(好处：降低通用性，提高适用性)
        ```js
            withStorage('userInfo')(Home)
        ```
* 增强withStorage
    ```js
        withStorage('userInfo','token')(Home)
        withStorage('userInfo','token','myData')(Home)
    ```

## day6-1

### 知识点
* 路由传参
    * query
        > 获取：props.location.search
        * URL
        * URLSearchParams
    * params
        > props.match.params
        * 动态路由
    * 任意参数
        > 刷新后丢失
* 用户权限
    * 用户 -> 角色 -> 权限
    * 分类
        * 页面访问权限
        * 功能权限（按钮级别权限）
        * 数据权限
            > 根据用户级别与数据状态进行展示
    ```js
        {
            classManage:{
                edit:true,
                delete:false
            },
            subjectManage:{
                edit:true,
                delete:true
            }
        }
    ```

## day6-2

### 知识点:Hooks
* React组件类型
    * 函数组件（无状态组件）
        > 优先使用函数组件（性能）
    * 类型组件（状态组件）
        * state
        * 生命周期
        * this
* Hooks
    > hooks是React16.8新增特性，用于增强函数组件的功能
    * 注意事项
        * 只能在函数组件中或其他hook中使用
        * 只能在函数组件最外层使用（不能在代码块中使用）
        * 函数组件每次更新都会从上往下执行完内部所有的代码
    * 常用Hooks
        * useState
            > 用法：`useState(initState)`，返回状态与改变这个状态的方法组成的数组
            ```js
                // 类组件
                this.state = {
                    qty:1,
                    count:10
                }
                this.setState({qty:2})

                // 函数组件
                const [qty,setQty] = useState(1)
                const [count,setCount] = useState(10)
                setQty(2);
            ```
        * useEffect
            > 格式：`useEffect(fn,[dependencies])`
            * 用法一：`useEffect(()=>{})`
                > 不推荐，等效于componentDidMount + componentDidUpdate的效果
            * 用法二：指定依赖，`useEffect(()=>{},[qty])`
                > 等效于componentDidMount + shouldComponentUpdate的效果
            * 用法三：空依赖，`useEffect(()=>{},[])`
                > 等效于componentDidMount的效果
            * 用法四：返回一个函数，
                > 等效于componentWillUnmount的效果
                ```js
                    useEffect(()=>{
                        return function(){
                            // 这里的代码只有在组件销毁时执行
                        }
                    },[])
                ```
        * useMemo
            > 语法：`useMemo(fn,[dependencies])`，得到fn的返回值，一般用于一些比较消耗资源的运算
            * 用法一：普通用法（不推荐，等效于传统用法）
            ```js
                const totalPrice = useMemo(function(){
                    return classList.reduce((val,item)=>{
                        return val + item.price * item.qty
                    },0)
                })
            ```

            * 用法二：空依赖，初始化时执行并缓存，更新时不会重新执行useMemo中的代码，永远得到缓存值
            ```js
                const totalPrice = useMemo(function(){
                    return classList.reduce((val,item)=>{
                        return val + item.price * item.qty
                    },0)
                },[])
            ```

            * 用法三：指定依赖，初始化时执行并缓存，只有在依赖的数据发生变化时重新执行useMemo中的代码并返回新的值，否则得到缓存值
            ```js
                const totalPrice = useMemo(function(){
                    return classList.reduce((val,item)=>{
                        return val + item.price * item.qty
                    },0)
                },[classList])
            ```
        * useCallback
            > 语法：`useCallback(fn,[dependencies])`，一般用于优化函数创建（如：缓存事件处理函数），实现性能优化
            * 用法一：普通用法（不推荐）
            * 用法二：空依赖
                ```js
                    const [qty] = useState(1)
                    const handle = useCallback(()=>{
                        // qty,count
                    },[])
                ```
                PS: 空依赖写法配合`setState`用法，可以实现状态的修改
                ```js
                    setState(function(state){
                        return newState
                    })
                ```
            * 用法三：指定依赖
                ```js
                    const [qty] = useState(1); //2
                    const handle = useCallback(()=>{
                        console.log(qty)
                    },[qty])
                ```
        * useReducer
            > 一个增强版useState，一般用于复杂状态的处理，返回一个状态与修改这个状态函数组成的数组
            * reducer   修改状态的方法
                > 接收state与action作为参数，必须返回一个新的state
            * state     状态
            * action    修改状态命令
            ```js
                const reducer = function(state,action){
                    switch(action.type){
                        // case ...
                    }
                }
                const initState = {}
                const [state,dispatch] = useReducer(reducer,initState)

                // 修改状态
                dispatch({type:'xx'})
            ````
        * useContext
            > 语法：`useContext(context)`，返回context共享的数据，用于简化context的获取

            ```js
                // 1. 创建Context
                const myContext = React.createContext(defaultValue)

                // 2. 父组件共享数据
                <myContext.Provider value={{a:10,b:20}}>
                    <Child/>
                </myContext.Provider>

                // 3. 子组件接收
                // 函数组件: Consumer + useContext
                // 类组件：Consumer + contextType
            ```
        * useRef
        * useLayoutEffect
            > 用法与useEffect一致，是useEffect的同步版本，等效于类组件中的componentWillMount
    * 自定义hooks
        * useStorage


## day6-3

### 知识点
* 全局状态管理工具解决了什么问题，为什么要使用它
    1. 数据在多个组件中共享的问题
    2. 数据更新的问题
    3. 组件刷新的问题
* Redux: 全局状态管理工具（不依赖任何框架的状态管理工具）
    * 使用步骤
        1. 安装引入
        2. 创建store
            > 定义reducer与初始state
        3. 在React组件中使用
            * 获取：store.getState()
            * 修改：store.dispatch(action)
            * 监听：store.subscribe(fn)
    * 核心配置
        * store     数据仓库
        * state     状态（用于全局共享）
        * reducer   修改状态的方法
            > 是一个用于修改state的纯函数，接收state,action作为参数，且必须返回一个新的state
        * action    动作/命令
            > 格式：`{type}`，调用方式：`store.dispatch(action)`
    * store核心方法
        * getState()        获取state
        * dispatch(action)  修改state
        * subscribe(fn)     监听state修改
    ```js
        // Vuex
        const store = new Vuex.Store({
            // 核心配置
            state,
            getters,
            mutations,  // 同步修改
            actions,    // 异步修改
            modules
        })
        // 注入vue根实例
        new Vue({
            ...
            store
        })
        // 获取：
        store.state.xxx
        // 修改
        store.commit('mutation');// store.commit({})
        store.dispatch('action');// store.dispath({type:'action'})


        // redux 与 react是两个独立产品
        const store = createStore(reducer,initState)

        store.dispatch(action); // action格式：{type}
    ```
* react组件刷新条件
    * state被修改
    * props被修改
    * 强制刷新
    * 父组件刷新
* react组件与redux组件的结合
    * 使用高阶组件`withRedux`通过props方式把redux数据传入组件

## day6-4

### 知识点
* react-redux桥接工具
    > 因为react与redux是两个独立的产品，通过react-redux桥接工具让开发者更方便地在react组件中使用redux数据
    * 高阶组件：`connect()`
        > 使用高阶组件把数据和修改方法作为props传入React目标组件
    * 组件：`Provider`
        > 使用context共享redux数据
    * 使用步骤 
        1. 利用`Provider`组件共享store
        2. 利用高阶组件`connect`定义传入目标组件的数据和修改state的方法
            * `mapStateToProps(state,props)`
            * `mapDispatchToProps(dispatch,props)`
* 利用redux+高阶组件实现页面访问权限控制
    * redux保存用户信息
        * token
    * 高阶组件`withLogin`控制用户是否能访问改页面
    * 服务器校验token
        > 先放行后校验的方式


## day6-5

### 知识点
* redux模块化（reducer模块化）
    * combineReducers(object)
    ```js
        // vuex
        new Vuex.Store({
            modules:{
                a,
                b
            }
        })

        const reducer = combineReducers({
            user:userReduer,
            common:commonReducer
        })

        const store = createStore(reducer)
    ```
* redux简化操作
    ```js
        // 修改操作
        const action = {
            type:'USER_LOGIN_ASYNC',
            userInfo
        }
        dispatch(action)

        // 容易写错
        dispatch({
            type:'USER_LOGIN_ASYCN',
            userInfo
        })
    ```
    * 解决经常写错action的问题： action creator
        ```js
            function login(userInfo){
                return {
                    type:'USER_LOGIN_ASYNC',
                    userInfo
                }
            }

            dispatch(login(res.data))
        ```
    * 简化修改state的方法：`bindActionCreators`
        > 如有多个修改state的方法需要传入目标组件，则可以使用bindActionCreators简化操作
        ```js
            function bindActionCreators(actionCreators,dispatch){
                // {login,logout}
                const result = {}
                for(let key in actionCreators){
                    //result[key] = function(...args){
                        //const action = actionCreators[key](...args)
                        //dispatch(action)
                    //}
                    result[key] = function(){
                        const action = actionCreators[key].apply(this,arguments)
                        dispatch(action)
                    }
                }
                return result;
            }
        ```
* redux的工作流程
* 利用发布订阅模式实现简易 redux
* redux中间件
    ```js
        // 同步修改
        dispatch({type:'logout'})

        // 涉及到异步任务，我们通常的做法是：在组件中先发起ajax请求，等待数据返回后再通过dispatch修改state
        dispatch({type:'login',userInfo})

        createStore(reducer,initState,enhancer)
    ```
    * 使用中间件步骤
        1. 安装引入
        2. 利用applyMiddleware包装中间件
        3. 传入createStore第三个参数
            > 中间件生效后，可以在actionCreator中返回一个函数
    
    * 处理异步任务
        * 传统做法：在组件中先发起ajax请求，等待数据返回后再通过dispatch修改state
            > ajax -> action -> reducer
        * 中间件做法：异步action -> actionCreator -> server -> 同步action -> reducer

    * 常用中间件
        * redux-thunk
            > 让action creator支持函数形式
        * redux-saga
            * Generator 生成器函数
            * Iterator  迭代器
## day6-6

### 面试题
* for...of是否能遍历对象

### 知识点
* ES6新特性
    * Generator 生成器函数
        > 返回一个Iterator
    * Iterator  迭代器
        > 一个可以自定义遍历规则的对象（带next方法的对象）

    ```js
        function show(){
            return 100
        }
        show(); // undefined -> 100
        new show(); // object -> object

        async function show(){
            return 100
        }
        show(); // promise(fulfilled,undefined) -> promise(fulfilled,100)

        // 生成器函数Generator：返回一个迭代器Iterator
        function * show(){

        }
        show();// 迭代器Iterator
    ```

* 属性分类
    * 存储器属性: getter&setter
        > 本身没有值的属性，一般用于代理或监听别的属性
    * 值属性
        > 拥有值的属性
* 属性特性
    * 值属性
        * configurable  可配置型
        * enumberable   可以枚举行
        * writable      可写性
        * value         值
    * 存储器属性
        * configurable
        * enumberable
        * get
        * set

    ```js
        var obj = {
            // 值属性
            username:'laoxie',
            _age:18,

            // 存储器属性
            get age(){
                return this._age;
            }
            set age(newValue){
                this._age = newValue
            }
        }

    ```

* redux-saga
    * 使用步骤
        1. 安装引入
            ```js
                import createSagaMiddleware from 'redux-saga';
            ```
        2. 创建saga中间件
            ```js
                const sagaMiddleware = createSagaMiddleware();
            ```
        3. 包装中间件
            ```js
                let enhancer = applyMiddleware(sagaMiddleware)
            ```
        4. 将中间件 连接至 Store
            ```js
                const store = createStore(reducer,enhancer);
            ```
        5. 引入并运行自定义Saga配置
            ```js
                sagaMiddleware.run(rootSaga);
            ```
* 调用工具
    * redux devTools
        * 安装
        * 使用`redux-devtools-extension`中间件
    * react developer tools

* 项目要求

* git
    * 备注：vim
    * 提交：git commit
    * 推送: git push
    * 拉取：git pull
        * git fetch
        * git merge
    * 冲突
        > 在团队开发中，冲突不可避免，但可以通过合理的分工与沟通较少冲突的可能
        * 不要一个人去解决冲突
        * 解决完冲突必须重新提交

* CRA(create-react-app)
    * 安装
        ```js
            npm i -g create-react-app
        ```
    * 创建项目
        ```js
            create-react-app myapp
        ```
    * 扩展webpack配置
        > cra把所有的Webpack配置封装到react-scripts模块中
        * 在react-scripts模块中找到webpack配置并修改（不推荐）
        * eject（不推荐，该操作不可逆）
            > 删除react-scripts工具，并暴露项目所有依赖与webpack配置
            ```js
                npm run eject
            ```
        * 利用第三方工具`react-app-rewired`扩展webpack配置
            1. 安装`react-app-rewired`
            2. 添加配置
                > 在项目根目录下添加`config-overrides.js`文件（commmonJS规范）
                ```js
                    const { injectBabelPlugin } = require('react-app-rewired');
                    const path = require('path')
                    module.exports = function override(config, env) {
                        // config: webpack配置
                        // env: 环境变量

                        // 添加别名
                        config.resolve.alias['@'] = path.join(__dirname,'./src/')

                        // 添加装饰器支持
                        config = injectBabelPlugin([
                            "@babel/plugin-proposal-decorators", 
                            { "legacy": true }
                        ], config);
                        
                        return config;
                    }
                ```
            3. 修改package.json中的npm script


## day7-7

### 知识点
* 项目优化

* 数据可视化
    > 以图形的方式统计数据的效果

    * 分类
        * 折线图
        * 饼状图
        * 柱状图
        * ...
    * 采用技术
        * canvas + js接口
        * svg
    * 框架
        * echarts
            > 默认采用canvas技术
        * highcharts
            > 默认采用svg技术

## day8-1