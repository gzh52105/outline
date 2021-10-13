/**
 * 函数类型注解
    * 参数
    * 返回值

    * 可选参数：?
    * 参数默认值：与js一致（可选参数与默认参数不能一起使用）
    * 剩余参数：与js一致
 */

let baseUrl = 'http://baidu.com';

// 声明式函数
function request(url:string,async:boolean){
    
}

// 赋值式函数
const ajax:(url:string,type:string)=>void = function(url:string,type:string):void{

}

request('/goods',true);
request('/goods',false);
ajax('/user','get')

// 可选参数
function fn1(a:number,b?:number){

}
fn1(10);
fn1(10,20)

// 参数默认值
function fn2(a:number,b:number=1){

}
fn2(10)
fn2(10,20)

// 剩余参数
function getUser(id:string,...res:string[]){
    // res: ['aa','bb']
}

getUser('10','aa','bb')

// 函数重载
function add(a: string, b: string): string
function add(a: number, b: number): number
function add(a: any, b: any): any {
    return a+b;
}

add(10,20);
add('hello','world');
// add(true);