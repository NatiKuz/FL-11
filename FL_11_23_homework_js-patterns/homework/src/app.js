class User {
  constructor(name, orderTotalPrice, weekendDiscount, nightDiscount) {
    this.name = name;
    this.orderTotalPrice = orderTotalPrice;
    this.weekendDiscount = weekendDiscount;
    this.nightDiscount = nightDiscount;
    this.bonus = 0;
    this.priceWithDiscount = this.orderTotalPrice;
  }

  makeOrder() {
    /* eslint-disable no-console */
    console.log(`Price after discount and including bonuses is ${this.priceWithDiscount}`);
  }
}

/* eslint-disable no-param-reassign */
function getDiscount(user) {
  if ([0, 6].includes((new Date()).getDay())) {
    user.priceWithDiscount -= user.weekendDiscount;
  }

  const date = new Date();
  const currentHour = date.getHours();
  if (currentHour >= 23 && currentHour < 6) {
    user.priceWithDiscount -= user.nightDiscount;
  }

  user.priceWithDiscount -= user.bonus;
}
/* eslint-enable no-param-reassign */

function setBonus(user) {
  user.bonus = parseInt(user.orderTotalPrice / 100, 10) * 5; // eslint-disable-line no-param-reassign
}

const user = new User('Neti', 555, 10, 5);
user.makeOrder();

setBonus(user);
getDiscount(user);
user.makeOrder();
