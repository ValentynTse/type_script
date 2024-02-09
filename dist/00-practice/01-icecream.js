function validateInput(promptMessage, validOptions) {
    let userInput = null;
    while (!userInput || !validOptions.includes(userInput)) {
        userInput = prompt(promptMessage);
        if (!userInput || !validOptions.includes(userInput)) {
            alert("Будь ласка, введіть коректний варіант відповіді");
        }
    }
    return userInput;
}
function calculateIceCreamCost() {
    const smallCupPrice = 10;
    const largeCupPrice = 25;
    const toppingPrices = {
        "1": 5,
        "2": 6,
        "3": 10,
    };
    const marshmallowPrice = 5;
    let totalPrice = 0;
    const sizeInput = validateInput("Виберіть розмір морозива (маленький: 1 або великий: 2)", ["1", "2"]);
    if (sizeInput === "1") {
        totalPrice += smallCupPrice;
    }
    else if (sizeInput === "2") {
        totalPrice += largeCupPrice;
    }
    const chocolateToppingInput = validateInput("Чи бажаєте наповнювач шоколад? (так: 1 або ні: 0)", ["0", "1"]);
    if (chocolateToppingInput === "1") {
        totalPrice += toppingPrices["1"];
    }
    const caramelToppingInput = validateInput("Чи бажаєте наповнювач карамель? (так: 1 або ні: 0)", ["0", "1"]);
    if (caramelToppingInput === "1") {
        totalPrice += toppingPrices["2"];
    }
    const berriesToppingInput = validateInput("Чи бажаєте наповнювач ягоди? (так: 1 або ні: 0)", ["0", "1"]);
    if (berriesToppingInput === "1") {
        totalPrice += toppingPrices["3"];
    }
    const marshmallowInput = validateInput("Чи бажаєте посипати маршмелоу (так: 1 або ні: 0)", ["0", "1"]);
    if (marshmallowInput === "1") {
        totalPrice += marshmallowPrice;
    }
    return totalPrice;
}
const iceCreamCost = calculateIceCreamCost();
console.log(`Вартість морозива: ${iceCreamCost} грн`);
