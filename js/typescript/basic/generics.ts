// 泛型（Generics）是指在定义函数、接口或类的时候，
// 不预先指定具体的类型，而在使用的时候再指定类型的一种特性。
function createArray<T>(length: number, value: T): Array<T> {
    let result: T[] = []
    for(let i=0; i<length; i++) {
        result[i] = value
    }
    return result
}
console.log(createArray<string>(3, 'x'))
console.log(createArray(3, 'x'))

// 多个类型参数
function swap<T, U>(tuple: [T, U]): [U, T] {
    return [tuple[1], tuple[0]]
}
console.log(swap([7, 'x']))

// 泛型接口，类等
class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}
let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) { return x + y; };

// 泛型的默认值
function createArray1<T = string>(length: number, value: T): Array<T> {
    let result: T[] = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}