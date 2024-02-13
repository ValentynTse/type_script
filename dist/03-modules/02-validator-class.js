class PhoneNumberValidator {
    validate(value) {
        return true;
    }
}
const phoneVal = new PhoneNumberValidator();
console.log(phoneVal.validate("000-00-00"));
export {};
