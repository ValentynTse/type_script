class Shape {
    constructor(name) {
        this.name = name;
    }
    getInfo() {
        return `This is ${this.name}.`;
    }
}
class Rect extends Shape {
    constructor(width, height) {
        super('Rectangle');
        this.width = width;
        this.height = height;
    }
    getInfo() {
        const baseInfo = super.getInfo();
        return `${baseInfo} Height = ${this.height}, Width = ${this.width}`;
    }
}
const newRect = new Rect(100, 200);
console.log(newRect.getInfo());
class Circle extends Shape {
    constructor(radius) {
        super('Circle');
        this.radius = radius;
    }
    getInfo() {
        const baseInfo = super.getInfo();
        return `${baseInfo} Radius = ${this.radius}`;
    }
}
const newCircle = new Circle(10);
console.log(newCircle.getInfo());
const shapes = [];
shapes.push(new Rect(100, 200));
shapes.push(new Circle(10));
shapes.push(new Circle(43));
shapes.push(new Rect(10, 30));
for (let i = 0; i < shapes.length; ++i) {
    const info = shapes[i].getInfo();
    console.log(info);
}
