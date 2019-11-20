//ARRAYS CONCEPTS
//iterate over an array with while and separate out the numbers and strings

const numbersAndStrings = [
  12,
  "ab",
  3,
  6,
  "c",
  90,
  "web",
  "dev",
  1440,
  "Rusty"
];

for (let i = 0; i <= numbersAndStrings.length; i += 1) {
  console.log(numbersAndStrings[i]);
}
const popped = numbersAndStrings.pop();
console.log(numbersAndStrings);
console.log(popped);
