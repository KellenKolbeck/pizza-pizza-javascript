

describe("Pizza", function() {
  it("creates a new pizza", function() {
    var testPizza = new Pizza("Kellen's Pizza", "2", "small", "sausage");
    expect(testPizza.pizzaName).to.equal("Kellen's Pizza");
    expect(testPizza.pizzaQuantity).to.equal("2");
    expect(testPizza.pizzaSize).to.equal("small");
    expect(testPizza.pizzaToppings).to.equal("sausage");
  });

  it("calculates the cost of a pizza", function() {
    var testPizza = new Pizza("Bill and Ted's Pizza", "1", "large", "pepperoni", "mushrooms", "onions", "");
    expect(testPizza.pizzaPrice()).to.eql(15);

  });
});
