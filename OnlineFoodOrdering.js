const menu = {
  Burger: 120,
  Pizza: 250,
  Fries: 80,
  Coke: 40,
  Salad: 90
};

function calculateBill(orderItems) {
  const priceList = orderItems.map(item => {
    if (!(item in menu)) throw new Error(`Invalid menu item ordered: ${item}`);
    return menu[item];
  });

  const totalAmount = priceList.reduce((acc, price) => acc + price, 0);
  return totalAmount;
}

try {
  const order1 = ["Burger", "Fries", "Coke"];
  console.log("Order1 total:", calculateBill(order1));

  const order2 = ["Pizza", "Salad", "IceCream"];
  console.log("Order2 total:", calculateBill(order2));
} catch (error) {
  console.log("Order processing error:", error.message);
}
