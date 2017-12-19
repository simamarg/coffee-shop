// "This" lesson
// Extensions 1 + 2
var COST_PER_BEAN = 10;

var coffeeShop = {
    beans: 40,
  
    drinkRequirements: {
      latte: 10,
      americano: 5,
      doubleShot: 15,
      frenchPress: 12
    },
  
    makeDrink: function (drinkType) {
        if (this.drinkRequirements[drinkType] !== undefined && this.beans - this.drinkRequirements[drinkType] >= 0) {
            this.beans -= this.drinkRequirements[drinkType];
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
    }
};
  
coffeeShop.makeDrink("latte");
coffeeShop.makeDrink("americano");
coffeeShop.makeDrink("filtered");
coffeeShop.makeDrink("doubleShot");
coffeeShop.makeDrink("frenchPress");

coffeeShop.buySupplies(199);
coffeeShop.buySupplies(2);