const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function add1(n) {
  return n + 1;
}

function double(n) {
  return n * 2;
}

function add1AndDouble(n) {
  return double(add1(n));
}

function doubleAndAdd1(n) {
  return add1(double(n));
}

//TODO: Add 1 and double each num inside of nums
const numsArrayAddedOneAndDoubled = nums.map(anyNameIWant =>
  add1AndDouble(anyNameIWant)
);
//console.log(numsArrayAddedOneAndDoubled);

//TODO: recreate numsArrayAddedOneAndDoubled only using 1st two functions

//This is functional composition
const addTwoArrays = nums.map(num => add1(num)).map(num2 => double(num2));
//console.log(addTwoArrays); ///this works or you can just log directly aka below
//console.log(nums.map(num => double(num)).map(num2 => add1(num2)));

// Pure function are when you don't have to grab something outside of the scope- no console.log in them

//Pure functions are copy and paste functions and have an explicit return

//Functional programming employs function composition with pure functions
//filter must return a boolean

//TODO :filter out all odd numbers
const results = nums.filter(num => num % 2 === 1);
console.log(results);

//TODO: Filter out all odd numbers and then repeat
const addOddNumbers = nums
  .filter(num => num % 2 == 1)
  .map(num => add1(num))
  .map(num2 => double(num2));

console.log(addOddNumbers);
