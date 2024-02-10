function test1() {
    console.log(this);
}
test1();
var someObj = {
    name: 'test',
    testFunc: test1,
};
someObj.testFunc();
var someInstance = new test1();
console.log(someInstance);
function test2(x, y) {
    console.log(x + y);
    console.log(this);
}
test2(10, 20);
var someTestObj = {
    name: 'test object',
};
test2.call(someTestObj, 10, 20);
test2.apply(someTestObj, [30, 40]);
var newFunc = test2.bind(someTestObj, 60);
newFunc(50);
