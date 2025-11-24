"use strict";

/* Product Class */
class Product {
  constructor(id, name, price, category) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.category = category;
  }

  applyDiscount(percent) {
    this.price -= this.price * (percent / 100);
  }

  getDetails() {
    return `ID: ${this.id} | ${this.name} | ₹${this.price} | Category: ${this.category}`;
  }
}

/* Creating Multiple Products */
const products = [
  new Product(1, "Laptop", 55000, "Electronics"),
  new Product(2, "Mouse", 699, "Electronics"),
  new Product(3, "Shoes", 2200, "Fashion"),
  new Product(4, "Watch", 1200, "Fashion")
];

/* Apply Discount to Every Product */
products.forEach(p => p.applyDiscount(10));

/* Filter products > 1000 */
const expensiveProducts = products.filter(p => p.price > 1000);

console.log("Products above ₹1000:");
expensiveProducts.forEach(p => console.log(p.getDetails()));
