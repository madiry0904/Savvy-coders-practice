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
//write a fxn that takes an array and returns boolean representing if the word "hello" exists in the array and then lets see if there's anything in that new array with the true "hello"
//this example is the long way to do it

function booleanHello(dataSet) {
  return dataSet.map(d => d === "hello").filter(d => d === true).length;
}
console.log(booleanHello(strs));

//the above says go into the dataset, map over the dataset for the keyword "hello" (will return booleans) then filter over to pull out the ones that do say hello. Use .length to see how many are in the new array

//includes does the above function
console.log(strs.includes("hello"));
