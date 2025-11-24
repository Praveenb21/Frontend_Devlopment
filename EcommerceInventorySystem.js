const productsInventory = [
  { id: 1, name: "Pen", category: "Stationery", price: 20, stock: 50 },
  { id: 2, name: "Notebook", category: "Stationery", price: 80, stock: 15 },
  { id: 3, name: "Water Bottle", category: "Accessories", price: 200, stock: 5 },
  { id: 4, name: "T-Shirt", category: "Clothing", price: 499, stock: 0 },
  { id: 5, name: "Jeans", category: "Clothing", price: 1299, stock: 8 }
];

function getLowStockProducts(products) {
  return products.filter(p => p.stock <= 10);
}

function sortProductsByPrice(products) {
  return [...products].sort((a, b) => a.price - b.price);
}

function calculateTotalInventoryValue(products) {
  return products.reduce((acc, p) => acc + p.price * p.stock, 0);
}

function groupByCategory(products) {
  return products.reduce((grouped, p) => {
    if (!grouped[p.category]) grouped[p.category] = [];
    grouped[p.category].push(p);
    return grouped;
  }, {});
}

console.log(getLowStockProducts(productsInventory));
console.log(sortProductsByPrice(productsInventory));
console.log(calculateTotalInventoryValue(productsInventory));
console.log(groupByCategory(productsInventory));
