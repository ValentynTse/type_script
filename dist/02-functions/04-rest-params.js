function printValue(message) {
    var names = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        names[_i - 1] = arguments[_i];
    }
    console.log(message);
    for (var i = 0; i < names.length; i++) {
        console.log(names[i]);
    }
}
printValue("sample 1");
printValue("sample 2", "1", "2");
printValue("sample 3", "1", "2", "abc");
