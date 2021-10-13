/**
 * 枚举类型
 */
// 数字枚举（不指定值）
// 成员的值从0开始自动递增（也可以手动设置）
var Status;
(function (Status) {
    Status[Status["Error"] = 100] = "Error";
    Status[Status["Success"] = 101] = "Success";
    Status[Status["warning"] = 102] = "warning"; // 2,102
})(Status || (Status = {}));
// 字符串枚举
// 不能自动递增，必须为每个成员赋值
var Gender;
(function (Gender) {
    Gender["Male"] = "\u7537";
    Gender["Female"] = "\u5973";
    Gender["Unno"] = "\u672A\u77E5";
})(Gender || (Gender = {}));
// 获取
Gender.Female; // 女
Gender['男']; // Female
var Code;
(function (Code) {
    Code[Code["Fail"] = 400] = "Fail";
    Code[Code["Success"] = 200] = "Success";
    Code[Code["warning"] = 300] = "warning";
    Code[Code["Error"] = 500] = "Error";
})(Code || (Code = {}));
var data = {
    code: Code.Success,
    data: [],
    msg: 'success'
};
