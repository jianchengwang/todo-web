// 类型断言可以用来手动指定一个值的类型
// 例如将一个联合类型的变量指定为一个更加具体的类型
function getLength(something: string | number): number {
    if((<string> something).length) {
        return (<string>something).length
    }
    return something.toString().length
}
// 类型断言不是类型转换，断言成一个联合类型中不存在的类型是不允许的
// function toBoolean(something: string | number): boolean {
//     return <boolean> something
// }