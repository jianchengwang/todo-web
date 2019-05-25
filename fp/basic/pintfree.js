
// Pointfree Programming

const arr = [1, 2, 3]
const double = x => x * 2

// no pointfree
console.info(arr.map(x => x * 2)) // [ 2, 4, 6 ]

// pointfree
console.info(arr.map(double)) // [ 2, 4, 6 ]

// Legibility
// Reduce surface area
// unit test our named functions