
// Currying

function add(x) {
    return function(y) {
        return x + y
    }
}

const addThree = add(3)
console.info(addThree(10)) // 13
console.info(addThree(20)) // 23
console.info(add(3)(30)) // 33

const add2 = x => y => x + y
const addThree2 = add2(3)
console.info(addThree2(10)) // 13
console.info(addThree2(20)) // 23
console.info(add2(3)(30)) // 33

// plus
// ex1
function plus(a){
    var sum = 0;
        sum += a;
    return function(b){
        sum += b;
        return function(c){
            sum += c;
            return sum;
        }
    }
}
console.info(plus(1)(2)(3))

// ex2
function plus2(a) {
    var sum = 0;
    sum += a;

    return function temp(b) { 
        if (arguments.length === 0) {
            return sum;
        } else {
            sum= sum+ b;
            return temp;
        }
    }
}
console.info(plus2(1)(2)(3)(4)(5)())

// ex3
function currying(fn) {
    __args = [].slice.call(arguments, 1);
    console.log("_args", __args)
    return function () {
        var __inargs = [].slice.call(arguments);
        console.log("_inargs", __inargs)
        return fn.apply(null, __args.concat(__inargs));
    };
}

function square(i) {
    return i * i;
}

function double(i) {
    return i *= 2;
}

function map(handeler, list) {
    return list.map(handeler);
}

const mapSQ = currying(map, square);

console.info(mapSQ([1, 2, 3, 4, 5])); //[1, 4, 9, 16, 25]


const mapDB = currying(map, double);
console.info(mapDB([1, 2, 3, 4, 5])); //[2, 4, 6, 8, 10]