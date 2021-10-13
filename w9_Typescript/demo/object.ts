/**
 * 对象类型注解
    * 接口interfalce
        >接口用于描述对象的形状（确定对象的属性结构）
        * 可选属性：?
        * 只读属性：readonly
        * 方法
            * name:()=>void
            * name():void
        * 任意属性: [key:string]:any
 */

const user1:{
    name:string
    age:number
    role:string
} = {
    name:'laoxie',
    age:18,
    role:'admin'
}

// 接口
interface IUser{
    name:string
    role:string

    // 只读属性
    readonly age:number

    // 可选属性
    isDanshen?:boolean

    // 方法
    getUserInfo?:()=>string
    // getUserInfo():string

    // 任意属性
    [key:string]:any
}

const user2:IUser = {
    name:'tiantian',
    role:'vip',
    age:28,
    isDanshen:true
}
const user3:IUser = {
    name:'jingjing',
    age:36,
    role:'vip',
    getUserInfo(){
        return this.name;
    },
}

// 报错：age为只读属性
// user3.age = 18;
