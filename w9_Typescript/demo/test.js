/**
 * @类型系统
    * 变量类型
    * 类型检测
 */
// 基本类型
let price = 100;
let username = 'laoxie';
// 报错
// price = '200';
// 2. 特殊类型
let a = null;
let b = undefined;
// 使用any类型，相当前关闭ts的类型检查
// 声明变量不赋值，该变量为any类型
let c = 12342;
let d;
c = 'hello';
// 3. 联合类型
// index支持number与string
let index = 1;
index = '2';
let e = 10;
let idx = 10;
idx = '10';
// 5. 类型推论：ts根据数据推断变量类型
let age = 18;
// 6. 函数类型
function add(a, b) {
    // var a,b
    return a + b;
}
add(10, 20);
// add('hello','world')
// add('hello',20)
// add(10,20,30)
function showMsg(message) {
    console.log(message);
}
function fail() {
    // never一般能用于以下场景
    // 1. 抛出错误
    // 2. 死循环
    throw new Error('请求失败');
    // while(true){
    // }
    console.log('end');
}
const getData = function (url, type) {
};
// 7. 字面量类型
let myAge = 18; // 等效于const myAge=18
// myAge = 19;
// 8. 断言
let arr = [10, 20, 30];
let num = arr.find(item => item > 10); //20,undefined
let res = num + 10;
