
const userName = "Yash";
const age = 21;
const isStudent = true;
const hobbies = ["Coding", "Music", "Travel"];
const profile = { city: "Ahmedabad", course: "Web Dev" };
const score = null;
let futureGoal;

const summary = [
  { Label: "Name", Value: userName, Type: typeof userName },
  { Label: "Age", Value: age, Type: typeof age },
  { Label: "Student", Value: isStudent, Type: typeof isStudent },
  { Label: "Hobbies", Value: hobbies, Type: Array.isArray(hobbies) ? "array" : typeof hobbies },
  { Label: "Profile", Value: profile, Type: typeof profile },
  { Label: "Score", Value: score, Type: typeof score },
  { Label: "Future Goal", Value: futureGoal, Type: typeof futureGoal }
];

console.table(summary);
