// 联合类型表示取值可以为多种类型中的一种
let myAge: string | number
myAge = 'Seven'
myAge = 7
// myAge = true

// 当TypeScript不确定一个联合类型的变量到底是哪个类型的时候，
// 我们只能访问此联合类型的所有类型中的共用属性或者方法
// function getLength(somthing: string | number): number {
//     return somthing.length;
// }
function getLength(somthing: string | number): string {
    return somthing.toString();
}

// 联合类型在赋值时候会推断出一种类型，这时候再访问就不会报错了
let myNum: string | number
myNum = 'Seven'
console.log(myNum.length)

