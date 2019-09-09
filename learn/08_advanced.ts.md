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


/**
 * 类型保护
*/

enum Type { Strong, Week }

class Java {
    helloJava() {
        console.log('Hello java')
    }
    java: any
}

class Javascript {
    helloJavascript() {
        console.log('Hello Javascript')
    }
    javascript: any
}

function isJava(lang: Java | Javascript): lang is Java {
    return (lang as Java).helloJava !== undefined
}

function getLanguage(type: Type, x?: string | number) {
    let lang = type === Type.Strong ? new Java() : new Javascript()
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
        lang.helloJava()
    } else {
        lang.helloJavascript()
    }

    return lang
}

getLanguage(Type.Strong)

// 交叉类型
interface DogInterface {
    run(): void
}

interface CatInterface {
    jump(): void
}
let pet: DogInterface & CatInterface = {
    run() { },
    jump() { }
}

class Dog1 implements DogInterface {
    run() { }
    eat() { }
}
class Cat implements CatInterface {
    jump() { }
    eat() { }
}

enum Master { Boy, Girl }
function getPet(master: Master) {
    let pet = master === Master.Boy ? new Dog1() : new Cat()
    pet.eat()

    return pet
}


// 两种类型的共有属性
interface Square {
    kind: 'square';
    size: number;
}
interface Rectangle {
    kind: 'rectangle'
    width: number;
    height: number;
}
interface Circle {
    kind: 'circle',
    r: number
}
type Shape = Square | Rectangle | Circle
function area(s: Shape) {
    switch (s.kind) {
        case "square":
            return s.size * s.size
        case "rectangle":
            return s.height * s.width
        case "circle":
            return Math.PI * s.r * s.r
        default: // 检验全部
            return ((e: never) => { throw new Error(e) })(s)
    }
}

console.log(area({ kind: 'circle', r: 1 }))


// 索引类型
let obj1 = {
    a: 1,
    b: 2,
    c: 3
}

function getValues<T, k extends keyof T>(obj: any, keys: string[]): T[k][] {
    return keys.map(key => obj[key])
}

console.log(obj1, [a, b]) // 1 2
console.log(obj, ['e', 'f'])

// keyof T
interface Obj {
    a: number;
    b: string;
}
let key: keyof Obj

// T[k]
let value: Obj['a']

// T extends U

interface Obj1 {
    a: string;
    b: number;
    c: boolean;
}


// readonly
type ReadonlyObj = Readonly<Obj1>
// partial
type PartialObj = Partial<Obj>
// pick
type PickObj = Pick<Obj1, 'a' | 'b'>
// Record
type RecordObj = Record<'x' | 'y', Obj1>


// 条件类型
// T extends U ? X : Y

type TypeName<T> =
    T extends string ? "string" :
    T extends number ? "number" :
    T extends boolean ? "boolean" :
    T extends undefined ? "undefined" :
    T extends Function ? "function" :
    "object";

type T1 = TypeName<string>
type T2 = TypeName<number>

// (A | B) extends U ? X : Y
// (A extends U ? X : Y) | ( B extends U ? X : Y)

type T3 = TypeName<string | string[]>

// 类型过滤
type Diff<T, U> = T extends U ? never : T
type T4 = Diff<"a" | "b" | "c", "a" | "e">
// Diff<"a" , "a"|"e"> | Diff<"b", "a" | "e"> | Diff<"c", "a" | "e">
// never | b | c
// b | c

type NotNull<T> = Diff<T, undefined | null>
type T5 = NotNull<string | number | undefined | null>

// Exclude<T, U>
// NotNullable<T>
// Extract<T, U>
type T6 = Extract<"a" | "b" | "c", "a" | "e">

// ReturnType<T>
type T7 = ReturnType<() => string>