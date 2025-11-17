// 8 random scores
let scores = Array.from({ length: 8 }, () =>
  Math.floor(Math.random() * 71) + 30
);

// Highest & lowest
const highest = Math.max(...scores);
const lowest = Math.min(...scores);

// Average
const average = scores.reduce((a, b) => a + b, 0) / scores.length;

// Passed ≥ 50
const passed = scores.filter(s => s >= 50).length;

console.log("Scores:", scores);
console.log("Highest:", highest);
console.log("Lowest:", lowest);
console.log("Average:", average.toFixed(2));
console.log("Students Passed:", passed);
