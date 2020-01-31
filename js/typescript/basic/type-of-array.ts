// 数组的类型，多种定义方式

// [类型 + 方括号] 表示法
let fibonacci1: number[] = [1, 1, 2, ,3, 5]
// 数组中不允许出现其他类型
// let fibonacci1: number[] = [1, '1', 2, ,3, 5]
// fibonacci1.push('1')

// 数组泛型
let fibonacci2: Array<number> = [1, 1, 2, 3, 5]

// 接口表示数组，不建议使用，除非类数组
interface NumberArray {
    [index: number]: number
}
let fibonacci3: NumberArray = [1, 1, 2, 3, 5]

// 类数组 (Array-like Object) 不是数组类型
// 比如 arguments
// function sum() {
//     let args: number[] = arguments
// }
function sum() {
    let args: {
        [index: number]: number
        length: number
        callee: Function
    } = arguments
}
// 事实上常用的类数组都有自己的接口定义
// 如 IArguments, NodeList, HTMLCollection 等
function sum1() {
    let args: IArguments = arguments
}


// any 在数组中的应用
let list: any[] = ['hello', 25, {gender: 'male'}]