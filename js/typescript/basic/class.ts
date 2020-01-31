// 类用法 类比java都差不多
// http://es6.ruanyifeng.com/#docs/class
class Animal {
    public name: string 
    constructor(name) {
        this.name = name
    }
    sayHi() {
        return `My name is ${this.name}`
    }
    static isAnimal(a) {
        return a instanceof Animal;
    }
}

let a = new Animal('Jack')
console.info(a.sayHi())


class Cat extends Animal {
    constructor(name) {
        super(name); // 调用父类的 constructor(name)
        console.log(this.name);
    }
    sayHi() {
        return 'Meow, ' + super.sayHi(); // 调用父类的 sayHi()
    }
}
let c = new Cat('Tom'); // Tom
console.log(c.name)
console.log(c.sayHi()); // Meow, My name is Tom
console.log(Animal.isAnimal(c))
