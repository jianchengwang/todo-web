// 接口是对类一部分行为的抽象，
// 在TypeScript中我们使用接口来定义对象的类型
interface Person {
    name: string
    age: number
}

let tom: Person = {
    name: 'Tom',
    age: 25
}

// 定义的变量比接口少一些属性是不允许的
// let jerry: Person = {
//     name: 'jerry'
// }

// 多一i额属性也是不允许的
// let jake: Person = {
//     name: 'jake',
//     age: 22,
//     gender: 'male'
// }

// 可选属性可以允许我们不完全匹配接口
interface Person1 {
    name: string
    age?: number
}
let tome1: Person1 = {
    name: 'Tome'
}

// 任意属性
interface Person2 {
    name: string
    age?: number
    [propName: string]: any 
}
let tom2 = {
    name: 'Tome',
    gender: 'male'
}

// 一旦定义了任意属性，那么确定属性和可选属性的类型必须是它类型的子集
// interface Person3 {
//     name: string
//     age?: number
//     [propName: string]: string 
// }
// let tom3: Person3 = {
//     name: 'Tom',
//     age: 25,
//     gender: 'male'
// }

// 只读属性，如果我们希望对象中的一些字段只能在创建的时候赋值
// 那么可以使用readonly定义只读属性
// 注意，只读的约束存在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候
interface Person4 {
    readonly id: number
}

let tom4: Person4 = {
    id: 1
}
// tom4.id = 2