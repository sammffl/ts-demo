// 原始类型
var bool = true;
var num = 123;
var str = 'abc';
// 数组
var arr1 = [1, 2, 3];
var arr2 = [1, 2, 3];
// 元组
var tuple = [0, '1'];
// 函数
var add = function (x, y) { return x + y; };
var compute;
compute = function (a, b) { return a + b; };
// 对象
var obj = { x: 1, y: 2 };
obj.x = 3;
// symbol
var s1 = Symbol();
var s2 = Symbol();
console.log(s1 === s2);
// undefined, null
var un = undefined;
var nu = null;
num = null;
// void
var noReturn = function () { };
// any
var x;
// never
var error = function () {
    throw new Error('error');
};
var endless = function () {
    while (true) { }
};
