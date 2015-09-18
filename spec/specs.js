

describe("Pizza", function() {
  it("creates a new pizza", function() {
    var testPizza = new Pizza("Kellen's Pizza", 2, "L", "Sausage");
    expect(testPizza.pizzaName).to.equal("Kellen's Pizza");
    expect(testPizza.pizzaQuantity).to.equal(2);
    expect(testPizza.pizzaSize).to.equal("L");
    expect(testPizza.pizzaToppings).to.equal("Sausage");
  });
});



//calculates the cost of a pizza
