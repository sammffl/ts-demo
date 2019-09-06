// 接口之间合并
interface AA {
    x: number;
    y: number
    foo(bar: number): number // 5
    foo(bar: 'a'): number // 2
}
interface AA {
    y: number;
    foo(bar: number): string  // 3
    foo(bar: number[]): number[] // 4
    foo(bar: 'b'): number // 1
}

let aaa: AA = {
    x: 1,
    y: 2,
    foo(bar: any) {
        return bar
    }
}

// 命名空间合并
// 不能重复定义


// 命名空间和函数、类合并，放在后面
function Lib() { }
namespace Lib {
    export let version = '1.0'
}

console.log(Lib.version)

class CC { }
namespace CC {
    export let state = 1
}

console.log(CC.state)

enum Color1 {
    Red,
    Yellow,
    Blue
}

namespace Color1 {
    export function mix() { }
}

console.log(Color)