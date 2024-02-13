var Validation;
(function (Validation) {
    class RequiresValidator {
        validate(value) {
            return value !== '';
        }
        message = "Обов'язкове значення";
    }
    Validation.RequiresValidator = RequiresValidator;
    class NumberValidator {
        validate(value) {
            return /\d+/.test(value);
        }
        message = 'Значення має бути числом';
    }
    Validation.NumberValidator = NumberValidator;
    class EmailValidator {
        validate(value) {
            return /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/i.test(value);
        }
        message = 'Значення має бути  email адресою';
    }
    Validation.EmailValidator = EmailValidator;
})(Validation || (Validation = {}));
