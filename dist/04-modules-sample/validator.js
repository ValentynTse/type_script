import { ValidatorSelector } from './validator-selector.js';
export class Validator {
    config;
    constructor(config) {
        this.config = config;
        ValidatorSelector.initialize();
    }
    validate(data) {
        const messages = [];
        const keys = Object.keys(data);
        keys.forEach(key => {
            const validatorName = this.config[key];
            if (!validatorName) {
                return;
            }
            const validator = ValidatorSelector.select(validatorName);
            const validatorValue = String(data[key]);
            const isValid = validator.validate(validatorValue);
            if (!isValid) {
                const message = 'He правильне значення для  ' + key + ', ' + validator.message;
                messages.push(message);
            }
        });
        return {
            valid: messages.length === 0,
            errors: messages,
        };
    }
}
export class ValidationResult {
    valid;
    errors;
}
