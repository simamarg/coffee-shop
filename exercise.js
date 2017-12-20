// "This" lesson
// Individual exercise
var coffeeShop = {
  beans: 40,

  drinkRequirements: {
    latte: 10,
    americano: 5,
    doubleShot: 15,
    frenchPress: 12
  },

  makeDrink: function (drinkType) {
    if (this.drinkRequirements[drinkType]) {
      if (this.beans - this.drinkRequirements[drinkType] >= 0) {
        this.beans -= this.drinkRequirements[drinkType];
        console.log(this.beans);
      } else {
        alert("Sorry, we're all out of beans!");
      }
    } else {
      alert("Sorry, we don't make " + drinkType);
    }
  }
}

coffeeShop.makeDrink("latte");
coffeeShop.makeDrink("americano");
coffeeShop.makeDrink("filtered");
coffeeShop.makeDrink("doubleShot");
coffeeShop.makeDrink("frenchPress");