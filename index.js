/*Callback function can be called by another function
-A function that is called back by another totally different function (unlike recursion that calls itself back) that gets thrown onto the call stack
-when using call back you should use a closing brace and parentheses
*/

const numbers = [1, 2, 3, 4, 5, 6];
const strings = ["hello", "world", "again"];
const numbersAndStrings = numbers.concat(strings);

/*numbers.forEach(number => {
  console.log(number);
});
*/

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
