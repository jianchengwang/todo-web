
// 异步编程的解决方案,比传统的回调函数跟事件更合理跟强大
// 基本用法
function ex1() {

    const promise = new Promise(function(resolve, reject) {
        if(true) {
            resolve(value)
        } else{
            reject(value)
        }
    })

    promise.then(function(value) {

    }, function(error) {

    })

}

// Promise 新建后会立即执行
function ex2() {
    let promise = new Promise(function(resolve, reject) {
        console.log('Promise');
        resolve();
      });
      
      promise.then(function() {
        console.log('resolved.');
      });
      
      console.log('Hi!');
}
// ex2()

// 异步加载图片例子
function ex3(url) {
    return new Promise(function(resolve, reject) {
      const image = new Image();
  
      image.onload = function() {
        resolve(image);
      };
  
      image.onerror = function() {
        reject(new Error('Could not load image at ' + url));
      };
  
      image.src = url;
    });
  }

  // 实现Ajax
function ex4() {

    const getJSON = function(url) {
        const promise = new Promise(function(resolve, reject){
            const handler = function() {
              if (this.readyState !== 4) {
                return;
              }
              if (this.status === 200) {
                resolve(this.response);
              } else {
                reject(new Error(this.statusText));
              }
            };
            const client = new XMLHttpRequest();
            client.open("GET", url);
            client.onreadystatechange = handler;
            client.responseType = "json";
            client.setRequestHeader("Accept", "application/json");
            client.send();
        });

        return promise
    }

    getJSON("/posts.json").then(function(json) {
        console.log('Contents: ' + json);
      }, function(error) {
        console.error('出错了', error);
      });
    
}
// ex4() // 在浏览器才能执行

// then, catch
function ex5() {

    // then 会产生一个新的Promise,类似链条一样
    // Promise 在resolve语句后面，再抛出错误，不会被捕获，等于没有抛出。因为 Promise 的状态一旦改变，就永久保持该状态，不会再变了。
    const promise = new Promise(function(resolve, reject) {
        resolve('ok');
        throw new Error('test');
      });
      promise
        .then(function(value) { console.log(value) })
        .catch(function(error) { console.log(error) })
      // ok
}
ex5()
