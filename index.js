const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/*
 * TODO: Write a fxn. that grabs all of the odd elements in any ARRAY of NUMBERS.
 */

function filterOdds(dataSet) {
  return dataSet.filter(num => num % 2 === 1);
}
console.log(filterOdds(nums));

// TODO: Write a funtion that returns the sum of all the numbers in any ARRAY of NUMBERS.
function numberSummer(dataSet) {
  return dataSet.reduce((startingNum, currentNum) => startingNum + currentNum);
}
console.log(numberSummer(nums));
// TODO: MAP over nums and triple each number.
function tripleEachNumber(dataSet) {
  return dataSet.map(num => num * 3);
}
console.log(tripleEachNumber(nums));
