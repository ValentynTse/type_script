class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    print() {
        console.log(this.name + ' ' + this.age);
    }
}
const person = new Person('Jhon', 25);
person.print();
person.name = 'Ivan';
