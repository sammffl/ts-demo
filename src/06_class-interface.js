var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Asian = /** @class */ (function () {
    function Asian(name) {
        this.name = name;
    }
    Asian.prototype.eat = function () { };
    return Asian;
}());
var boy = {
    name: '',
    run: function () { },
    eat: function () { },
    cry: function () { }
};
var Auto = /** @class */ (function () {
    function Auto() {
        this.state = 1;
        // private state2 = 0
    }
    return Auto;
}());
var C = /** @class */ (function () {
    function C() {
        this.state = 12;
    }
    return C;
}());
var Bus = /** @class */ (function (_super) {
    __extends(Bus, _super);
    function Bus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Bus;
}(Auto));
