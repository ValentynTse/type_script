function repeatOperation(count, callback) {
    console.log('start');
    for (var i = 0; i < count; i++) {
        callback();
    }
    console.log('stop');
}
var settings = {
    displayName: 'test object',
    test1: function () {
        repeatOperation(3, function () {
            console.log(this.displayName);
        }.bind(this));
    },
    test2: function () {
        var _this = this;
        repeatOperation(2, function () { return console.log(_this.displayName); });
    },
};
settings.test1();
