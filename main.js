var coffeeShop = {
  beans: 40,
  priceOfOneBean: 0.25,   // each bin costs 25 cents
  money: 100,

  drinkRequirements: {
    latte: { beanRequirement: 10, price: 3},
    americano: { beanRequirement: 5, price: 2},
    doubleShot: { beanRequirement: 15, price: 4},
    frenchPress: { beanRequirement: 12, price: 3.5}
  },

  makeDrink: function (drinkType) {
      if (this.drinkRequirements[drinkType] && this.beans >= this.drinkRequirements[drinkType].beanRequirement) {
        this.beans -= this.drinkRequirements[drinkType].beanRequirement;
        console.log(this.beans);
      }
      else if (this.drinkRequirements[drinkType] && this.beans < this.drinkRequirements[drinkType].beanRequirement) {
        alert("Sorry, we're all out of beans!");
      }
      else {
        alert("Sorry, we don't make '"+ drinkType + "'");
      }
    },

    buyDrink: function (drinkType) {
      if (this.drinkRequirements[drinkType]) {
        this.money += this.drinkRequirements[drinkType].price;
      }
      this.makeDrink(drinkType);
    },

    buySupplies: function (numOfBeans) {
      if (this.money >= (numOfBeans * this.priceOfOneBean)) {
        this.beans += numOfBeans;
        this.money -= (numOfBeans * this.priceOfOneBean);
      }
      else {
        alert("Sorry, You don't have enough money to buy " + numOfBeans + " beans");
      }
  }
};

// TESTING FUNCTIONALITY //
coffeeShop.makeDrink("latte");
coffeeShop.makeDrink("americano");
coffeeShop.makeDrink("filtered");
coffeeShop.makeDrink("doubleShot");
coffeeShop.makeDrink("frenchPress");
console.log("money before: " + coffeeShop.money);
console.log("beans before: " + coffeeShop.beans);
coffeeShop.buySupplies(120);
console.log("money now: " + coffeeShop.money);
console.log("beans now: " + coffeeShop.beans);
coffeeShop.buyDrink("latte");
coffeeShop.buyDrink("americano");
coffeeShop.buyDrink("doubleShot");
coffeeShop.buyDrink("frenchPress");
coffeeShop.buyDrink("coco");
console.log("money now: " + coffeeShop.money);
