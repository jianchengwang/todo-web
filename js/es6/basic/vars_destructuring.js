// 变量的解构赋值
// ex1 数组的解构赋值
function ex1() {

    let [, b, c, d] = [1, [2], 3]
    console.info(b[0])
    console.info(c)
    console.info(d)

    let [head, ...tail] = [1, 2, 3, 4]
    console.info(head)
    console.info(tail)

    // 如果等号右边不是可遍历的结构，则会报错
    let [foo] = 1 // TypeError: 1 is not iterable

    // 默认值
    let [x = 1] = []
    console.info(x)

    // ES6 内部使用严格相等运算符（===），判断一个位置是否有值。
    // 所以，只有当一个数组成员严格等于undefined，默认值才会生效。
    let [y = 1] = [undefined]
    console.info(y)

    let [z = 1] = [null]
    console.info(z)

    // 如果默认值是一个表达式，那么这个表达式是惰性求值的
    // 只有用到时候，才会执行求值
    function f() {
        console.info('aaa')
        return 'b'
    }
    let [k = f()] = [1]
    console.info(k)

    let [b = f()] = []
    console.info(b)

}
// ex1()

// ex2 对象结构赋值
// 对象的解构与数组有一个重要的不同。
// 数组的元素是按次序排列的，变量的取值由它的位置决定；
// 而对象的属性没有次序，变量必须与属性同名，才能取到正确的值。
function ex2() {

    // let {foo, bar} = {foo: 'aaa', bar: 'bbb'}
    // 上面的解构赋值是下面形式的简写
    let { foo: foo, bar: bar } = { foo: 'aaa', bar: 'bbb' };
    console.info(foo)
    console.info(bar)

    // 对象的解构赋值是内部机制，需要先找到同名属性，然后再赋给对应的变量，
    // 真正被赋值的是后者，而不是前者
    let {foz: baz} = { foz: 'haha', boz: 'mm'}
    // console.info(foz) // foz is not defined
    console.info(baz) // haha

    // 默认值
    var {x = 3} = {}
    console.info(x)

     // let x;
    // {x} = {x:1} // syntax error

    // 上面代码的写法会报错，因为 JavaScript 引擎会将{x}理解成一个代码块，从而发生语法错误。只有不将大括号写在行首，避免 JavaScript 将其解释为代码块，才能解决这个问题。
    let x;
    ({x} = {x: 1})
    
}
// ex2()

// 数值跟布尔值的解构赋值
function ex3() {


// 解构赋值时，如果等号右边是数值和布尔值，则会先转为对象。
// let {toString: s} = 123;
// console.info(s === Number.prototype.toString) // true

    let {toString: s} = true;
    s === Boolean.prototype.toString // true
   
    // 解构赋值的规则是，只要等号右边的值不是对象或数组，就先将其转为对象。
    // 由于undefined和null无法转为对象，所以对它们进行解构赋值，都会报错。
    // Cannot destructure property `proxy` of 'undefined' or 'null'.    
    let {proxy: x} = undefined
    let {proxy: y} = null
}
// ex3()

// 函数参数的解构赋值
function ex4() {

    console.info([[1,2], [3,4]].map(([a, b]) => a + b)) // [3,7]
    
    let move = function({x=0, y=0} = {}) {
        return [x,y]
    }
    console.info(move({x:3, y:8}))
    console.info(move({x:3}))
    console.info(move({}))
    console.info(move())

    // undefined就会触发函数参数的默认值。
    console.info([1, undefined, 3].map((x = 'yes') => x)); // [1, 'yes', 3]

}
// ex4()

function ex5() {

    // 解构用途
    // 交换变量的值
    let x = 1;
    let y = 2;
    [x, y] = [y, x];
    console.info(x) // 2
    console.info(y) // 1
    
    // 从函数返回多个值
    let returnMoreVars = function() {
        return [1,2,3]
    }
    let [a, b, c] = returnMoreVars()
    console.info(a)
    
    // 函数参数的定义,解构赋值可以方便地将一组参数与变量名对应起来
    let f = function([x, y, z]) {console.info(x+y+z)}
    f([1,2,3])

    // 提取json数据
    let jsonData = {
        id: 28,
        msg: '冲吧，骚年，拿下学委',
        data: [123, 456]
    }
    let {id, msg, data: number} = jsonData
    console.info(msg)

    // 函数参数的默认值详见上面代码
    // 避免在函数体内写var foo = config.foo || 'default foot'
    // jQuery.ajax = function (url, {
    //     async = true,
    //     beforeSend = function () {},
    //     cache = true,
    //     complete = function () {},
    //     crossDomain = false,
    //     global = true,
    //     // ... more config
    //   } = {}) {
    //     // ... do stuff
    //   };

    // 遍历map结构
    // 任何实现了Iterator接口的对象，都可以使用for...of循环遍历
    const map = new Map();
    map.set('first', 'hello');
    map.set('second', 'world');

    for(let [k, v] of map) {
        console.info(k + ":" + v)
    }

    // 输入模块的指定方法
    // import {a1, a2} from moduel
    // const {sourceMap, sourceMap} = require("source-map") 
    
}
ex5()