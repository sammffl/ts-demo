var aaa = {
    x: 1,
    y: 2,
    foo: function (bar) {
        return bar;
    }
};
// 命名空间合并
// 不能重复定义
// 命名空间和函数、类合并，放在后面
function Lib() { }
(function (Lib) {
    Lib.version = '1.0';
})(Lib || (Lib = {}));
console.log(Lib.version);
var CC = /** @class */ (function () {
    function CC() {
    }
    return CC;
}());
(function (CC) {
    CC.state = 1;
})(CC || (CC = {}));
console.log(CC.state);
var Color1;
(function (Color1) {
    Color1[Color1["Red"] = 0] = "Red";
    Color1[Color1["Yellow"] = 1] = "Yellow";
    Color1[Color1["Blue"] = 2] = "Blue";
})(Color1 || (Color1 = {}));
(function (Color1) {
    function mix() { }
    Color1.mix = mix;
})(Color1 || (Color1 = {}));
console.log(Color);
