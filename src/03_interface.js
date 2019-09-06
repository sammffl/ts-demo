function render(result) {
    result.data.forEach(function (value) {
        console.log(value.id, value.name);
        if (value.age) {
            console.log(value.age);
        }
    });
}
// 定义变量采用鸭子模型，只要符合要求的字段默认可以
var result = {
    data: [
        { id: 1, name: 'A' },
        { id: 2, name: 'B' },
        { id: 3, name: 'C', sex: 'male' }
    ]
};
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
});
// 两种类型断言等价，建议使用前一种。在react中不会引起奇异
render({
    data: [
        { id: 1, name: 'A' },
        { id: 2, name: 'B' },
        { id: 3, name: 'C', sex: 'male' }
    ]
});
var chars = ['A', 'B'];
var n = {
    y: 1,
    0: '2'
};
