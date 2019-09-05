let a = 1
let b = [1, null]

let c = (x = 1) => x + 1

window.onkeydown = (event) => {
    // console.log(event.button)
}

interface Foo {
    bar: number
}
// as 类型断言
// let foo = {} as Foo
let foo: Foo = {
    bar: 1
}
// foo.bar = 1


// ****************类型兼容**************** //
let s: string = 'a'

interface X {
    a: any;
    b: any;
}

interface YY {
    a: any;
    b: any;
    c: any;
}

let x1: X = { a: 1, b: 2 }
let y1: YY = { a: 1, b: 2, c: 3 }

x1 = y1

// y1 =x1;

// 函数兼容性
type Handler = (a: number, b: number) => void
function hof(handler: Handler) {
    return handler;
}

// 1）参数个数
let handler1 = (a: number) => { }
hof(handler1);
let handler2 = (a: number, b: number, c: number) => { }
// hof(handler2)

// 可选参数和剩余参数
let h1 = (p1: number, p2: number) => { }
let h2 = (p1?: number, p2?: number) => { }
let h3 = (...args: number[]) => { }

// h1 = h2 y
// h1= h3 y
// h2 = h3 no
// h2 = h1 no

// 2）参数类型
let handler3 = (a: string) => { }
// hof(handler3) no


interface Point3D {
    x: number;
    y: number;
    z: number;
}

interface Point2D {
    x: number;
    y: number;
}

let p3d = (point: Point3D) => { };
let p2d = (point: Point2D) => { };

// p2d =p3d no
// p3d = p2d yes

//3）返回值类型
let f1 = () => ({ name: 'Alice' })
let g3 = () => ({ name: 'Alice', location: 'Beijing' })

// f1=g3 yes
// g3 =f1 no

// 函数重载
function overload(a: number, b: number): number;
function overload(a: string, b: string): string;
function overload(a: any, b: any): any {

}

// 枚举兼容性
enum Fruit { Apple, Banana }
enum Color { Red, Yellow }
let fruit: Fruit.Apple = 3
let no: number = Fruit.Apple
// let color: Color = Fruit.Apple no


// 类兼容性
// 静态成员和构造函数不参与比较
class A {
    constructor(p: number, q: number) { }
    id: number = 1
    private name: string = ''
}
class B {
    static s = 1
    constructor(p: number) { }
    id: number = 2
}
let aa = new A(1, 2)
let bb = new B(1)

// aa = bb no
bb = aa

// 范型兼容性
interface Empty<T> {
    value: T
}
// let obj1: Empty<number> = {}
// let obj2: Empty<string> = {}
// obj1 = obj2

// 范型函数兼容性
let logT1 = <T>(x: T): T => {
    console.log('x');
    return x
}

let logT2 = <U>(y: U): U => {
    console.log('y')
    return y
}

logT1 = logT2