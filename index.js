//push
const fruits = ["apples", "oranges", "pineapple"];
const pushed = fruits.push("grapefruit");
console.log(pushed);
//pop
const fruit = ["apples", "oranges", "grapefruit"];
const frArray = fruit.pop();
console.log(frArray);
//slice finds the index and deletes everything above it
const fruitz = ["apples", "oranges", "pineapple", "jackfruit"];
const frSlice = fruitz.slice(fruitz.indexOf("pineapple"));
console.log(frSlice);
//slice with 2 arguments-includes the start but excludes the ending
const fr = ["Pineapple", "apple", "grapefruit", "oranges"];
const bestFruits = fr.slice(fr.pineappleIndex, 2);
console.log(bestFruits);
//splice changes the contents of an array by removing or replacing existing elements or adding new elements in it's place
//use splice to remove jackfruit, dragonfruit, and pineapple and replace with raspberries
const fruit1 = [
  "apple",
  "kiwi",
  "pineapple",
  "jackfruit",
  "dragonfruit",
  "pineapple",
  "mango",
  "mango",
  "guava",
  "strawberry"
];
const spliceReturns = fruit1.splice(3, 3, "raspberries");
console.log(fruit1);
