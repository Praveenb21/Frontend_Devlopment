
const secret = Math.floor(Math.random() * 50) + 1;
const userGuess = 24; // test value

console.log(`Secret Number: ${secret}`);
if (userGuess === secret) {
  console.log("🎯 Correct guess!");
} else if (Math.abs(userGuess - secret) <= 3) {
  console.log("🔥 Very close!");
} else if (userGuess > secret) {
  console.log("Too high!");
} else {
  console.log("Too low!");
}
