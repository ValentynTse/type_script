class KeyValuePair {
    set key(value) {
        if (value === null || value === undefined) {
            throw new Error('Значення value не може бути порожнім');
        }
        this._key = value;
    }
    get key() {
        return this._key;
    }
    set value(value) {
        if (value === null || value === undefined) {
            throw new Error('Значення value не може бути порожнім');
        }
        this._value = value;
    }
    get value() {
        return this._value;
    }
}
const strAndNum = new KeyValuePair();
strAndNum.key = 'key1';
strAndNum.value = 123;
console.log(strAndNum);
