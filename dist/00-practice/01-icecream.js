function validateInput(promptMessage, validOptions) {
    var userInput = null;
    while (!userInput || !validOptions.includes(userInput)) {
        userInput = prompt(promptMessage);
        if (!userInput || !validOptions.includes(userInput)) {
            alert("Будь ласка, введіть коректний варіант відповіді");
        }
    }
    return userInput;
}
function calculateIceCreamCost() {
    var smallCupPrice = 10;
    var largeCupPrice = 25;
    var toppingPrices = {
        "1": 5,
        "2": 6,
        "3": 10,
    };
    var marshmallowPrice = 5;
    var totalPrice = 0;
    var sizeInput = validateInput("Виберіть розмір морозива (маленький: 1 або великий: 2)", ["1", "2"]);
    if (sizeInput === "1") {
        totalPrice += smallCupPrice;
    }
    else if (sizeInput === "2") {
        totalPrice += largeCupPrice;
    }
    var chocolateToppingInput = validateInput("Чи бажаєте наповнювач шоколад? (так: 1 або ні: 0)", ["0", "1"]);
    if (chocolateToppingInput === "1") {
        totalPrice += toppingPrices["1"];
    }
    var caramelToppingInput = validateInput("Чи бажаєте наповнювач карамель? (так: 1 або ні: 0)", ["0", "1"]);
    if (caramelToppingInput === "1") {
        totalPrice += toppingPrices["2"];
    }
    var berriesToppingInput = validateInput("Чи бажаєте наповнювач ягоди? (так: 1 або ні: 0)", ["0", "1"]);
    if (berriesToppingInput === "1") {
        totalPrice += toppingPrices["3"];
    }
    var marshmallowInput = validateInput("Чи бажаєте посипати маршмелоу (так: 1 або ні: 0)", ["0", "1"]);
    if (marshmallowInput === "1") {
        totalPrice += marshmallowPrice;
    }
    return totalPrice;
}
var iceCreamCost = calculateIceCreamCost();
console.log("\u0412\u0430\u0440\u0442\u0456\u0441\u0442\u044C \u043C\u043E\u0440\u043E\u0437\u0438\u0432\u0430: ".concat(iceCreamCost, " \u0433\u0440\u043D"));
