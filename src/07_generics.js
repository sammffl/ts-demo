function log(value) {
    console.log(value);
    return value;
}
log(['a', 'b']);
log(['a', 'b']);
var myLog = log;
var myLog2 = log;
myLog2('2');
var Logger = /** @class */ (function () {
    function Logger() {
    }
    Logger.prototype.run = function (value) {
        console.log(value);
        return value;
    };
    return Logger;
}());
var logger1 = new Logger();
logger1.run(1);
var logger2 = new Logger();
logger2.run({ a: 1 });
logger2.run('{ a: 1 }');
function log3(value) {
    console.log(value, value.length);
    return value;
}
