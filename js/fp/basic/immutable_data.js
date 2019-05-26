
// Immutable Data

// Mutable = can be changed after creation
const a = [1, 2, 3]
const b = a
console.info(b === a) // true
b.push(4)
console.info(a) // [1, 2, 3, 4]

const c = {foo: 'bar'}
const d = c
console.info(d === c) // true
d.foo = 'baz'
console.info(c) // {foot: 'baz'}

// Immutable = cant't be changed after creation
const push = value => array => {
    const clone = [...array]
    clone.push(value)
    return clone
}

// equal
const push1 = value => {
    return function(array) {
        const clone = [...array]
        clone.push(value)
        return clone
    }
}

const e = [1, 2, 3]
const f = push(4)(e)
console.info(e)
console.info(f === e)

