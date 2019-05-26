
// Argument Order

// ex1 
const map1 = (cb, array) => array.map(cb)
const map2 = (array, cb) => array.map(cb)

// ex2
const map = array => cb => array.map(cb)
const map_ = cb => array => array.map(cb)

const arr = [1, 2, 3, 4, 5]
const double = x => x * 2

const withArr = map(arr)
console.info(withArr(double))
console.info(withArr(n => n * 3))
console.info(arr.map(double))

const withDouble = map_(double)
console.info(withDouble(arr))
console.info(withDouble([1, 3, 9]))

// most specific => lest specific

const prop = key => obj => obj[key]

const propName = prop('name')

const peope = [
    {name: 'Jamon'},
    {name: 'Shirley'},
    {name: 'Ben'},
    {name: 'kent'}
]

console.info(map_(propName)(peope))

