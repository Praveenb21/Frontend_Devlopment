const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

const validNumbers = [];
const invalidNumbers = [];

for (let i = 0; i < apiData.length; i++) {
  const raw = apiData[i];
  const num = Number(raw);
  const bool = raw === "true" || raw === true;
  const str = String(raw);

  if (!Number.isNaN(num) && str.trim() !== "" && !/[a-zA-Z]/.test(str)) {
    validNumbers.push(num);
    console.log(`Index ${i} | Raw: ${raw} | Number: ${num} | Boolean: ${bool} | String: "${str}"`);
  } else {
    invalidNumbers.push({ index: i, value: raw, number: num });
  }
}

console.log("VALID NUMBERS:", validNumbers);
console.log("INVALID ENTRIES:");
console.table(invalidNumbers);
