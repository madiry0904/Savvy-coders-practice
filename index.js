//Array Concepts
//call an array by using const myArray = [];

const numbers = [1, 2, 3, 4];
const strings = ["hi", "world"];

const numbersAndStrings = numbers.concat(strings);

function updatedNumbersAndStrings(originalArray, stringUpdate, numberUpdate) {
  const updatedNumbersAndStrings = [];
  for (let i = 0; i < originalArray.length; i += 1) {
    if (typeof originalArray[i] === "string") {
      updatedNumbersAndStrings.push((originalArray[i] += stringUpdate));
    } else {
      updatedNumbersAndStrings.push((originalArray[i] += numberUpdate));
    }
  }
  return updatedNumbersAndStrings;
}

console.log(updatedNumbersAndStrings(numbersAndStrings, "HELLO", 275));
//console.log("numbers is", numbers);
//console.log("strings is", strings);
//console.log("numbersAndStrings is", numbersAndStrings);
