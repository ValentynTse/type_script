class StringIterator {
    constructor(...args) {
        this.data = args;
    }
    *toGenerate() {
        for (const value of this.data) {
            if (!isNaN(Number(value))) {
                console.error(`Error: Numeric value "${value}" is not allowed.`);
                return;
            }
            yield value;
        }
    }
}
const myIterator = new StringIterator("one", "two", "three", "4", "five");
const generator = myIterator.toGenerate();
for (const value of generator) {
    console.log(value);
}
