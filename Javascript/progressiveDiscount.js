
const totalPurchase = 6800;
let discountRate = 0;

if (totalPurchase >= 10000) discountRate = 25;
else if (totalPurchase >= 5000) discountRate = 15;
else if (totalPurchase >= 2000) discountRate = 5;

const discount = totalPurchase * (discountRate / 100);
const finalPrice = Math.round(totalPurchase - discount);

console.log(`Original Total: ₹${totalPurchase}`);
console.log(`Discount: ${discountRate}%`);
console.log(`Final Price: ₹${finalPrice}`);
