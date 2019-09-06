declare let s12: string;
declare let bool: boolean;
declare let num: number | undefined | null;
declare let str: string;
declare let arr1: number[];
declare let arr2: Array<number>;
declare let tuple: [number, string];
declare let add: (x: number, y: number) => number;
declare let compute: (x: number, y: number) => number;
declare let obj: {
    x: number;
    y: number;
};
declare let s1: symbol;
declare let s2: symbol;
declare let un: undefined;
declare let nu: null;
declare let noReturn: () => void;
declare let x: any;
declare let error: () => never;
declare let endless: () => never;
declare enum Role {
    Reporter = 1,
    Developer = 2,
    Maintainer = 3,
    Owner = 4,
    Guest = 5
}
declare enum Message {
    Success = "\u606D\u559C\u4F60\uFF0C\u6210\u529F\u4E86",
    Fail = "\u62B1\u6B49\uFF0C\u5931\u8D25\u4E86"
}
declare enum Answer {
    N = 0,
    Y = "Yes"
}
declare enum Char {
    a = 0,
    b = 0,
    c = 4,
    d,
    e,
    f = 4
}
declare const enum Month {
    Jan = 0,
    Feb = 1,
    Mar = 2
}
declare let month: Month[];
declare enum E {
    a = 0,
    b = 1
}
declare enum F {
    a = 0,
    b = 1
}
declare enum G {
    a = "apple",
    b = "banana"
}
declare let e: E;
declare let f: F;
declare let e1: E.a;
declare let e2: E.b;
declare let e3: E.a;
declare let g1: G;
declare let g2: G.a;
interface List {
    readonly id: number;
    name: string;
    age?: number;
    [x: string]: any;
}
interface Result {
    data: List[];
}
declare function render(result: Result): void;
declare let result: {
    data: ({
        id: number;
        name: string;
        sex?: undefined;
    } | {
        id: number;
        name: string;
        sex: string;
    })[];
};
interface StringArray {
    [index: number]: string;
}
declare let chars: StringArray;
interface Names {
    [key: string]: number | string;
    [z: number]: string;
    y: number;
    0: string;
}
declare let n: Names;
declare let addFunc: (x: number, y: number) => number;
declare type Add = (x: number, y: number) => number;
declare let add1: Add;
interface Lib {
    (): void;
    version: string;
    doSomething(): void;
}
declare function getLib(): Lib;
declare let lib1: Lib;
declare let lib2: Lib;
declare function add_A(x: number, y: number): number;
declare let add_B: (x: number, y: number) => number;
declare type add_C = (x: number, y: number) => number;
interface add_D {
    (x: number, y: number): number;
}
declare function add_E(x: number, y?: number): number;
declare function add_F(x: number, y: number, z: number, q?: number): number;
declare function add_G(x: number, ...rest: number[]): number;
declare function add_H(...rest: number[]): number;
declare function add_H(...rest: string[]): string;
declare abstract class Animal {
    eat(): void;
    abstract sleep(): void;
}
declare class Dog extends Animal {
    constructor(name: string);
    name: string;
    run(): void;
    sleep(): void;
    private pri;
    protected pro(): void;
    readonly legs: number;
    static food: string;
}
declare let dog: Dog;
declare class Husky extends Dog {
    color: string;
    constructor(name: string, color: string);
}
declare class WorkFlow {
    step1(): this;
    step2(): this;
}
declare class MyFlow extends WorkFlow {
    next(): this;
}
interface Human {
    name: string;
    eat(): void;
}
declare class Asian implements Human {
    constructor(name: string);
    name: string;
    eat(): void;
}
interface Man extends Human {
    run(): void;
}
interface Child {
    cry(): void;
}
interface Boy extends Man, Child {
}
declare let boy: Boy;
declare class Auto {
    state: number;
}
interface AutoInterface extends Auto {
}
declare class C implements AutoInterface {
    state: number;
}
declare class Bus extends Auto implements AutoInterface {
}
declare function log<T>(value: T): T;
declare type Log = <T>(value: T) => T;
declare let myLog: Log;
interface Log2<T = string> {
    <T>(value: T): T;
}
declare let myLog2: Log2;
declare class Logger<T> {
    run(value: T): T;
}
declare let logger1: Logger<number>;
declare let logger2: Logger<unknown>;
interface Length {
    length: number;
}
declare function log3<T extends Length>(value: T): T;
declare let a: number;
declare let b: number[];
declare let c: (x?: number) => number;
interface Foo {
    bar: number;
}
declare let foo: Foo;
declare let s: string;
interface X {
    a: any;
    b: any;
}
interface YY {
    a: any;
    b: any;
    c: any;
}
declare let x1: X;
declare let y1: YY;
declare type Handler = (a: number, b: number) => void;
declare function hof(handler: Handler): Handler;
declare let handler1: (a: number) => void;
declare let handler2: (a: number, b: number, c: number) => void;
declare let h1: (p1: number, p2: number) => void;
declare let h2: (p1?: number, p2?: number) => void;
declare let h3: (...args: number[]) => void;
declare let handler3: (a: string) => void;
interface Point3D {
    x: number;
    y: number;
    z: number;
}
interface Point2D {
    x: number;
    y: number;
}
declare let p3d: (point: Point3D) => void;
declare let p2d: (point: Point2D) => void;
declare let f1: () => {
    name: string;
};
declare let g3: () => {
    name: string;
    location: string;
};
declare function overload(a: number, b: number): number;
declare function overload(a: string, b: string): string;
declare enum Fruit {
    Apple = 0,
    Banana = 1
}
declare enum Color {
    Red = 0,
    Yellow = 1
}
declare let fruit: Fruit.Apple;
declare let no: number;
declare class A {
    constructor(p: number, q: number);
    id: number;
    private name;
}
declare class B {
    static s: number;
    constructor(p: number);
    id: number;
}
declare let aa: A;
declare let bb: B;
interface Empty<T> {
    value: T;
}
declare let logT1: <T>(x: T) => T;
declare let logT2: <U>(y: U) => U;
/**
 * 类型保护
*/
declare enum Type {
    Strong = 0,
    Week = 1
}
declare class Java {
    helloJava(): void;
    java: any;
}
declare class Javascript {
    helloJavascript(): void;
    javascript: any;
}
declare function isJava(lang: Java | Javascript): lang is Java;
declare function getLanguage(type: Type, x?: string | number): Java | Javascript;
interface DogInterface {
    run(): void;
}
interface CatInterface {
    jump(): void;
}
declare let pet: DogInterface & CatInterface;
declare class Dog1 implements DogInterface {
    run(): void;
    eat(): void;
}
declare class Cat implements CatInterface {
    jump(): void;
    eat(): void;
}
declare enum Master {
    Boy = 0,
    Girl = 1
}
declare function getPet(master: Master): Dog1 | Cat;
interface Square {
    kind: 'square';
    size: number;
}
interface Rectangle {
    kind: 'rectangle';
    width: number;
    height: number;
}
interface Circle {
    kind: 'circle';
    r: number;
}
declare type Shape = Square | Rectangle | Circle;
declare function area(s: Shape): number;
declare let obj1: {
    a: number;
    b: number;
    c: number;
};
declare function getValues<T, k extends keyof T>(obj: any, keys: string[]): T[k][];
interface Obj {
    a: number;
    b: string;
}
declare let key: keyof Obj;
declare let value: Obj['a'];
interface Obj1 {
    a: string;
    b: number;
    c: boolean;
}
declare type ReadonlyObj = Readonly<Obj1>;
declare type PartialObj = Partial<Obj>;
declare type PickObj = Pick<Obj1, 'a' | 'b'>;
declare type RecordObj = Record<'x' | 'y', Obj1>;
declare type TypeName<T> = T extends string ? "string" : T extends number ? "number" : T extends boolean ? "boolean" : T extends undefined ? "undefined" : T extends Function ? "function" : "object";
declare type T1 = TypeName<string>;
declare type T2 = TypeName<number>;
declare type T3 = TypeName<string | string[]>;
declare type Diff<T, U> = T extends U ? never : T;
declare type T4 = Diff<"a" | "b" | "c", "a" | "e">;
declare type NotNull<T> = Diff<T, undefined | null>;
declare type T5 = NotNull<string | number | undefined | null>;
declare type T6 = Extract<"a" | "b" | "c", "a" | "e">;
declare type T7 = ReturnType<() => string>;
interface AA {
    x: number;
    y: number;
    foo(bar: number): number;
    foo(bar: 'a'): number;
}
interface AA {
    y: number;
    foo(bar: number): string;
    foo(bar: number[]): number[];
    foo(bar: 'b'): number;
}
declare let aaa: AA;
declare function Lib(): void;
declare namespace Lib {
    let version: string;
}
declare class CC {
}
declare namespace CC {
    let state: number;
}
declare enum Color1 {
    Red = 0,
    Yellow = 1,
    Blue = 2
}
declare namespace Color1 {
    function mix(): void;
}
declare module "src/es6/b" {
    export const str = "Hello";
}
declare module "src/es6/a" {
    export let a: number;
    let b: number;
    let c: number;
    export { b, c };
    export interface P {
        x: number;
        y: number;
    }
    export function f(): void;
    function g(): void;
    export { g as G };
    export default function (): void;
    export { str as hello } from "src/es6/b";
}
declare module "src/es6/c" { }
declare module "src/index" {
    import "src/es6/c";
}
