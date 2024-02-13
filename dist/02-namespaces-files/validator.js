var Validation;
(function (Validation) {
    class Validator {
        config;
        constructor(config) {
            this.config = config;
            Validation.ValidatorSelector.initialize();
        }
        validate(data) {
            const messages = [];
            const keys = Object.keys(data);
            keys.forEach(key => {
                const validatorName = this.config[key];
                if (!validatorName) {
                    return;
                }
                const validator = Validation.ValidatorSelector.select(validatorName);
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
    Validation.Validator = Validator;
    class ValidationResult {
        valid;
        errors;
    }
    Validation.ValidationResult = ValidationResult;
})(Validation || (Validation = {}));
