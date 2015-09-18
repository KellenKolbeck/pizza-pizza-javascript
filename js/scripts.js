function Pizza(pizzaName, pizzaQuantity, pizzaSize, pizzaToppings) {
  this.pizzaName = pizzaName;
  this.pizzaQuantity = pizzaQuantity;
  this.pizzaSize = pizzaSize;
  this.pizzaToppings = pizzaToppings;
}

Pizza.prototype.pizzaPrice = function () {
  var pizzaPrice = 0;
  if (this.pizzaSize === "small") {
    pizzaPrice = 5;
  } else if (this.pizzaSize === "medium") {
      pizzaPrice = 10;
  } else if (this.pizzaSize === "large") {
      pizzaPrice = 15;
  } else if (this.pizzaSize === "x-large") {
    pizzaPrice = 20
  }
  return pizzaPrice
}




$(document).ready(function() {

});
