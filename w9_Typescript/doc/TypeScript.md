# TypeScript教程

## 前言
> javascript是一门脚本语言（直接运行，无编译阶段）, 在运行时才知道变量类型
* 类型系统
    * 从类型安全角度：强类型与弱类型
        > 是否能进行隐式类型转换
    * 从类型检查角度：静态类型与动态类型
        > 是否允许修改变量类型
    > PS：javascript是一门弱类型且动态类型语言

## 介绍
TypeScript由微软开发的自由和开源的编程语言，设计目标是开发大型应用，是js的扩展，在js的基础上增加了**类型系统**及**ES6+**

> 官网：https://www.tslang.cn

### 特点
* 静态类型：解决了开发者不小心修改了字段类型/字段个数，而导致项目出现问题的痛点
* 支持ECMAScript所有特性：始于JavaScript，归于JavaScript
* 丰富的配置选项：通过配置选项来规避一些隐藏问题和安全隐患
* 强大的工具支持：解决了IDE/编辑器无法智能提示的痛点

## 浏览器支持情况
浏览器不支持TS,需要通过编译成JS后才能在浏览器中运行



## 环境安装
> ts基于NodeJS，所以先确认安装了node环境，然后通过npm安装 typescript

### 全局安装
> 全局安装后可在命令行直接编译typescript

```bash
    npm install -g typescript

    # 安装后通过tsc命令执行
    tsc -v

    # 编译：在当前目录下生成helloword.js文件
    tsc helloworld.ts
```

### 项目安装
> 配合webpack等工具实现编译

```bash
    npm install typescript
```

## 使用

### 类型注解和类型检查
> 一种轻量级的为函数或变量添加约束的方式（把js中的变量动态类型变成静态类型），格式：`var 变量名:类型 = 值`
    
* 基本类型
    ```ts
        let username:string = 'laoxie';
        let age:number = 18;
        let isLogin:boolean = true

        // username = 123456; //在编译时报错，因为username已经确定为string字符串类型
    ```
* 特殊类型
    * any：任意类型，所有值可赋值给any变量（相当前关闭ts的类型检查）
        > 变量如果在声明的时候，未指定其类型，那么它会被自动识别为any类型
    * unknown
        > 类似于any，所有值可赋值给unknown变量，但反过来不行
    * void: 空值，表示没有任何类型，一般用于函数返回值 
        > 当一个函数没有返回值时，可以设置为 void
    * never: 永不存在的值的类型，一般用于函数返回值 
        > 一般用于抛出异常或出现死循环时的函数z
    * null
    * undefined
    * 字面量：等效于常量
        > 固定值做为变量类型

* 联合类型
    > 表示取值可以为多种类型中的一种
    ```ts
        let age:number|string = 18;
        let age:number|string = '18';
    ```
* 类型别名
    > 使用`type`关键字给类型指定一个新的名字
    ```ts
        type ageType = number|string
        let age:ageType = 18;
    ```
* 类型推论
    > 根据赋值的数据自动推断变量类型
    * 未赋值：推论为any类型（不对类型进行检查）
    * 赋值：推论为值所属类型

* 函数类型
    * 声明式函数
        > 需要指定参数类型与返回值类型
        ```ts
            function getData(url:string,page:number):number{
                // ajax请求
                return page;
            }
            getData('/list');//报错,缺少参数
            getData('/list',1,'get')// 报错，多余参数
        ```
    * 表达式函数
        > 函数表达式除了指定变量的类型，也需要指定函数的类型
        ```ts
            let getData:(url:string,page:number)=>void = function(url:string,page:number):void{
                // ajax请求
            }

            // 使用接口指定类型
            interface IgetData{
                (url:string,page:number):void
            }
            let getData:IgetData = function(url:string,page:number):void{
                // ajax请求
            }
        ```

    * 可选参数
        > 可选参数必须作为最后一个形参
        ```ts
            function getData(url:string,page?:number):void{
                // ajax请求
            }
        ```
    * 默认参数
        > 默认参数与可选参数不能同时设置
        ```ts
            function getData(url:string,page:number=1,type:string='get'):void{
                // ajax请求
            }
        ```
    * 剩余参数
        ```js
            function getData(...rest:string[]):void{
                // ajax请求
            }

        ```


* 数组类型
    * 类型+[]
    * 泛型
    * 接口
    ```ts
        let arr:number[] = [10,20,30]
        let arr:Array<string> = ['laoxie','lemon','jingjing']

        interface IGoods{
            name:string,
            price:number
        }
        interface IGoodslist{
            [index:number]:IGoods
        }
        let arr:IGoods[] = [{name:'iphone',price:998}]
        let arr:Array<IGoods> = [{name:'iphone',price:998}]
        let arr:IGoodslist = [{name:'iphone',price:998}]
    ```

* 元组Tuple
    > 类似于数组，是一个明确元素数量和类型的数组，各元素的类型不必相同，一般用于函数返回值

    ```ts
        let arr:[number,number,string] = [10,20,'h5']
    ```

