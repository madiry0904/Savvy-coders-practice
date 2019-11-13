//doMath is expecting to receive a function
//operation can be any named parameter as long as it's referenced in return statement
//functions can receive another function aka function doMath is receiving the operation funciton that is called in the return function
/*function doMath(x, y, operation) {
  console.trace();
  return operation(x, y);
}
function subtract(x, y) {
  console.trace();
  return y - x;
}

//function add(x, y) {
//console.trace();
//return y + x;
// }

console.log(doMath(10, 5, subtract));
//console.log(doMath(10, 5, add));
*/

//This is a function factory that returns another function
//This fucntion factory uses the concept of a CLOSURE
function initSportsScorer(pts) {
  return function(score) {
    return score + pts;
  };
}

const threePointer = initSportsScorer(3);
console.log(threePointer(99));

//answer is 101
