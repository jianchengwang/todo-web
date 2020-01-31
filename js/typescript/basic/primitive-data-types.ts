/**
 * 1.布尔值
 * 在TypeScript中，boolean是JavaScript中的基本类型，
 * 而Boolean是JavaScript中的构造函数。
 * 其他基本类型(除了null跟undefined)一样
 */
let isDone: boolean = false;
// error 造器返回的是一个Boolean对象，不是boolean
// let createdByNewBoolean1: boolean = new Boolean(1)
// fixed
let createdByNewBoolean2: boolean = Boolean(1)

/**
 * 2.数值
 */
let decLiteral: number = 6
let hexLiteral: number = 0xf00d
// ES6中的二进制表示法，会被编译成十进制数字
let binaryLiteral: number = 0b1010
// ES6中的八进制表示法
let octalLiteral: number = 0o744
let notANumber: number = NaN
let infinityNumber: number = Infinity

/**
 * 字符串
 */
let myName: string = 'Tom'
let myAge: number = 25
// 模板字符串
let sentence: string = `Hello, my name is ${myName}.
I'll be ${myAge + 1} years old next month.`

/**
 * 空值
 * JavaScript没有空值的概念，
 * 在TypeScript中，可以用void表示没有任何返回值的函数
 */
function alertName(): void {
    alert('My name is Tom')
}

/**
 * null 和 undefined
 * 跟void的区别是，这两个是所有类型的子类型，可以赋值给所有类型
 */
let num: number = undefined
let u1: undefined
let num1: number = u1
let u2: void
// 而 void 类型的变量不能赋值给 number 类型的变量：
// let num2: number = u2
