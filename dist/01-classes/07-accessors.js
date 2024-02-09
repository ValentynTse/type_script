class Rectangle {
    getWidth() {
        return this._width;
    }
    setWidth(value) {
        if (value <= 0) {
            this._width = 1;
        }
        else {
            this._width = value;
        }
    }
    get height() {
        return this._height;
    }
    set height(value) {
        if (value <= 0) {
            this._height = 1;
        }
        else {
            this._height = value;
        }
    }
    calculateArea() {
        return this._width * this._height;
    }
}
const rect = new Rectangle();
rect.setWidth(100);
console.log(rect.getWidth());
rect.height = -20;
console.log(rect.height);
const rectArea = rect.calculateArea();
console.log(rectArea);
