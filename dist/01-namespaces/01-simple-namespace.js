var Sample1;
(function (Sample1) {
    class MyClass1 {
        message() {
            console.log('Sample1.MyClass1.message');
        }
    }
    Sample1.MyClass1 = MyClass1;
    class MyClass2 {
        message() {
            console.log('Sample1.MyClass2.message');
        }
    }
})(Sample1 || (Sample1 = {}));
var Sample2;
(function (Sample2) {
    class MyClass1 {
        message() {
            console.log('Sample2.MyClass1.message');
        }
    }
    Sample2.MyClass1 = MyClass1;
    class MyClass2 {
        message() {
            console.log('Sample2.MyClass2.message');
        }
    }
})(Sample2 || (Sample2 = {}));
const temp1 = new Sample1.MyClass1();
temp1.message();
const temp2 = new Sample2.MyClass1();
temp2.message();
