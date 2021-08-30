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