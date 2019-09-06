var a = 1;
var b = [1, null];
var c = function (x) {
    if (x === void 0) { x = 1; }
    return x + 1;
};
window.onkeydown = function (event) {
    // console.log(event.button)
};
// as 类型断言
// let foo = {} as Foo
var foo = {
    bar: 1
};
// foo.bar = 1
// ****************类型兼容**************** //
var s = 'a';
var x1 = { a: 1, b: 2 };
var y1 = { a: 1, b: 2, c: 3 };
x1 = y1;
function hof(handler) {
    return handler;
}
// 1）参数个数
var handler1 = function (a) { };
hof(handler1);
var handler2 = function (a, b, c) { };
// hof(handler2)
// 可选参数和剩余参数
var h1 = function (p1, p2) { };
var h2 = function (p1, p2) { };
var h3 = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
};
// h1 = h2 y
// h1= h3 y
// h2 = h3 no
// h2 = h1 no
// 2）参数类型
var handler3 = function (a) { };
var p3d = function (point) { };
var p2d = function (point) { };
// p2d =p3d no
// p3d = p2d yes
//3）返回值类型
var f1 = function () { return ({ name: 'Alice' }); };
var g3 = function () { return ({ name: 'Alice', location: 'Beijing' }); };
function overload(a, b) {
}
// 枚举兼容性
var Fruit;
(function (Fruit) {
    Fruit[Fruit["Apple"] = 0] = "Apple";
    Fruit[Fruit["Banana"] = 1] = "Banana";
})(Fruit || (Fruit = {}));
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Yellow"] = 1] = "Yellow";
})(Color || (Color = {}));
var fruit = 3;
var no = Fruit.Apple;
// let color: Color = Fruit.Apple no
// 类兼容性
// 静态成员和构造函数不参与比较
var A = /** @class */ (function () {
    function A(p, q) {
        this.id = 1;
        this.name = '';
    }
    return A;
}());
var B = /** @class */ (function () {
    function B(p) {
        this.id = 2;
    }
    B.s = 1;
    return B;
}());
var aa = new A(1, 2);
var bb = new B(1);
// aa = bb no
bb = aa;
// let obj1: Empty<number> = {}
// let obj2: Empty<string> = {}
// obj1 = obj2
// 范型函数兼容性
var logT1 = function (x) {
    console.log('x');
    return x;
};
var logT2 = function (y) {
    console.log('y');
    return y;
};
logT1 = logT2;
/**
 * 类型保护
*/
var Type;
(function (Type) {
    Type[Type["Strong"] = 0] = "Strong";
    Type[Type["Week"] = 1] = "Week";
})(Type || (Type = {}));
var Java = /** @class */ (function () {
    function Java() {
    }
    Java.prototype.helloJava = function () {
        console.log('Hello java');
    };
    return Java;
}());
var Javascript = /** @class */ (function () {
    function Javascript() {
    }
    Javascript.prototype.helloJavascript = function () {
        console.log('Hello Javascript');
    };
    return Javascript;
}());
function isJava(lang) {
    return lang.helloJava !== undefined;
}
function getLanguage(type, x) {
    var lang = type === Type.Strong ? new Java() : new Javascript();
    // if ((lang as Java).helloJava) {
    //     (lang as Java).helloJava()
    // } else {
    //     (lang as Javascript).helloJavascript()
    // }
    // instanceof
    // if (lang instanceof Java) {
    //     lang.helloJava()
    // } else {
    //     lang.helloJavascript()
    // }
    // in 
    // if ('java' in lang) {
    //     lang.helloJava()
    // } else {
    //     lang.helloJavascript()
    // }
    // typeof 
    // if (typeof x === 'string') {
    // } else {
    // }
    if (isJava(lang)) {
        lang.helloJava();
    }
    else {
        lang.helloJavascript();
    }
    return lang;
}
getLanguage(Type.Strong);
var pet = {
    run: function () { },
    jump: function () { }
};
var Dog1 = /** @class */ (function () {
    function Dog1() {
    }
    Dog1.prototype.run = function () { };
    Dog1.prototype.eat = function () { };
    return Dog1;
}());
var Cat = /** @class */ (function () {
    function Cat() {
    }
    Cat.prototype.jump = function () { };
    Cat.prototype.eat = function () { };
    return Cat;
}());
var Master;
(function (Master) {
    Master[Master["Boy"] = 0] = "Boy";
    Master[Master["Girl"] = 1] = "Girl";
})(Master || (Master = {}));
function getPet(master) {
    var pet = master === Master.Boy ? new Dog1() : new Cat();
    pet.eat();
    return pet;
}
function area(s) {
    switch (s.kind) {
        case "square":
            return s.size * s.size;
        case "rectangle":
            return s.height * s.width;
        case "circle":
            return Math.PI * s.r * s.r;
        default: // 检验全部
            return (function (e) { throw new Error(e); })(s);
    }
}
console.log(area({ kind: 'circle', r: 1 }));
// 索引类型
var obj1 = {
    a: 1,
    b: 2,
    c: 3
};
function getValues(obj, keys) {
    return keys.map(function (key) { return obj[key]; });
}
console.log(obj1, [a, b]); // 1 2
console.log(obj, ['e', 'f']);
var key;
// T[k]
var value;
