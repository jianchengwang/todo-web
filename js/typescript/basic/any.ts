/**
 * any 表示允许赋值为任意类型
 */

// 如果是一个普通类型，在赋值过程中改变类型是不被允许的
// let myFavoriteNumber: string = 'saven'
// myFavoriteNumber = 7
// 如果是any则允许
let myFavoriteNumber: any = 'seven';
myFavoriteNumber = 7;

// any类型访问任何属性都是允许的
let anyThing1: any = 'hello'
console.log(anyThing1.myName)
console.log(anyThing1.myName.firstName)

// 也允许调用任何方法，
// 也可以任务any类型的变量，对它任何操作，返回的内容的类型都是any类型
let anyThing2: any = 'Tom'
anyThing2.setName('Jerry')
anyThing2.setName('Jerry').sayHello()
anyThing2.myName.setFristName('Cat')

// 变量如果在声明的时候，未指定类型，那么它会被识别为any类型
let something
something = 'Seven'
something = 7
something.setName('Tom')
