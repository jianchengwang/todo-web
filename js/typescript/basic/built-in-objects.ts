// JS 有很多内置对象，
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
// 内置对象是根据标准在全局作用域 Global 上存在的对象
// 这里的标准指的是ECMAScript和其他环境，比如DOM的标准

// ECMAScript内置对象 
// Boolean, Error, Date, RegExp等
// 我们可以在 TypeScript 中将变量定义为这些类型
let b: Boolean = new Boolean(1)
let e: Error = new Error('Error Occurred')
let d: Date = new Date()
let r: RegExp = /[A-Z]/

// DOM提供的内置对象
// Documentm, HTMLElement, Event, NodeList等
let body: HTMLElement = document.body
let allDiv: NodeList = document.querySelectorAll('div')
document.addEventListener('click', function(e: MouseEvent) {
    // Do something
})

// 用 TypeScript 写 Node.js
// Node.js 不是内置对象的一部分，所以要引入第三方声明文件
// npm install @types/node --save-dev