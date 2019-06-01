
// Generator 函数是一个状态机,封装了多个内部状态,并且还是一个遍历器对象生成的函数
function ex1() {
    
    function* f() {
        for(var i = 0; true; i++) {
          var reset = yield i;
          if(reset) { i = -1; }
        }
      }
      
      var g = f();
      
      console.info(g.next()) // { value: 0, done: false }
      console.info(g.next()) // { value: 1, done: false }
      console.info(g.next(true)) // { value: 0, done: false }

}
// ex1()

// 异步几种形式
// 1.回调函数
// 回调函数本身并没有问题，它的问题出现在多个回调函数嵌套
function ex2() {
    fs.readFile(fileA, 'utf-8', function (err, data) {
        fs.readFile(fileB, 'utf-8', function (err, data) {
          // ...
        });
      });
}

// Promise
// 2.Promise 的最大问题是代码冗余，原来的任务被 Promise 包装了一下，不管什么操作，一眼看去都是一堆then，原来的语义变得很不清楚
function ex3() {
    var readFile = require('fs-readfile-promise');

    readFile(fileA)
    .then(function (data) {
    console.log(data.toString());
    })
    .then(function () {
    return readFile(fileB);
    })
    .then(function (data) {
    console.log(data.toString());
    })
    .catch(function (err) {
    console.log(err);
    });

}

// 2.Generator 函数
// Generator 函数是协程在 ES6 的实现，最大特点就是可以交出函数的执行权（即暂停执行）。
// 整个 Generator 函数就是一个封装的异步任务，或者说是异步任务的容器。异步操作需要暂停的地方，都用yield语句注明。Generator 函数的执行方法如下。
function ex4() {
    function* gen(x) {

        try {
            var y = yield x + 2;
        } catch(e) {
            console.info(e)
        }

        return y;
      }
      
      var g = gen(1);
      g.next() // { value: 3, done: false }
      g.next() // { value: undefined, done: true }
      g.throw('出错了')

      // 上面代码中，调用 Generator 函数，会返回一个内部指针（即遍历器）g。这是 Generator 函数不同于普通函数的另一个地方，即执行它不会返回结果，返回的是指针对象。调用指针g的next方法，会移动内部指针（即执行异步任务的第一段），指向第一个遇到的yield语句，上例是执行到x + 2为止。

    // 换言之，next方法的作用是分阶段执行Generator函数。
    // 每次调用next方法，会返回一个对象，表示当前阶段的信息（value属性和done属性）。value属性是yield语句后面表达式的值，表示当前阶段的值；done属性是一个布尔值，表示 Generator 函数是否执行完毕，即是否还有下一个阶段。
}

// 使用Generato函数,执行一个真实的异步任务
function ex5() {
    var fetch = require('node-fetch');

    function* gen(){
        var url = 'https://api.github.com/users/github';
        var result = yield fetch(url);
        console.log(result.bio);
    }

    var g = gen();
    var result = g.next();

    result.value.then(function(data){
        return data.json();
    }).then(function(data){
        g.next(data);
    });

    
}

// thunk 实现 Generator函数自动执行
function ex6() {
    var fs = require('fs');
    var thunkify = require('thunkify');
    var readFileThunk = thunkify(fs.readFile);

    var gen = function* (){
    var r1 = yield readFileThunk('/etc/fstab');
    console.log(r1.toString());
    var r2 = yield readFileThunk('/etc/shells');
    console.log(r2.toString());
    };
}

