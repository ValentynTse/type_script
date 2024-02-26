"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailValidators = exports.NumberValidator = exports.RequiresValidator = void 0;
var RequiresValidator = /** @class */ (function () {
    function RequiresValidator() {
        this.message = "Обов'язкове значення";
    }
    RequiresValidator.prototype.validate = function (value) {
        return value !== "";
    };
    ;
    return RequiresValidator;
}());
exports.RequiresValidator = RequiresValidator;
var NumberValidator = /** @class */ (function () {
    function NumberValidator() {
        this.message = "Значення має бути числом";
    }
    NumberValidator.prototype.validate = function (value) {
        return /\d+/.test(value);
    };
    return NumberValidator;
}());
exports.NumberValidator = NumberValidator;
;
var EmailValidators = /** @class */ (function () {
    function EmailValidators() {
        this.message = "Значення має бути  email адресою";
    }
    EmailValidators.prototype.validate = function (value) {
        return /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/i.test(value);
    };
    return EmailValidators;
}());
exports.EmailValidators = EmailValidators;
;
