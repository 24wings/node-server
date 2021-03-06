export class FunctionParser {
    getFunctionParams(func: Function): string[] {
        // 先用正则匹配,取得符合参数模式的字符串.
        // 第一个分组是这个: ([^)]*) 非右括号的任意字符
        var args = func.toString().match(/\(([^)]*)\)/)[1];
        // 用逗号来分隔参数(arguments string).
        return args.split(",").map(function (arg) {
            // 去除注释(inline comments)以及空格
            return arg.replace(/\/\*.*\*\//, "").trim();
        }).filter(function (arg) {
            // 确保没有 undefined.
            return arg;
        });
    }


}