// 定义函数入参出参
var addFunc;
var add1 = function (a, b) { return a + b; };
function getLib() {
    var lib = (function () { });
    lib.version = '1.0';
    lib.doSomething = function () { };
    return lib;
}
var lib1 = getLib();
lib1.version;
var lib2 = getLib();
lib2.version;
// 函数定义
function add_A(x, y) {
    return x + y;
}
var add_B;
add_B = function (a, b) { return 1; };
// 可选参数在必选参数之后
function add_E(x, y) {
    return y ? x + y : x;
}
function add_F(x, y, z, q) {
    if (y === void 0) { y = 0; }
    if (q === void 0) { q = 1; }
    return x + y + z + q;
}
function add_G(x) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    return x + rest.reduce(function (pre, cur) { return pre + cur; });
}
function add_H() {
    var rest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rest[_i] = arguments[_i];
    }
    var first = rest[0];
    if (typeof first === 'string') {
        return rest.join('');
    }
    if (typeof first === 'number') {
        return rest.reduce(function (pre, cur) { return pre + cur; });
    }
}
add_H(1, 2);
add_H('a', 'b');
