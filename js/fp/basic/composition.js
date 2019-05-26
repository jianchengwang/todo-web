
// Composition

// ex1 
const f = x => x + 2
const g = x => x * 3

console.info(f(g(5))) // 17

// ex2
const scream = str => str.toUpperCase()
const excliam = str => `${str}!`
const repeat = str => `${str} ${str}`

console.info(
    repeat(excliam(scream('i love egghead')))
) // I LOVE EGGHEAD! I LOVE EGGHEAD!

// ex3
const compose = (...fns) => x => 
    fns.reduceRight((acc, fn) => fn(acc), x)

const writeExuberance = compose(
    repeat,
    excliam,
    scream
)

console.info(writeExuberance('i love egghead'))

// ex4
const pipe = (...fns) => x => fns.reduce((acc, fn) => fn(acc), x)

const writeExuberance2 = pipe(
    scream,
    excliam,
    repeat
)

console.info(writeExuberance2('i love egghead'))