function calculateIceCreamCost() {
    var size = prompt("Виберіть розмір морозива: Маленький (10грн) або Великий (25грн)");
    var fillings = prompt("Виберіть начинку (шоколад, карамель, ягоди), розділіть їх комою (наприклад, шоколад, карамель)");
    var marshmallow = prompt("Бажаєте додати маршмелоу? (yes/no)");
    var cost = 0;
    if (size === "Маленький") {
        cost += 10;
    }
    else if (size === "Великий") {
        cost += 25;
    }
    var chosenFillings = fillings.split(",").map(function (item) { return item.trim(); });
    chosenFillings.forEach(function (filling) {
        switch (filling) {
            case "шоколад":
                cost += 5;
                break;
            case "карамель":
                cost += 6;
                break;
            case "ягоди":
                cost += 10;
                break;
        }
    });
    if (marshmallow === "yes") {
        cost += 5;
    }
    return cost;
}
var totalCost = calculateIceCreamCost();
console.log("\u0412\u0430\u0440\u0442\u0456\u0441\u0442\u044C \u043C\u043E\u0440\u043E\u0437\u0438\u0432\u0430: ".concat(totalCost, " \u0433\u0440\u043D"));
