// 原始类型
let bool: boolean = true;
let num: number | undefined | null = 123;
let str: string = 'abc';

// 数组
let arr1: number[] = [1, 2, 3];
let arr2: Array<number> = [1, 2, 3];

// 元组
let tuple: [number, string] = [0, '1'];

// 函数
let add = (x: number, y: number) => x + y
let compute: (x: number, y: number) => number

compute = (a, b) => a + b;

// 对象
let obj: { x: number, y: number } = { x: 1, y: 2 };
obj.x = 3;

// symbol
let s1: symbol = Symbol();
let s2 = Symbol();
console.log(s1 === s2);

// undefined, null
let un: undefined = undefined;
let nu: null = null;

num = null;

// void
let noReturn: () => void = () => { }

// any
let x: any


// never
let error = () => {
    throw new Error('error')
}

let endless = () => {
    while (true) { }
}