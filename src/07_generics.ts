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