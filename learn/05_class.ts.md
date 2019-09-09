// 类

abstract class Animal {
    eat() {
        console.log('eat')
    }

    abstract sleep(): void
}

// let animal = new Animal()

class Dog extends Animal {
    constructor(name: string) {
        super();
        this.name = name;
    }
    name: string;
    run() { }
    sleep() { }
    private pri() { }
    protected pro() { }
    readonly legs: number = 4
    static food: string = 'bones'
}

let dog = new Dog('')
dog.eat();
Dog.food
class Husky extends Dog {
    constructor(name: string, public color: string) {
        super(name)
        this.color = color
        this.pro
    }
    // public color: string
}

Husky.food

class WorkFlow {
    step1() {
        return this;
    }

    step2() {
        return this;
    }
}

new WorkFlow().step1().step2()

class MyFlow extends WorkFlow {
    next() {
        return this;
    }
}

new MyFlow().next().step1().next().step2();