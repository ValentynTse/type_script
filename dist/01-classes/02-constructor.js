class MyClass {
    constructor() {
        console.log('Працює конструктор класу MyClass1');
        this.value = 'Hello world';
    }
}
console.log('Створення екземпляра класу MyClass1');
const temp = new MyClass();
console.log(temp.value);
