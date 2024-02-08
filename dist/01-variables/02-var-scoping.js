function var1() {
    console.log(i);
    console.log(test);
    for (var i = 0; i < 10; i++) {
        var test = i;
    }
    console.log(i);
    console.log(test);
}
function var2() {
    var a = 10;
    var a = 20;
    console.log(a);
}
function var3() {
    for (var i = 0; i < 5; i++) {
        setTimeout(function () {
            console.log(i);
        }, 10);
    }
}
