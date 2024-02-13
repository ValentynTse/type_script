class MyCat {
    move() {
        console.log("Cat is walking...");
    }
    sound() {
        return "Meow";
    }
}
class Bird {
    move() {
        console.log("Bird is flying...");
    }
    sound() {
        return "Chirp";
    }
    constructor(color, wingspan) {
        this.color = color;
        this.wingspan = wingspan;
    }
}
class Fish {
    move() {
        console.log("Fish is swimming...");
    }
    sound() {
        return "Blub";
    }
    constructor(type) {
        this.legs = 0;
        this.type = type;
    }
}
const parrot = new Bird("Green", 20);
console.log(parrot.color);
console.log(parrot.wingspan);
const salmon = new Fish("Salmon");
console.log(salmon.type);
