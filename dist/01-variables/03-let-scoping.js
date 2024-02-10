function let1() {
    for (var i = 0; i < 10; i++) {
        var test = i;
    }
}
function let2() {
    var a = 10;
    console.log(a);
}
function let3() {
    var _loop_1 = function (i) {
        setTimeout(function () {
            console.log(i);
        }, 10);
    };
    for (var i = 0; i < 5; i++) {
        _loop_1(i);
    }
}