* 枚举类型enum
    > 支持数字（默认）的和字符串的枚举

    ```ts
        // 数字枚举成员的值从0开始自动递增（也可以手动设置）
        enum Status {
            Error,
            Success,
            warning
        }

        // 字符串枚举不能自动递增，必须为每个成员赋值
        enum Gender {
            Male = '男',
            Female = '女',
            Unno = '未知'
        }
    ```
* 接口Interface
    > 接口用于描述对象的形状（确定对象的属性结构）
    * `?`: 可选属性
    * `readonly`: 只读属性
    * `any`: 任意属性
    ```ts
        interface Person {
            name: string;

            // 可选属性
            age?:number;

            // 只读属性（只能在创建的时候被赋值）
            readonly marry:boolean

            // 任意属性（一般不用）
            [propName: string]: any;

            // 方法定义
            say():void;
            getInfo:()=>string
        }

        let user:Person = { name: "laoxie",marry:true};
    ```



* 类型断言：
    > 当ts解析器不确定某个变量类型时，我们可以`as`告诉解析器它的类型
    * 尖括号语法：`<类型>变量`
    * as语法：`变量 as 类型`
    ```js
        let arr:number[] = [10,20,30]
        let num = arr.find(item=>item>10);
        
        // 因为number可能得到number或undefined，所以会报：Object is possibly 'undefined' 的错误
        let res = num + 1; 

        // 可以用断言写法解决
        let res = num as number +1
        let res = <number>num +1
    ```

* 泛型编程
    > 在定义函数、接口或类时不明确类型，可以使用泛型，可以让编写的代码更加灵活。泛型即**定义时不指定具体类型**，而是使用类型变量，**调用时才指定类型**的编程方式，格式：`Array<元素类型>`

    ```ts
        function createArray<T>(item: T, len: number): T[] {
            return Array(len).fill(item)
        }
        let arr1 = createArray(100,3); // T会自动推断为number
        let arr22 = createArray<string>("myString",5); // 指定定泛型

        class Person<T>{
            name:T;
            constructor(name:T){
                this.name = name
            }
        }
        const p = new Person<string>('laoxie')
    ```
* 函数重载
    ```ts
        function add(a: number, b: number): number;
        function add(a: string, b: string): string;
        function add(a: any, b: any): any {
            return a + b;
        }
        add(10, 20);
        add('10', '20');
        // add('10',20); // 报错
    ```



* 类
    * 定义`class`
        > 与ES6一致
    * 继承`extends`
        > 与ES6一致
    * 修饰符
        * `public`：公有属性，可以在任何地方被访问到
            >默认所有的属性和方法都是 public 的
        * `private`：私有属性，只能在当前类内部访问
        * `protected`：受保护的属性，它和 private 类似，区别是它在子类中也是允许被访问的
        * `readonly`：只读属性关键字，只允许属性声明（与其他修饰符一起使用时必须写在最后）
        * `static`: 静态属性，只能通过类属性
    * 属性类型检查
        > 与接口一致
```ts
    class Student {
        // 实例属性
        fullName: string;
        // 静态属性
        static age = 18;

        // public firstName
        // 在构造函数参数中使用修饰符，等效于以上写法
        constructor(public firstName, public middleInitial, public lastName) {
            this.fullName = firstName + " " + middleInitial + " " + lastName;
        }
    }

    interface Person {
        firstName: string;
        lastName: string;
    }

    function greeter(person : Person) {
        return "Hello, " + person.firstName + " " + person.lastName;
    }

    let user = new Student("Jane", "M.", "User");

    document.body.innerHTML = greeter(user);
```

* 命名空间namespce（了解）
    > namespce目的就是解决重名问题，可以利用同一个命名空间把代码分散到不同的文件
    
    ```ts
        namespace Validation {
            export interface StringValidator {
                isAcceptable(s: string): boolean;
            }
        }

        // 使用步骤：
        // 1. 引用文件（三个斜杠）
        /// <reference path="Validation.ts"/>

        // 2. 通过点语法调用
        Validation.StringValidator;
    ```
    > PS：以上命名空间最终会被声明为全局对象，所以在typescript中已经不推荐使用（后续版本会被移除），建议使用Module来组织代码结构

    ```js
        // module/validate.js
        export namespace Validation {
            export interface StringValidator {
                isAcceptable(s: string): boolean;
            }
        }

        // 使用步骤：
        // 1. 引入
        import {Validation} from './module/validate.js'
        // 2. 通过点语法调用
        Validation.StringValidator;
    ```

* 模块
    * CommonJS（默认）
    * ES Module
    > 与ES Module一致

## 编译typescript

### 命令行编译
* 命令格式：`tsc <文件> <参数>`
    * 编译文件：`tsc 文件.ts`
    * 监听文件：`tsc 文件.ts -w`
