class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
class Vector {
    constructor() {
        this.points = [];
    }
    add(item) {
        this.points.push(item);
    }
    values() {
        return new VectorIterator(this.points);
    }
}
class VectorIterator {
    constructor(points) {
        this.points = points;
        this.current = 0;
    }
    next() {
        if (this.current < this.points.length) {
            return {
                done: false,
                value: this.points[this.current++],
            };
        }
        else {
            return {
                done: true,
                value: null,
            };
        }
    }
}
const vector = new Vector();
vector.add(new Point(10, 20));
vector.add(new Point(1, 30));
vector.add(new Point(0, 2));
vector.add(new Point(15, 12));
const iterator = vector.values();
let next = iterator.next();
while (!next.done) {
    console.log(next.value);
    next = iterator.next();
}
