function log<T>(value: T): T {
    console.log(value);
    return value;
}

log<string[]>(['a', 'b'])
log(['a', 'b'])

type Log = <T>(value: T) => T

let myLog: Log = log

interface Log2<T = string> {
    <T>(value: T): T
}

let myLog2: Log2 = log

myLog2('2')


class Logger<T>{
    run(value: T) {
        console.log(value);
        return value;
    }
}

let logger1 = new Logger<number>();
logger1.run(1);
let logger2 = new Logger();
logger2.run({ a: 1 })
logger2.run('{ a: 1 }');

interface Length {
    length: number
}
function log3<T extends Length>(value: T): T {
    console.log(value, value.length);
    return value
}
