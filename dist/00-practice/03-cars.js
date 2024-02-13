class Car {
    brand;
    year;
    constructor(brand, year) {
        this.brand = brand;
        this.year = year;
    }
}
class BMW extends Car {
    model;
    constructor(brand, year, model) {
        super(brand, year);
        this.model = model;
    }
    showDetails() {
        console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`);
    }
}
class Mercedes extends Car {
    color;
    constructor(brand, year, color) {
        super(brand, year);
        this.color = color;
    }
    showDetails() {
        console.log(`Brand: ${this.brand}, Color: ${this.color}, Year: ${this.year}`);
    }
}
class Audi extends Car {
    price;
    constructor(brand, year, price) {
        super(brand, year);
        this.price = price;
    }
    showDetails() {
        console.log(`Brand: ${this.brand}, Price: ${this.price} USD, Year: ${this.year}`);
    }
}
const bmw1 = new BMW("BMW", 2020, "X5");
const bmw2 = new BMW("BMW", 2019, "X3");
const mercedes1 = new Mercedes("Mercedes", 2018, "Black");
const mercedes2 = new Mercedes("Mercedes", 2021, "White");
const audi1 = new Audi("Audi", 2017, 25000);
const audi2 = new Audi("Audi", 2016, 20000);
bmw1.showDetails();
bmw2.showDetails();
mercedes1.showDetails();
mercedes2.showDetails();
audi1.showDetails();
audi2.showDetails();
