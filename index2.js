const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function addDataSet(dataSet) {
  return dataSet.reduce(
    (startingNum, currentTotal) => startingNum + currentTotal
  );
}
function divideByDataSetLength(dataSet) {
  return (
    dataSet.reduce((startingNum, currentNum) => startingNum + currentNum) /
    dataSet.length
  );
}
//console.log(addDataSet(nums));
console.log(divideByDataSetLength(nums));

const todos = [
  {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false
  },
  {
    userId: 1,
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: false
  },
  {
    userId: 1,
    id: 3,
    title: "fugiat veniam minus",
    completed: false
  },
  {
    userId: 1,
    id: 4,
    title: "et porro tempora",
    completed: true
  }
];

function getId(dataSet) {
  return dataSet.map(({ id }) => id);
}
function getIdforCompleted(dataSet) {
  return dataSet
    .filter(({ completed }) => completed === true)
    .map(({ id }) => id);
}

console.log(getId(todos));
console.log(getIdforCompleted(todos));
