var Validation;
(function (Validation) {
    class ValidatorSelector {
        static validators = {};
        static initialize() {
            ValidatorSelector.validators['required'] = new Validation.RequiresValidator();
            ValidatorSelector.validators['number'] = new Validation.NumberValidator();
            ValidatorSelector.validators['email'] = new Validation.EmailValidator();
            ValidatorSelector.initialize = () => { };
        }
        static select(name) {
            const validator = ValidatorSelector.validators[name];
            if (validator) {
                return validator;
            }
            else {
                throw new Error('He знайдено валідатор  ' + name);
            }
        }
    }
    Validation.ValidatorSelector = ValidatorSelector;
})(Validation || (Validation = {}));
