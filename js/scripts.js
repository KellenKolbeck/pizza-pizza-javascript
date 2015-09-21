function Pizza(pizzaName, pizzaQuantity, pizzaSize, pizzaToppings) {
  this.pizzaName = pizzaName;
  this.pizzaQuantity = pizzaQuantity;
  this.pizzaSize = pizzaSize;
  this.pizzaToppings = pizzaToppings;
}

Pizza.prototype.pizzaPrice = function () {
  var pizzaPrice = 0;
  if (this.pizzaSize === "small") {
    pizzaPrice = 5.00;
  } else if (this.pizzaSize === "medium") {
      pizzaPrice = 10.00;
  } else if (this.pizzaSize === "large") {
      pizzaPrice = 15.00;
  } else if (this.pizzaSize === "x-large") {
    pizzaPrice = 20.00
  }
 var totalCost = pizzaPrice;
 return totalCost
}




$(document).ready(function() {
  $("form#new-pizza-form").submit(function(event) {
    event.preventDefault();

    $("#new-pizza-form").each(function() {
      var pizzaToppingsList = [];
      var pizzaName = $("input#pizza-name").val();
      var pizzaQuantity = $("select#pizza-quantity").val();
      var pizzaSize = $("select#pizza-size").val();
      var pizzaTopping1 = $("select#pizza-topping1").val()
      var pizzaTopping2 = $("select#pizza-topping2").val()
      var pizzaTopping3= $("select#pizza-topping3").val();
      var pizzaTopping4= $("select#pizza-topping4").val();
      // var pizzaToppings= (pizzaTopping1, pizzaTopping2, pizzaTopping3, pizzaTopping4)
      pizzaToppingsList.push(pizzaTopping1, pizzaTopping2, pizzaTopping3, pizzaTopping4);
      console.log(pizzaToppingsList)
      var newPizza = new Pizza (pizzaName, pizzaQuantity, pizzaSize, pizzaToppingsList)
        $("#pizza-name-cost").text(pizzaName + " " + "will cost" + " " + "$" + newPizza.pizzaPrice());
    });
  });
});
