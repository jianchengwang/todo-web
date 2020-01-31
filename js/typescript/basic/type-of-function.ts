// 常见的函数定义方式有两种
// 1.函数声明
function sum1(x, y) {
    return x + y
}
// 2.函数表达式
let sum2 = function(x, y) {
    return x + y
}
// TypeScript 针对输入输出类型进行约束
function sum3(x: number, y: number): number {
    return x + y
}
// 输入参数跟声明或者定义不一致是不被允许的
// sum3(1)
// sum3(1, 2, 3)

// 接口定义函数的形状
interface SearchFunc {
    (source: string, subString: string): boolean
}
let mySearch: SearchFunc
mySearch = function(source: string, subString: string) {
    return source.search(subString) != -1
}

// 可选参数
function buildName1(firstName: string, lastName?: string) {
    if(lastName) {
        return firstName + '' + lastName
    }
    return firstName
}
let tomcat1 = buildName1('Tom', 'Cat')
let tom1 = buildName1('Tom')
// 可选参数后面不允许再出现必须参数
// function buildName1(firstName?:string, lastName: string) {
//     if(lastName) {
//         return firstName + '' + lastName
//     }
//     return firstName
// }

// 参数默认值
function buildName2(firstName: string, lastName: string = 'Cat') {
    return firstName + ' ' + lastName;
}
let tomcat2 = buildName2('Tom', 'Cat');
let tom2 = buildName2('Tom');

// 剩余参数 ...rest
function push(array, ...items) {
    items.forEach(function(item) {
        array.push(item)
    })
}
let a = []
push(a, 1, 2, 3)
// 事实上 items 是一个数组，所有我们也可以用数组的类型定义它
function push1(array, ...items: any[]) {
    items.forEach(function(item) {
        array.push(item)
    })
}

// 函数的重载
// function reverse(x: number | string): number | string {
//     if(typeof x === 'number') {
//         return Number(x.toString().split('').reverse().join(''));
//     } else if(typeof x === 'string') {
//         return x.split('').reverse().join('');
//     }
// }
// 缺点不能够精确的表达，输入为数字，输出也为数字，
// 这时可以用重载
// 前几次都是函数定义，最后是函数实现
// 注意，TypeScript 会优先从最前面的函数定义开始匹配，
// 所以多个函数定义如果有包含关系，需要优先把精确的定义写在前面。
function reverse(x: number): number
function reverse(x: string): string
function reverse(x: number | string): number | string {
    if(typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if(typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}