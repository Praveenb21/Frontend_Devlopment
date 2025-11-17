
const marks = [90, 85, 88, 92, 80]; // marks of 5 subjects
const anyFail = marks.some(m => m < 35);

if (anyFail) {
  console.log("Detained (failed in one or more subjects)");
} else {
  const total = marks.reduce((a, b) => a + b, 0);
  const percentage = total / marks.length;
  if (percentage >= 85) console.log("Promoted with Distinction");
  else if (percentage >= 50) console.log("Promoted");
  else console.log("Detained");
}
