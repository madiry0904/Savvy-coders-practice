//USING WHILE LOOP

function logNumbers(num) {
let count = 1;
while (count <= num)
console.log(count)
count += 1;
}
logNumbers(10);


//USING FOR LOOP(COUNT TO 10)

function logNumbers(num) {
  for (let i = 1; i <= num; i += 1) {
  console.log(i);
}
}
logNumbers(10);


//RECURSION-> usually a countdown so checking if the thing is already at 1
//recursive function requires a return function
//Recursion involves counting backwards or looping backwards so we start with the end in mind
//In this case our exit condition is when we have reached 1

function logNumbers(num) {
  if (num === 1) {      //This first section is the exit condition
    return 1;
  }
  return num + logNumbers(num - 1); //this is telling you how to actually get the # you want                                            (whatever num is currently add that number -1
}
console.log(logNumbers(10));
