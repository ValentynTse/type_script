class Animal {
    constructor(name) {
        this.name = name;
    }
    move() {
        console.log(this.name + ' пересувається');
    }
}
class Cat extends Animal {
    constructor() {
        super('Кіт');
    }
    makeSound() {
        console.log('Няв-Няв');
    }
}
class Cow extends Animal {
    constructor() {
        super('Корова');
    }
    makeSound() {
        console.log('My-y-y-y-y');
    }
}
const murzik = new Cat();
murzik.makeSound();
murzik.move();
const zirka = new Cow();
zirka.makeSound();
zirka.move();
