import { RequiresValidator, NumberValidator, EmailValidators } from './validator-strategies.js';
export class ValidatorSelector {
    static validators = {};
    static initialize() {
        ValidatorSelector.validators['required'] = new RequiresValidator();
        ValidatorSelector.validators['number'] = new NumberValidator();
        ValidatorSelector.validators['email'] = new EmailValidators();
        ValidatorSelector.initialize = () => { };
    }
    static select(name) {
        const validator = ValidatorSelector.validators[name];
        if (validator) {
            return validator;
        }
        else {
            throw Error('He знайдено валідатор  ' + name);
        }
    }
}
