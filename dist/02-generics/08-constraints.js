class UniqueCollection {
    constructor() {
        this.data = [];
    }
    add(item) {
        const isInArray = this.data.some(x => x.equals(item));
        if (!isInArray) {
            this.data.push(item);
        }
    }
    showData() {
        console.log(this.data);
    }
}
class Order {
    constructor(id, customer, product) {
        this.id = id;
        this.customer = customer;
        this.product = product;
    }
    equals(item) {
        return item.id === this.id;
    }
}
const order1 = new Order(1, 'John', 'Laptop');
const order2 = new Order(2, 'Robin', 'Mobile Phone');
const order3 = new Order(3, 'Bob', 'Book');
const order4 = new Order(1, 'Stephan', 'Book');
const collection = new UniqueCollection();
collection.add(order1);
collection.add(order2);
collection.add(order3);
collection.add(order4);
collection.showData();
