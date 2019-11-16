/*ARRAYS ARE OBJECTS->they're composite data type
//arrays have auto incremented numerical keys (aka index)

const myArray = [];
//vs
const myObj = {};
*/

const myArray = [
  "Andrew",
  "Billy",
  "George",
  "Heather",
  "Madison",
  "Marque",
  "Martin",
  "Nikki",
  "Oscar",
  "RhondaLyn",
  "Sidney",
  "Tracie",
  "Wallat"
];
function getMs(namesArr) {
  const mNames = [];

  for (let i = 0; i < namesArr.length; i += 1) {
    if (namesArr[i].startsWith("M")) {
      mNames.push(namesArr[i]);
    }
  }
  return mNames;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

//console.log(myArray[getRandomInt(0, myArray.length - 1)]);
console.log(getMs(myArray));
