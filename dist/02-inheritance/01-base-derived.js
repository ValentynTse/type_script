class Base {
    constructor() {
        this.value1 = 'private value 1';
        this.value2 = 'public value 2';
        this.value3 = 'protected value 3';
    }
    method1() {
        console.log('private method 1 call.');
    }
    method2() {
        console.log('public method 2 call.');
    }
    method3() {
        console.log('protected method 3 call.');
    }
}
class Derived extends Base {
    constructor() {
        super();
        console.log('public property = ' + this.value2);
        console.log('protected property = ' + this.value3);
        this.method2();
        this.method3();
    }
}
const derived = new Derived();
console.log(derived.value2);
derived.method2();
