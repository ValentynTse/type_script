"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidatorSelector = void 0;
var validator_strategies_1 = require("./validator-strategies");
var ValidatorSelector = /** @class */ (function () {
    function ValidatorSelector() {
    }
    ValidatorSelector.initialize = function () {
        ValidatorSelector.validators['required'] = new validator_strategies_1.RequiresValidator();
        ValidatorSelector.validators['number'] = new validator_strategies_1.NumberValidator();
        ValidatorSelector.validators['email'] = new validator_strategies_1.EmailValidators();
        ValidatorSelector.initialize = function () { };
    };
    ValidatorSelector.select = function (name) {
        var validator = ValidatorSelector.validators[name];
        if (validator) {
            return validator;
        }
        else {
            throw Error('He знайдено валідатор  ' + name);
        }
    };
    ValidatorSelector.validators = {};
    return ValidatorSelector;
}());
exports.ValidatorSelector = ValidatorSelector;
