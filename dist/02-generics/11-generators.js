function* stringSequence() {
    yield 'Hello';
    yield ' ';
    yield 'world';
    yield '!';
}
const iterable1 = stringSequence();
let result = '';
for (const item of iterable1) {
    result += item;
}
console.log(result);
class MyStringCollection {
    constructor() {
        this.values = ['Hello', ' ', 'world', '!'];
    }
    *getValues() {
        for (let i = 0; i < this.values.length; i++) {
            yield this.values[i];
        }
    }
}
const iterable2 = new MyStringCollection().getValues();
result = '';
for (const item of iterable2) {
    result += item;
}
console.log(result);
