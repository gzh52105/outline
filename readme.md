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
        > 服务器发送信息给客户端
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