//TODO: Use reduce to sum up these numbers.
//reduce "reduces" an array down to one or accumulates everything into 1
//must have a total and something to reference the current num for reduce
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sum = nums.reduce((total, currentNum) => (total += currentNum));
//console.log(sum);

//TODO: Write a function that takes an Array of Numbers and returns...the average
function getAvg(numbers) {
  return (
    numbers.reduce((total, currentNum) => (total += currentNum)) /
    numbers.length
  );
}
//console.log(getAvg(nums));
//TODO: Tally up the count for each other TLD aka .net/.com etc
