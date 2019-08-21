// 类
class Dog {
    constructor(name: string) {
        this.name = name;
    }
    name: string;
    run() { }
    private pri() { }
    protected pro() { }
    readonly legs: number = 4
    static food: string = 'bones'
}

let dog = new Dog('')

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