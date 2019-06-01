
// proxy 代理,一般起到拦截,预处理
function ex1() {

    const obj = {name: 'wjc', age:'27'}
    var proxy = new Proxy(obj, {

        // get方法用于拦截某个属性的读取操作，可以接受三个参数，依次为目标对象、属性名和 proxy 实例本身（严格地说，是操作行为所针对的对象），其中最后一个参数可选。
        get: function(obj, prop) {
            if(prop == 'age') {
                return obj.age
            }
            return 35;
        },

        // set方法用来拦截某个属性的赋值操作，可以接受四个参数，依次为目标对象、属性名、属性值和 Proxy 实例本身，其中最后一个参数可选。
        set: function(obj, prop, value) {
            if (prop === 'age') {
                if (!Number.isInteger(value)) {
                  throw new TypeError('The age is not an integer');
                }
                if (value > 200) {
                  throw new RangeError('The age seems invalid');
                }
              }
          
              // 对于满足条件的 age 属性以及其他属性，直接保存
              obj[prop] = value;
        },
        
        // apply方法拦截函数的调用、call和apply操作。
        // apply方法可以接受三个参数，分别是目标对象、目标对象的上下文对象（this）和目标对象的参数数组。
        apply(target, ctx, args) {
            return Reflect.apply(...arguments)
        },

        // has方法用来拦截HasProperty操作，即判断对象是否具有某个属性时，这个方法会生效。典型的操作就是in运算符。
        has(target, key) {
            if(key[0] === '_') {
                return false;
            }
            return key in target
        },

        // construct方法用于拦截new命令，下面是拦截对象的写法。
        construct: function(target, args) {
            console.log('called: ' + args.join(', '));
            return { value: args[0] * 10 };
        }
    })

    
    console.info(obj.name)
    console.info(obj.age)
    obj.age = 100
    console.info(obj.age)

}
ex1()