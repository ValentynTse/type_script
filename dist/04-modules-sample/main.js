import { Validator } from './validator.js';
const data1 = {
    firstName: 'Taras',
    lastName: 'Petrynenko',
    age: 25,
    email: 'petrynenko@example.com',
};
const data2 = {
    firstName: 'Taras',
    lastName: '',
    age: 'qwe',
    email: 'example',
};
const config = {
    firstName: 'required',
    lastName: 'required',
    age: 'number',
    email: 'email',
};
const validator = new Validator(config);
let result = validator.validate(data1);
console.log(result.valid);
console.log(result.errors);
result = validator.validate(data2);
console.log(result.valid);
console.log(result.errors);
