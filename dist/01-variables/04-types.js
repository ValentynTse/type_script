var isDone = false;
console.log(isDone);
var a1_int = 10;
var a2_float = 10.1;
var a3_hex = 0x000a;
var a4_binary = 10;
var a5_octal = 10;
console.log(a1_int);
console.log(a2_float);
console.log(a3_hex);
console.log(a4_binary);
console.log(a5_octal);
var firstName = "Ivan";
var age = 25;
var messageTemplate = "Hello, my name is ".concat(firstName, " I'm ").concat(age, " years old.");
var messageConcat = 'Hello, my name is ' + firstName + " I'm " + age + ' years old.';
console.log(messageTemplate);
console.log(messageConcat);
var mySymbol1 = Symbol('typescript');
console.log(mySymbol1);
var mySymbol2 = Symbol('typescript');
console.log(mySymbol2);
console.log(mySymbol1 === mySymbol2);