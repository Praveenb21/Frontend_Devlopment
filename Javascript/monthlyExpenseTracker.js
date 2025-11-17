
const expenses = [12000, 3000, 8000, 2500, 1500]; // food, travel, rent, bills, leisure
const total = expenses.reduce((a, b) => a + b, 0);
const avg = total / expenses.length;

const tax = total * 0.10;
const finalAmount = (total + tax).toFixed(2);

console.log(`Total Expenses: ₹${total}`);
console.log(`Average Expense: ₹${avg.toFixed(2)}`);
console.log(`Final Amount (with 10% tax): ₹${finalAmount}`);
