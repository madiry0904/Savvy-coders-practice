///A recursive function is a function that invokes itself
//write a function that calls the string "x" amounts of times
function writePsychoBook(num) {
  if (num === 0) {
    return ""; // if num====1 {return""}  is the exit condition
  }
  return `All work and no play makes jack a dull boy ${writePsychoBook(
    num - 1
  )}`;
}

console.log(writePsychoBook(10));
