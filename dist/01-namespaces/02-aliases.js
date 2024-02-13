var Shapes;
(function (Shapes) {
    class Circle {
        constructor() {
            console.log('Circle');
        }
    }
    Shapes.Circle = Circle;
    class Square {
        constructor() {
            console.log('Square');
        }
    }
    Shapes.Square = Square;
    let Complex;
    (function (Complex) {
        class Image {
            constructor() {
                console.log('Image');
            }
        }
        Complex.Image = Image;
        class Animation {
            constructor() {
                console.log('Animation');
            }
        }
        Complex.Animation = Animation;
    })(Complex = Shapes.Complex || (Shapes.Complex = {}));
})(Shapes || (Shapes = {}));
var complex = Shapes.Complex;
const img1 = new complex.Image();
const img2 = new Shapes.Complex.Image();
