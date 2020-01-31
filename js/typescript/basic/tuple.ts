// 数组合并相同类型的对象
// 元组合并了不同类的对象
// let tom: [string, number] = ['Tom', 25]
let tom: [string, number]
tom[0] = 'Tom'
tom[1] = 25

// 当添加越界元素时，它的类型会被限制为元组中每个类型的联合类型
tom.push('male')
// tom.push(true);