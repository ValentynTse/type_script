class Dictionary {
    constructor() {
        this.data = [];
    }
    add(key, value) {
        const entry = new KeyValuePair();
        entry.key = key;
        entry.value = value;
        this.data.push(entry);
    }
    getValue(key) {
        const entry = this.data.find(item => item.key == key);
        return entry ? entry.value : null;
    }
}
const dictionary = new Dictionary();
dictionary.add('hello', 'привіт');
dictionary.add('book', 'книга');
dictionary.add('apple', 'яблуко');
console.log(dictionary.getValue('apple'));
const dictionary2 = new Dictionary();
dictionary2.add(1, true);
dictionary2.add(2, false);
dictionary2.add(7, true);
console.log(dictionary2.getValue(7));
