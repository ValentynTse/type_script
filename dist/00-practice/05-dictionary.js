class MyDictionary {
    constructor() {
        this.terms = {};
    }
    get(key) {
        const term = this.terms[key];
        if (term) {
            return term.value;
        }
        return undefined;
    }
    set(key, value, description) {
        this.terms[key] = { value, description };
    }
}
const myDictionary = new MyDictionary();
myDictionary.set("key1", 10, "Description 1");
myDictionary.set("key2", 20, "Description 2");
console.log(myDictionary.get("key1"));
console.log(myDictionary.get("key2"));
console.log(myDictionary.get("key3"));
const stringDictionary = new MyDictionary();
stringDictionary.set("name", "John", "User's name");
stringDictionary.set("email", "john@example.com", "User's email");
console.log(stringDictionary.get("name"));
console.log(stringDictionary.get("email"));
console.log(stringDictionary.get("age"));
const bookDictionary = new MyDictionary();
bookDictionary.set("book1", { title: "Harry Potter", author: "J.K. Rowling" }, "Fantasy novel");
bookDictionary.set("book2", { title: "1984", author: "George Orwell" }, "Dystopian fiction");
console.log(bookDictionary.get("book1"));
console.log(bookDictionary.get("book2"));
console.log(bookDictionary.get("book3"));
const productDictionary = new MyDictionary();
productDictionary.set("product1", { name: "Laptop", price: 1000 }, "High-end laptop");
productDictionary.set("product2", { name: "Smartphone", price: 500 }, "Flagship smartphone");
console.log(productDictionary.get("product1"));
console.log(productDictionary.get("product2"));
console.log(productDictionary.get("product3"));
