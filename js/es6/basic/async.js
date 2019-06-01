
// ES2017 标准引入了 async 函数，使得异步操作变得更加方便。

// async 函数是什么？一句话，它就是 Generator 函数的语法糖。

function ex1() {

    const fs = require('fs');

    const readFile = function (fileName) {
    return new Promise(function (resolve, reject) {
        fs.readFile(fileName, function(error, data) {
        if (error) return reject(error);
        resolve(data);
        });
    });
    };

    const gen = function* () {
        const f1 = yield readFile('/etc/fstab');
        const f2 = yield readFile('/etc/shells');
        console.log(f1.toString());
        console.log(f2.toString());
    };

    // 一比较就会发现，async函数就是将 Generator 函数的星号（*）替换成async，将yield替换成await，仅此而已。
    // Generator 函数的执行必须靠执行器，所以才有了co模块，而async函数自带执行器。也就是说，async函数的执行，与普通函数一模一样，只要一行。
    const asyncReadFile = async function () {
        const f1 = await readFile('/etc/fstab');
        const f2 = await readFile('/etc/shells');
        console.log(f1.toString());
        console.log(f2.toString());
      };

}

function ex2() {
    async function getStockPriceByName(name) {
        const symbol = await getStockSymbol(name);
        const stockPrice = await getStockPrice(symbol);
        return stockPrice;
      }
      
      getStockPriceByName('goog').then(function (result) {
        console.log(result);
      });
}

// 假定某个 DOM 元素上面，部署了一系列的动画，前一个动画结束，才能开始后一个。如果当中有一个动画出错，就不再往下执行，返回上一个成功执行的动画的返回值。

function chainAnimationsPromise(elem, animations) {

    // 变量ret用来保存上一个动画的返回值
    let ret = null;
  
    // 新建一个空的Promise
    let p = Promise.resolve();
  
    // 使用then方法，添加所有动画
    for(let anim of animations) {
      p = p.then(function(val) {
        ret = val;
        return anim(elem);
      });
    }
  
    // 返回一个部署了错误捕捉机制的Promise
    return p.catch(function(e) {
      /* 忽略错误，继续执行 */
    }).then(function() {
      return ret;
    });
  
  }

  function chainAnimationsGenerator(elem, animations) {

    return spawn(function*() {
      let ret = null;
      try {
        for(let anim of animations) {
          ret = yield anim(elem);
        }
      } catch(e) {
        /* 忽略错误，继续执行 */
      }
      return ret;
    });
  
  }
  
  async function chainAnimationsAsync(elem, animations) {
    let ret = null;
    try {
      for(let anim of animations) {
        ret = await anim(elem);
      }
    } catch(e) {
      /* 忽略错误，继续执行 */
    }
    return ret;
  }
  