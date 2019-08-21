// 定义函数入参出参
let addFunc: (x: number, y: number) => number

// interface Add {
//     (x: number, y: number): number
// }

type Add = (x: number, y: number) => number

let add1: Add = (a, b) => a + b


// 混合接口
interface Lib {
    (): void;
    version: string;
    doSomething(): void;
}


function getLib() {
    let lib: Lib = (() => { }) as Lib
    lib.version = '1.0';
    lib.doSomething = () => { }

    return lib;
}

let lib1 = getLib();
lib1.version
let lib2 = getLib();
lib2.version


// 函数定义
function add_A(x: number, y: number) {
    return x + y
}

let add_B: (x: number, y: number) => number

type add_C = (x: number, y: number) => number

interface add_D {
    (x: number, y: number): number
}
add_B = (a, b) => { return 1 }

// 可选参数在必选参数之后
function add_E(x: number, y?: number) {
    return y ? x + y : x;
}

function add_F(x: number, y = 0, z: number, q = 1) {
    return x + y + z + q
}

function add_G(x: number, ...rest: number[]) {
    return x + rest.reduce((pre, cur) => pre + cur)
}

// 函数重载
function add_H(...rest: number[]): number
function add_H(...rest: string[]): string
function add_H(...rest: any[]): any {
    let first = rest[0];
    if (typeof first === 'string') {
        return rest.join('')
    }

    if (typeof first === 'number') {
        return rest.reduce((pre, cur) => pre + cur)
    }
}

add_H(1, 2);
add_H('a', 'b');