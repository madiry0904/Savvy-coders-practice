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
  },
  {
    userId: 1,
    id: 5,
    title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
    completed: false
  }
];
function getOddIdCount(dataSet) {
  return dataSet
    .filter(({ id }) => id % 2 === 1)
    .reduce((totalId, currentNum) => {
      if (!totalId[currentNum.id]) {
        totalId[currentNum.id] = 1;
      } else [(totalId[currentNum.id] += 1)];

      return totalId;
    }, {});

  // .reduce((totalCount, currentNum) => {
  //   if (!totalCount[currentNum]) {
  //     totalCount[currentNum] = 1;
  //   } else [(totalCount[currentNum] += 1)];
  //   totalCount[currentNum] += 1;
  //   return totalCount;
  // }, {});
} //
console.log(getOddIdCount(todos));

/*function countCompleted(dataSet) {
  return dataSet
    .filter(({ completed }) => completed === true)
    .reduce((count, currentNum) => {
      if (!count[currentNum]) {
        count[currentNum] = 1;
      } else [(count[currentNum] += 1)];
      return count;
    }, {});
}
console.log(countCompleted(todos));
*/
