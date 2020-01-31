// 类型别名，常用于联合类型
type Name = string
type NameResolver = () => string
type NameOrResolver = Name | NameResolver
function getName(n: NameOrResolver): Name {
    if(typeof n === 'string') {
        return n
    }
    return n()
}