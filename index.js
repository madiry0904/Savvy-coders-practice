const strs = [
  "hello",
  "something",
  3,
  "boolean",
  "hello",
  "hello",
  "hell",
  "world",
  "hello"
];
//TODO: write a fxn that takes an array and returns boolean representing if the word "hello" exists in the array and then lets see if there's anything in that new array with the true "hello"
//this example is the long way to do it

function booleanHello(dataSet) {
  return dataSet.map(d => d === "hello").filter(d => d === true).length;
}
console.log(booleanHello(strs));

//the above says go into the dataset, map over the dataset for the keyword "hello" (will return booleans) then filter over to pull out the ones that do say hello. Use .length to see how many are in the new array

//includes keyword does the above function -> uses map and filter not length so just seeing if the funciton includes hello
console.log(strs.includes("hello"));

//TODO: write a function that takes an array of values and a target value and returns how many times that target value exists in the array

function countOccurences(dataSet, target) {
  return dataSet.filter(d => d === target).length;
}
console.log(countOccurences(strs, "hello"));
