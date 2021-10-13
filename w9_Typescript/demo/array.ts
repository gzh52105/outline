/**
 * 数组类型注解
    * 类型[]
    * 泛型
    
 * 元组Tuple
    类似于数组，是一个明确元素数量和类型的数组，各元素的类型不必相同，一般用于函数返回值
 */

const arr1:number[] = [10,20,30];
const arr2:Array<number> = [10,20,30];

// 元组
const user:[string,number,boolean] = ['laoxie',18,true]

// 复杂数组
type priceType = number|string
interface IGoods{
    id:number
    name:string
    price:priceType
    sales_price?:priceType
}
// const goodslist:IGoods[] = [
const goodslist:Array<IGoods> = [
    {
        id:1,
        name:'goods1',
        price:100
    },
    {
        id:2,
        name:'goods2',
        price:200,
        sales_price:160
    },
    {
        id:3,
        name:'goods3',
        price:300
    }
]
