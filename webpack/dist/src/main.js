"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var validator_1 = require("./validator");
var data1 = {
    firstName: 'Taras',
    lastName: 'Petrynenko',
    age: 25,
    email: 'petrynenko@example.com',
};
var data2 = {
    firstName: 'Taras',
    lastName: '',
    age: 'qwe',
    email: 'example',
};
// налаштування об'єкта для перевірки
var config = {
    firstName: 'required',
    lastName: 'required',
    age: 'number',
    email: 'email',
};
var validator = new validator_1.Validator(config);
var result = validator.validate(data1);
console.log(result.valid); // true
console.log(result.errors);
result = validator.validate(data2);
console.log(result.valid); // false
console.log(result.errors);
