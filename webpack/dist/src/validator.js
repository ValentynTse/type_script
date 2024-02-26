"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationResult = exports.Validator = void 0;
var validator_selector_1 = require("./validator-selector");
var Validator = /** @class */ (function () {
    function Validator(config) {
        this.config = config;
        validator_selector_1.ValidatorSelector.initialize();
    }
    Validator.prototype.validate = function (data) {
        var _this = this;
        var messages = [];
        var keys = Object.keys(data);
        keys.forEach(function (key) {
            var validatorName = _this.config[key];
            if (!validatorName) {
                return;
            }
            var validator = validator_selector_1.ValidatorSelector.select(validatorName);
            var validatorValue = String(data[key]);
            var isValid = validator.validate(validatorValue);
            if (!isValid) {
                var message = 'He правильне значення для  ' + key + ', ' + validator.message;
                messages.push(message);
            }
        });
        return {
            valid: messages.length === 0,
            errors: messages,
        };
    };
    return Validator;
}());
exports.Validator = Validator;
var ValidationResult = /** @class */ (function () {
    function ValidationResult() {
    }
    return ValidationResult;
}());
exports.ValidationResult = ValidationResult;
