
// ex 1let, const 声明的变量只在所在代码块里有效
// 块级作用域，块级作用域可以任意嵌套，且 {} 内定义的变量，外层作用域是无法获得
function ex1() {
    {
        var a;
        let b;
    }
    
    console.info(a)
    console.info(b) // b is not defined
    
    
    var a1 = [];
    for (var i = 0; i < 10; i++) {
      a1[i] = function () {
        console.log(i);
      };
    }
    a1[6](); // 10
    
    var a2 = []
    for (let i = 0; i < 10; i++) {
      a2[i] = function () {
        console.log(i);
      };
    }
    a2[6](); // 6
}
// ex1();


// ex2 不存在变量提升
function ex2() {
    // var 的情况
    console.log(foo); // 输出undefined
    var foo = 2;

    // let 的情况
    console.log(bar); // 报错ReferenceError
    let bar = 2;
}
// ex2()

// ex3 暂时性死区 只要块级作用域内存在let命令，它所声明的变量就“绑定”（binding）这个区域，不再受外部的影响。
function ex3() {
    var tmp = 123;

    if (true) {
      tmp = 'abc'; // ReferenceError
      let tmp;
    }
}
// ex3()

// ex4 不允许重复声明
function ex4() {
        // 报错
    function func() {
        let a = 10;
        var a = 1;
    }
    func()
    
    // 报错
    function func() {
        let a = 10;
        let a = 1;
    }
    func()
}
// ex4()

// ex5 函数可以声明在块作用域里,作用范围跟let一样，只在块区域里面有效，
// 不过不建议使用块声明函数，要使用的话，建议用let f2 = function这样来定义函数表达式而不是声明
function ex5() {

    if(true) {
        function f1() {
            console.info('f1')
        }
        f1()
    }

    try {
        let f2 = function() {
            console.info('f2')
        }

        f2()
    } catch(e) {
        console.info(e)
    }
}
// ex5()
// f1() // f1 is not defined

// ex6 ES6 的块级作用域必须有大括号，如果没有大括号，JavaScript 引擎就认为不存在块级作用域。
function ex6() {
    // 第一种写法，报错
    // if (true) let x = 1; // SyntaxError: Lexical declaration cannot appear in a single-statement context

    // 第二种写法，不报错
    if (true) {
    let x = 1;
    }
}
// ex6()

// ex7 const 声明常量，一旦声明就必须定义, 跟let一样是块作用区域
// const实际上保证的，并不是变量的值不得改动，
// 而是变量指向的那个内存地址所保存的数据不得改动。
// 对于简单类型的数据（数值、字符串、布尔值），值就保存在变量指向的那个内存地址，因此等同于常量。
// 但对于复合类型的数据（主要是对象和数组），变量指向的内存地址，保存的只是一个指向实际数据的指针，
// const只能保证这个指针是固定的（即总是指向另一个固定的地址），至于它指向的数据结构是不是可变的，就完全不能控制了。
// 因此，将一个对象声明为常量必须非常小心。
function ex7() {
    
    // const PI // Missing initializer in const declaration
    // PI = 3.14

    const PI = 3.14
    PI = 3.15 // Assignment to constant variable.
}
// ex7()

// ex8 顶层元素的属性
// 顶层对象，在浏览器环境指的是window对象，在 Node 指的是global对象。ES5 之中，顶层对象的属性与全局变量是等价的。
// ES6 为了改变这一点，一方面规定，为了保持兼容性，var命令和function命令声明的全局变量，依旧是顶层对象的属性；
// 另一方面规定，let命令、const命令、class命令声明的全局变量，不属于顶层对象的属性。
// 也就是说，从 ES6 开始，全局变量将逐步与顶层对象的属性脱钩。
var a = 1;
// 如果在 Node 的 REPL 环境，可以写成 global.a
// 或者采用通用方法，写成 this.a
console.info(global.a) // 1 备注要在REPL环境，我这边在vscode node 命令执行js得到的是undefined

let b = 1;
console.info(global.b) // undefined