* 参数：
    * --help 显示帮助信息
    * --module 载入扩展模块
    * --target 设置 ECMA 版本
    * --declaration 额外生成一个 .d.ts 扩展名的文件。
        ```bash
            # 以下命令会生成 test.d.ts、test.js 两个文件
            tsc test.ts --declaration
        ```
    * --removeComments 删除文件的注释
    * --outFile 编译多个文件并合并到一个输出的文件
    * --outDir 编译js文件到指定目录（默认为ts文件所有目录）
    * --sourcemap 生成一个 sourcemap (.map) 文件。
        >sourcemap 是一个存储源代码与编译代码对应位置映射的信息文件。
    * --noImplicitAny 在表达式和声明上有隐含的 any 类型时报错
    * --watch 在监视模式下运行编译器。会监视输出文件，在它们改变时重新编译。

### 编译工具编译

* webpack加载器:`ts-loader`
    > 依赖`typescript`与 `tsconfig.json`配置
    ```js
        {
            //...
            module: {
                rules: [
                    { test: /\.tsx?$/, loader: "ts-loader" }
                ]
            }
        }
    ```

### 在线编译
https://www.typescriptlang.org/play/

## tsconfig.json配置参考
> 通过 `tsc --init` 生成，配置文件只有编译项目时才生效，tsc编译具体文件不会生效

* files - 编译的文件的名称
* include - 设置需要进行编译的文件
* exclude - 设置排除编译的文件
* compilerOptions - 编译选项
    ```js
    "compilerOptions": {

        /* 基本选项 */
        "target": "es5",                       // 指定编译 ECMAScript 目标版本: ES3 (默认), ES5, ES6/ES2015, ES2016, ES2017, ESNEXT
        "module": "commonjs",                  // 指定使用模块的规范: commonjs, amd, system, umd or es2015
        "lib": [],                             // 指定要包含在编译中的库文件
        "allowJs": true,                       // 是否允许编译 js 文件
        "checkJs": true,                       // 是否检查 js 文件中的错误
        "jsx": "preserve",                     // 指定 jsx 代码的生成: 'preserve', 'react-native', or 'react'
        "declaration": true,                   // 是否生成相应的 '.d.ts' 文件
        "sourceMap": true,                     // 是否生成相应的 '.map' 文件
        "outFile": "./",                       // 将输出文件合并为一个文件
        "outDir": "./",                        // 指定输出目录
        "rootDir": "./",                       // 用来控制输出目录结构 --outDir.
        "removeComments": true,                // 是否删除编译后的注释
        "noEmit": true,                        // 不生成输出文件
        "importHelpers": true,                 // 从 tslib 导入辅助工具函数
        "isolatedModules": true,               // 将每个文件做为单独的模块 （与 'ts.transpileModule' 类似）.

        /* 严格的类型检查选项 */
        "strict": true,                        // 启用所有严格类型检查选项
        "noImplicitAny": true,                 // 在表达式和声明上有隐含的 any类型时报错
        "strictNullChecks": true,              // 启用严格的 null 检查
        "noImplicitThis": true,                // 当 this 表达式值为 any 类型的时候，生成一个错误
        "alwaysStrict": true,                  // 以严格模式检查每个模块，并在每个文件里加入 'use strict'

        /* 额外的检查 */
        "noUnusedLocals": true,                // 有未使用的变量时，抛出错误
        "noUnusedParameters": true,            // 有未使用的参数时，抛出错误
        "noImplicitReturns": true,             // 并不是所有函数里的代码都有返回值时，抛出错误
        "noFallthroughCasesInSwitch": true,    // 报告 switch 语句的 fallthrough 错误。（即，不允许 switch 的 case 语句贯穿）

        /* 模块解析选项 */
        "moduleResolution": "node",            // 选择模块解析策略： 'node' (Node.js) or 'classic' (TypeScript pre-1.6)
        "baseUrl": "./",                       // 用于解析非相对模块名称的基目录
        "paths": {},                           // 模块名到基于 baseUrl 的路径映射的列表
        "rootDirs": [],                        // 根文件夹列表，其组合内容表示项目运行时的结构内容
        "typeRoots": [],                       // 包含类型声明的文件列表
        "types": [],                           // 需要包含的类型声明文件名列表
        "allowSyntheticDefaultImports": true,  // 允许从没有设置默认导出的模块中默认导入。

        /* 其他选项 */
        "sourceRoot": "./",                    // 指定调试器应该找到 TypeScript 文件而不是源文件的位置
        "mapRoot": "./",                       // 指定调试器应该找到映射文件而不是生成文件的位置
        "inlineSourceMap": true,               // 生成单个 soucemaps 文件，而不是将 sourcemaps 生成不同的文件
        "inlineSources": true,                 // 将代码与 sourcemaps 生成到一个文件中，要求同时设置了 --inlineSourceMap 或 --sourceMap 属性

        "experimentalDecorators": true,        // 启用装饰器
        "emitDecoratorMetadata": true          // 为装饰器提供元数据的支持
    }
    ```