
// 属性简洁表示,允许直接写入变量和函数作为对象属性跟方法
function ex1() {
    let ms = {};

    function getItem (key) {
    return key in ms ? ms[key] : null;
    }

    function setItem (key, value) {
    ms[key] = value;
    }

    function clear () {
    ms = {};
    }

    module.exports = { getItem, setItem, clear };
    // 等同于
    module.exports = {
    getItem: getItem,
    setItem: setItem,
    clear: clear
    };

}
// ex1()

// 属性的遍历
function ex2() {
    // (1）for...in

    // for...in循环遍历对象自身的和继承的可枚举属性（不含 Symbol 属性）。

    // （2）Object.keys(obj)

    // Object.keys返回一个数组，包括对象自身的（不含继承的）所有可枚举属性（不含 Symbol 属性）的键名。

    // （3）Object.getOwnPropertyNames(obj)

    // Object.getOwnPropertyNames返回一个数组，包含对象自身的所有属性（不含 Symbol 属性，但是包括不可枚举属性）的键名。

    // （4）Object.getOwnPropertySymbols(obj)

    // Object.getOwnPropertySymbols返回一个数组，包含对象自身的所有 Symbol 属性的键名。

    // （5）Reflect.ownKeys(obj)

    // Reflect.ownKeys返回一个数组，包含对象自身的所有键名，不管键名是 Symbol 或字符串，也不管是否可枚举。

    // 以上的 5 种方法遍历对象的键名，都遵守同样的属性遍历的次序规则。

    // 首先遍历所有数值键，按照数值升序排列。
    // 其次遍历所有字符串键，按照加入时间升序排列。
    // 最后遍历所有 Symbol 键，按照加入时间升序排列。
}

// 新增方法
function ex3() {
    
    // Object.is()
    console.info(Object.is('foo', 'foo')) // true
    console.info(Object.is({}, {})) // false

    console.info(+0 === -0) //true
    console.info(NaN === NaN) // false

    console.info(Object.is(+0, -0)) // false
    console.info(Object.is(NaN, NaN)) // true

    // Object.assign
    // Object.assign方法用于对象的合并，将源对象（source）的所有可枚举属性，复制到目标对象（target）。
    // 只能拷贝源对象的自身属性,不能拷贝继承属性跟不可枚举的属性(enumerable:false)
    const target = {a: 1}
    const source1 = {a: 2}
    const source2 = {c: 3}

    console.info(Object.assign(target, source1, source2)) // { a: 2, c: 3 }

    // Object.assign方法实行的是浅拷贝，而不是深拷贝。
    // 也就是说，如果源对象某个属性的值是对象，那么目标对象拷贝得到的是这个对象的引用
    const obj1 = {a: {b: 1}}
    const obj2 = Object.assign({}, obj1)
    obj1.a.b = 2;
    console.info(obj2.a.b) // 2
    
    
}
ex3()