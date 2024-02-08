function calculateIceCreamCost(): number {
   const size = prompt("Виберіть розмір морозива: Маленький (10грн) або Великий (25грн)");
   const fillings = prompt("Виберіть начинку (шоколад, карамель, ягоди), розділіть їх комою (наприклад, шоколад, карамель)");
   const marshmallow = prompt("Бажаєте додати маршмелоу? (yes/no)");

   let cost = 0;

   if (size === "Маленький") {
       cost += 10;
   } else if (size === "Великий") {
       cost += 25;
   }

   const chosenFillings = fillings.split(",").map(item => item.trim());

   chosenFillings.forEach(filling => {
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

const totalCost = calculateIceCreamCost();
console.log(`Вартість морозива: ${totalCost} грн`);
