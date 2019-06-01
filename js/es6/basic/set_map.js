
// set
function ex1() {

    // set 的值唯一,
    // Set 内部判断两个值是否不同，使用的算法叫做“Same-value-zero equality”，它类似于精确相等运算符（===），主要的区别是NaN等于自身，而精确相等运算符认为NaN不等于自身。
    const s = new Set([2,3,5,4,5,2,2]);
    s.add(6)
    s.delete(2)
    s.has(4)
    console.info(...s) // 3 5 4 6

}
// ex1()

// map
function ex2() {
    const m = new Map();
    const o = {p: 'Hello World'};

    m.set(o, 'content')
    m.get(o) // "content"

    m.has(o) // true
    m.delete(o) // true
    m.has(o) // false
}
ex2()