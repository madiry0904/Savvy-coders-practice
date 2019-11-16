//FIZZ BUZZ
// If we pass a number that's divisible by both 5 and 3 the log 'fizzbuzz'
//If we pass a number divisible by 3, log 'fizz
//If we pass a number divisible by 5, log 'buzz'
//Loop over numbers from 1-99
//If not divisible by either 5 or 3, log the number

/*function fizzBuzz(num){
  for (let i = 1; i <= 99; i += 1){
    if (i % 3 ===0 && i % 5 ===0){
      console.log("fizzbuzz");
    }else if (i % 5 === 0){
      console.log("buzz")
    }else if (i !%)
  }
}
*/

//FUNCTION FACTORY PART 2- FUNCTIONS THAT RETURN OTHER FUNCTIONS
function initPerson(fname, lname, age) {
  return {
    firstName: fname,
    lastName: lname,
    age,
    canDrink: function() {
      return age >= 21;
    }
  };
}
const me = initPerson("madi", "ryan", 13);
console.log(me.canDrink());
