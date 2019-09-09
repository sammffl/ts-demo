interface List {
    readonly id: number;
    name: string;
    age?: number; // 可选属性
    [x: string]: any; // 任意属性
}

interface Result {
    data: List[]
}

function render(result: Result) {
    result.data.forEach(value => {
        console.log(value.id, value.name);
        if (value.age) {
            console.log(value.age);
        }
    })
}


// 定义变量采用鸭子模型，只要符合要求的字段默认可以
let result = {
    data: [
        { id: 1, name: 'A' },
        { id: 2, name: 'B' },
        { id: 3, name: 'C', sex: 'male' }
    ]
}

render(result);

// 字面量全面检查字段类型
// 添加任意索引类型
// render({
//     data: [
//         { id: 1, name: 'A' },
//         { id: 2, name: 'B' },
//         { id: 3, name: 'C', sex: 'male' }
//     ]
// })

// 绕过全面检查
// 类型断言
render({
    data: [
        { id: 1, name: 'A' },
        { id: 2, name: 'B' },
        { id: 3, name: 'C', sex: 'male' }
    ]
} as Result)

// 两种类型断言等价，建议使用前一种。在react中不会引起奇异
render(<Result>{
    data: [
        { id: 1, name: 'A' },
        { id: 2, name: 'B' },
        { id: 3, name: 'C', sex: 'male' }
    ]
})


interface StringArray {
    [index: number]: string
}

let chars: StringArray = ['A', 'B']

// 数字索引签名是字符串索引签名的子类
// js做类型转换，number => string
interface Names {
    [key: string]: number | string
    // [index: number]: string
    [z: number]: string
    y: number;
    0: string;
}

let n: Names = {
    y: 1,
    0: '2'
}
