//11.18.19 FIZZBUZZ REVIEW
//FUNCTION DECLARATION not Expression (const fizzbuzz = function () {})

function fizzBuzz() {
  for (let i = 1; i <= 100; i += 1) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}
fizzBuzz();

function initFizzBuzz(num1, num2) {
  return function() {
    for (let i = 1; i <= 100; i += 1) {
      if (i % num1 === 0 && i % num2 === 0) {
        console.log("FizzBuzz");
      } else if (i % num1 === 0) {
        console.log("Fizz");
      } else if (i % num2 === 0) {
        console.log("Buzz");
      } else {
        console.log(i);
      }
    }
  };
}
const fizzBuzz46 = initFizzBuzz(4, 6);
fizzBuzz46();
