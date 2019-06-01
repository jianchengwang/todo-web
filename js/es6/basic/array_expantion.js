
// 扩展运算符...
function ex1() {

    console.info(...[1,2,3]) // 1 2 3

    let add = (x,y) => x + y
    console.info(add(...[4,38]))

    // 替代函数的apply方法
    console.info(Math.max.apply(null, [14,3,90])) // es5
    console.info(Math.max(...[14,3,90])) // es6
    // 等价于
    console.info(Math.max(14,3,90))

    // ES5的 写法
    var arr1 = [0, 1, 2];
    var arr2 = [3, 4, 5];
    Array.prototype.push.apply(arr1, arr2);

    // ES6 的写法
    let arr3 = [0, 1, 2];
    let arr4 = [3, 4, 5];
    arr3.push(...arr4);

}
// ex1()

// Array.from
function ex2() {
    let arrayLike = {
        '0': 'a',
        '1': 'b',
        '2': 'c',
        length: 3
    };
    
    // ES5的写法
    var arr1 = [].slice.call(arrayLike); // ['a', 'b', 'c']
    
    // ES6的写法
    let arr2 = Array.from(arrayLike); // ['a', 'b', 'c']

    // 实际应用中，常见的类似数组的对象是 DOM 操作返回的 NodeList 集合，
    // 以及函数内部的arguments对象。Array.from都可以将它们转为真正的数组。
    // NodeList对象
    // let ps = document.querySelectorAll('p');
    //     Array.from(ps).filter(p => {
    //     return p.textContent.length > 100;
    // });

    // arguments对象
    function foo() {
        var args = Array.from(arguments);
        // ...
    }

    // 对于还没有部署该方法的浏览器，可以用Array.prototype.slice方法替代。
    const toArray = (() =>
        Array.from ? Array.from : obj => [].slice.call(obj)
    )();

    // Array.from还可以接受第二个参数，作用类似于数组的map方法，用来对每个元素进行处理，将处理后的值放入返回的数组。
    Array.from(arrayLike, x => x * x);
    // 等同于
    Array.from(arrayLike).map(x => x * x);
}
// ex2()

// of, copyWithin,find,findIndex,fill
function ex3() {
    console.info(Array.of(1,2,3)) // [1,2,3]

    console.info([1,2,3,4,5].copyWithin(0,3)) // [4, 5, 3, 4, 5]
    
    console.info([1, 4, -5, 10].find((n) => n < 0)); // -5

    [1, 5, 10, 15].findIndex(function(value, index, arr) {
        return value > 9;
    }) // 2
    
    console.info(['a', 'b', 'c'].fill(7, 1, 2)) // [ 'a', 7, 'c' ]

    for (let index of ['a', 'b'].keys()) {
        console.log(index);
    }
}
// ex3()

// includes, flat, flatMap
function ex4() {

    // includes
    console.info([1, 2, 3].includes(2));     // true
    console.info([1, 2, 3].includes(4));     // false
    console.info([1, 2, NaN].includes(NaN)); // true

    // flat, flatMap
    // The flat method is not yet implemented in common browsers (only Chrome v69, Firefox Nightly and Opera 56). It’s an experimental feature. Therefore you cannot use it yet.
    Object.defineProperty(Array.prototype, 'flat', {
        value: function(depth = 1) {
          return this.reduce(function (flat, toFlatten) {
            return flat.concat((Array.isArray(toFlatten) && (depth>1)) ? toFlatten.flat(depth-1) : toFlatten);
          }, []);
        }
    })
    
    console.info([1, 2, [3, 4], 5].flat()) // [1,2,3,4]

}
ex4()
