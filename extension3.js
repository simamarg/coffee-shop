// "This" lesson
// Extension 3
var COST_PER_BEAN = 10;

var coffeeShop = {
    beans: 40,
  
    drinkRequirements: {
      latte: {price: 5, beanRequirement: 10},
      americano: {price: 2.5, beanRequirement: 5},
      doubleShot: {price: 7.5, beanRequirement: 15},
      frenchPress: {price: 6, beanRequirement: 12}
    },
  
    makeDrink: function (drinkType) {
        if (this.drinkRequirements[drinkType] !== undefined && this.beans - this.drinkRequirements[drinkType].price >= 0) {
            this.beans -= this.drinkRequirements[drinkType].price;
            console.log(this.beans);
        } else  if (this.drinkRequirements[drinkType] !== undefined) {
            alert("Sorry, we're all out of beans!");
        } else  {
            alert("Sorry, we don't make " + drinkType);
        }
    },

    money: 2000,

    buySupplies : function(beans) {
        if (this.money >= beans * COST_PER_BEAN) {
            this.money -= beans * COST_PER_BEAN;
            this.beans += beans;
            console.log("beans: " + this.beans + " money: " + this.money);
        } else {
            alert("Sorry, you don't have enough money for this purchase");
        }
    },

    buyDrink: function(drinkType) {
        if (this.drinkRequirements[drinkType] !== undefined) {
            this.money += this.drinkRequirements[drinkType].price;
            this.makeDrink(drinkType);
        } else {
            alert("Sorry, we don't make " + drinkType);
        }
    }
};
  
coffeeShop.makeDrink("latte");
coffeeShop.makeDrink("americano");
coffeeShop.makeDrink("filtered");
coffeeShop.makeDrink("doubleShot");
coffeeShop.makeDrink("frenchPress");

coffeeShop.buySupplies(199);
coffeeShop.buySupplies(2);

coffeeShop.buyDrink("latte");
coffeeShop.buyDrink("americano");
coffeeShop.buyDrink("filtered");
coffeeShop.buyDrink("doubleShot");
coffeeShop.buyDrink("frenchPress");