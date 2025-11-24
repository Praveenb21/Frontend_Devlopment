function Product(name, price) {
  this.name = name;
  this.price = price;
}

Product.prototype.applyDiscount = function(percent) {
  const discountFraction = percent / 100;
  const discountedPrice = this.price * (1 - discountFraction);
  return Number(discountedPrice.toFixed(2));
};

const laptop = new Product("Laptop", 70000);
const headphones = new Product("Headphones", 2500);
const backpack = new Product("Backpack", 1200);

console.log(laptop.name, laptop.applyDiscount(10));
console.log(headphones.name, headphones.applyDiscount(25));
console.log(backpack.name, backpack.applyDiscount(5));
