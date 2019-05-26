
// Higher Order Functions

// 1. Accept a function as an argument
// 2. Return a new function

const withCount = fn => {
  let count = 0

  return (...args) => {
    console.info(`Call count: ${++count}`)
    return fn(...args)
  }
}

const add = (x, y) => x + y

const countAdd = withCount(add)

console.info(countAdd(1, 2)) // Call count: 1 3
console.info(countAdd(1, 2)) // Call count: 2 3
console.info(countAdd(1, 2)) // Call count: 3 3

// 3. Array Higher order functions
// 3.1 map
const pow = x => x * x
console.info([1, 2, 3, 4, 5, 6, 7, 8, 9].map(pow)) // [ 1, 4, 9, 16, 25, 36, 49, 64, 81 ]

// 3.2 reduce
console.info([1, 2, 3, 4, 5, 6, 7, 8, 9].reduce((x, y) => x + y)) // 45
 
// 3.3 filter
console.info([1, 2, 3, 4, 5, 6, 7, 8, 9].filter((element, index, self) => {
  console.log(element); // 依次打印元素
  console.log(index); // 依次打印元素位置，从０开始
  console.log(self); // self就是变量arr
  return self % 2 == 0;
}))

// 3.4 sort
console.info(['Google', 'Apple', 'Microsoft'].sort()) // ['Apple', 'Google', 'Microsoft'];
console.info(['Google', 'apple', 'Microsoft'].sort()) // ['Google', 'Microsoft", 'apple']
console.info([10, 20, 1, 2].sort()) // [1, 10, 2, 20]
let arr = [10, 20, 1, 2]
let sortedArr = arr.sort((x, y) => x - y)
console.info(sortedArr) //  [1, 2, 10, 20]
console.info(sortedArr == arr) // true

// 3.5 every
console.info([10, 20, 1, 2].every(s => s % 2 == 0)) // false

// 3.6 find & findIndex
console.info([10, 20, 1, 2].find(s => s % 2 == 1)) // 1
console.info([10, 20, 1, 2].findIndex(s => s % 2 == 1)) // 2

// 3.7 forEach
console.info([10, 20, 1, 2].forEach(s => console.info(s))) // undefined
let arr1 = [10, 20, 1, 2];
arr1.forEach(s => s = s % 2);
console.info(arr1)