/*Callback function can be called by another function
-A function that is called back by another totally different function (unlike recursion that calls itself back) that gets thrown onto the call stack
-when using call back you should use a closing brace and parentheses


const numbers = [1, 2, 3, 4, 5, 6];
const strings = ["hello", "world", "again"];
const numbersAndStrings = numbers.concat(strings);

/*numbers.forEach(number => {
  console.log(number);
});


function updatedNumbersAndStrings(originalArr, stringUpdate, numberUpdate) {
  const updatedNumbersAndStrings = [];
  originalArr.forEach(el => {
    console.log("current element is", el);

    if (typeof el === "string") {
      updatedNumbersAndStrings.push((el += stringUpdate));
    } else {
      updatedNumbersAndStrings.push((el += numberUpdate));
    }
    return updatedNumbersAndStrings;
  });
}

console.log(updatedNumbersAndStrings(numbersAndStrings, "Hello", 236));
*/
//ARRAY SUPERPOWER MAP takes a callback function acts on each and every element
//map automatically creates an array and returns a new array with no mutations
// we don't nee dto reacch outside scope to an empty array
//map will always return an array that is the same length as the original array
// myArray.map(callback fxn)
const numbers = [1, 2, 3, 4, 5, 6];
const strings = ["hello", "world", "again"];
const numbersAndStrings = numbers.concat(strings);

const results = numbers.map(number => {
  return number + 1;
});
console.log(numbers);
console.log(results);

function updatedNumbersAndStrings(originalArr, stringUpdate, numberUpdate) {
  return originalArr.map(el => {
    if (typeof el === "string") {
      return (el += stringUpdate);
    }

    return (el += numberUpdate);
  });
}
console.log(updatedNumbersAndStrings(numbersAndStrings, "Hi", 236));
