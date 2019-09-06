"use strict";
exports.__esModule = true;
var a_1 = require("./a"); // 批量导入
var a_2 = require("./a"); // 导入时起别名
var All = require("./a"); // 导入模块中的所有成员，绑定在All上
var a_3 = require("./a"); // 不加{}，默认导入
console.log(a_1.a, a_1.b, a_1.c);
var p = {
    x: 1,
    y: 2
};
a_2.f();
console.log(All);
a_3["default"]();
