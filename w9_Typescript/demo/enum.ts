/**
 * 枚举类型
 */

// 数字枚举（不指定值）
// 成员的值从0开始自动递增（也可以手动设置）
enum Status {
    Error=100, // 0,100
    Success, // 1,101
    warning // 2,102
}

// 字符串枚举
// 不能自动递增，必须为每个成员赋值
enum Gender {
    Male = '男',
    Female = '女',
    Unno = '未知'
}

// 获取
Gender.Female;// 女

enum Code {
    Fail=400,
    Success=200,
    warning=300,
    Error=500
}

Code.Fail; // 400
Code[400]; // 'Fail'

const data = {
    code:Code.Success,
    data:[],
    msg:'success'
}