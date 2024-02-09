class Student {
    constructor(firstName, age) {
        this.firstName = firstName;
        this.age = age;
    }
    print() {
        console.log(`Student - ${this.firstName}, age - ${this.age} years.`);
    }
}
const student1 = new Student('Ivan', 25);
const student2 = new Student('John', 24);
student1.print();
student2.print();
console.log(student1);
