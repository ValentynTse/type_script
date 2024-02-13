export class RequiresValidator {
    validate(value) {
        return value !== "";
    }
    ;
    message = "Обов'язкове значення";
}
export class NumberValidator {
    validate(value) {
        return /\d+/.test(value);
    }
    message = "Значення має бути числом";
}
;
export class EmailValidators {
    validate(value) {
        return /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/i.test(value);
    }
    message = "Значення має бути  email адресою";
}
;
