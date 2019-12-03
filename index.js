const myArr = [1, 2, 3, 4];
const myOtherArr = [4, 5, 6];
const somethingElse = [];

Array.prototype.myMapper = function() {
  return `I will not map`;
};

console.log(myArr.myMapper());
console.log(myOtherArr.myMapper());


//Splice Arrays
const fruits = [
  "apple",
  "kiwi",
  "pineapple",
  "jackfruit",
  "dragonfruit",
  "pineapple",
  "mango",
  "guava",
  "strawberry"
];
const spliceReturns = fruits.splice(3, 3, "raspberries"); //remember index starts at 0
console.log(fruits);
console.log(spliceReturns);

//Array Quiz
const A = ["Harder", "Better", "Faster", "Stronger"];
const B = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];
const C = [
  "Urban Chestnut",
  2009,
  "4Hands",
  2011,
  "Rockwell",
  2018
];
const D = [false, 0, "F", true, 1, "T"];
*/
console.log(C);


const directions = ["North", "East", "South", "West"];
directions.pop();//removes West
directions.shift(); //removes North
directions.push("Left"); //Puts left at the end
directions.unshift("Up"); //puts up at the front

console.log(directions);
