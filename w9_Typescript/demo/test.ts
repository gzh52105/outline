/**
 * @类型系统
    * 变量类型
    * 类型检测
 */

// 基本类型
let price:number = 100;
let username:string = 'laoxie';


// 报错
// price = '200';

// 2. 特殊类型
let a:null = null;
let b:undefined = undefined;


// 使用any类型，相当前关闭ts的类型检查
// 声明变量不赋值，该变量为any类型
let c:any = 12342;
let d;
c = 'hello'

// 3. 联合类型
// index支持number与string
let index:number|string = 1;
index = '2'
let e:number|string = 10;

// 4. 类型别名：简化类型名称
type ns = number | string;
let idx:ns = 10;
idx = '10'

// 5. 类型推论：ts根据数据推断变量类型
let age = 18;

// 6. 函数类型
function add(a:number,b:number):number{
    // var a,b
    return a + b
}

add(10,20)
// add('hello','world')
// add('hello',20)
// add(10,20,30)

function showMsg(message:string):void{
    console.log(message);
    
}

function fail():never{
    // never一般能用于以下场景
    // 1. 抛出错误
    // 2. 死循环
    throw new Error('请求失败')
    // while(true){

    // }
    console.log('end')
}

const getData = function(url:string,type:string):void{

}

// 7. 字面量类型
let myAge:18 = 18; // 等效于const myAge=18
// myAge = 19;