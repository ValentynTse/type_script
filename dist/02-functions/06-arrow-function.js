var increment = function (x) { return x + 1; };
var incrementArrow1 = function (x) { return x + 1; };
var incrementArrow2 = function (x) { return x + 1; };
var incrementArrow3 = function (x) { return x + 1; };
var myFunc = function (callback) {
    callback(10);
};
myFunc(function (x) { return x + 1; });
