function initFizzBuzz(num1, num2) {
  return function fizzBuzz46() {
    for (let i = 1; i <= 20; i += 1) {
      if (i % num1 === 0 && i % num2 === 0) {
        console.log("FizzBuzz");
      } else if (i % num1 === 0 && i % num2 !== 0) {
        console.log("Fizz");
      } else if (i % num1 !== 0 && i % num2 === 0) {
        console.log("Buzz");
      } else {
        console.log(i);
      }
    }
  };
  return initFizzBuzz();
}

const fizzBuzz46 = initFizzBuzz(4, 6);

fizzBuzz46();
