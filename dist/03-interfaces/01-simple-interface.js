function printValue1(obj) {
    console.log(obj.name);
}
const myObj1 = { value: 10, name: 'Hello World' };
printValue1(myObj1);
const myObj2 = { data: 10, name2: 'Hello World' };
function printValue2(obj) {
    console.log(obj.name);
}
printValue2(myObj1);
const myObj3 = { name: 'World' };
printValue2(myObj3);
