// 数字枚举
var Role;
(function (Role) {
    Role[Role["Reporter"] = 1] = "Reporter";
    Role[Role["Developer"] = 2] = "Developer";
    Role[Role["Maintainer"] = 3] = "Maintainer";
    Role[Role["Owner"] = 4] = "Owner";
    Role[Role["Guest"] = 5] = "Guest";
})(Role || (Role = {}));
// 字符串枚举
var Message;
(function (Message) {
    Message["Success"] = "\u606D\u559C\u4F60\uFF0C\u6210\u529F\u4E86";
    Message["Fail"] = "\u62B1\u6B49\uFF0C\u5931\u8D25\u4E86";
})(Message || (Message = {}));
// 异构枚举
var Answer;
(function (Answer) {
    Answer[Answer["N"] = 0] = "N";
    Answer["Y"] = "Yes";
})(Answer || (Answer = {}));
// 枚举成员
var Char;
(function (Char) {
    // const
    Char[Char["a"] = 0] = "a";
    Char[Char["b"] = 0] = "b";
    Char[Char["c"] = 4] = "c";
    // computed
    Char[Char["d"] = Math.random()] = "d";
    Char[Char["e"] = '123'.length] = "e";
    Char[Char["f"] = 4] = "f";
})(Char || (Char = {}));
var month = [0 /* Jan */, 1 /* Feb */, 2 /* Mar */];
// 枚举类型
var E;
(function (E) {
    E[E["a"] = 0] = "a";
    E[E["b"] = 1] = "b";
})(E || (E = {}));
var F;
(function (F) {
    F[F["a"] = 0] = "a";
    F[F["b"] = 1] = "b";
})(F || (F = {}));
var G;
(function (G) {
    G["a"] = "apple";
    G["b"] = "banana";
})(G || (G = {}));
var e = 3;
var f = 3;
var e1 = 1;
var e2;
var e3 = 1;
e1 === e3;
var g1 = G.a;
var g2 = G.a;
