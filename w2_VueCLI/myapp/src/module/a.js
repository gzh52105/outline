
// export后只能跟function、class、var、let、const、default、{}

// 给模块对象添加username属性,值为laoxie
export let username = 'laoxie'

export function getInfo(){
    return username;
}

class Tools{

}

// 给模块添加default属性，值为getInfo
// export default getInfo;
 
// 批量给模块对象添加属性
const a = 10;
const b = 20;
export {
    a as all,
    b,
    Tools
}

// 给模块对象添加默认属性，值为一个对象
export default {
    a:100,
    b:200,
    Tools
}