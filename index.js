/*const me ={
  name: "mark",
  age: 23,
  homework:{
    hw1:'passed',
    hw2: 'failed',
  },
  checkLegallyDrink : function () {
    return this.age >= 21;
  }
};
console.log(me.checkLegallyDrink());
*/

/*
me.homework.hw2 ='passed';
console.log(me.name);

console.log(me.homework.hw2);
*/

//method

/*const city = {
  name: 'St Louis',
  structure: {
    sculpture: 'The Arch',
    location: 'downtown',
  },
  checkCityStructure: function() {
    return this.structure.sculpture === 'The Arch';
  },
};
console.log(city.checkCityStructure());*/

//for ( x=1, return  )

/*function sumDaNumbers (startingNumber=1, endingNumber=10) {
  let startingTotal= 0;
    for (let i = startingNumber; i <= endingNumber; i += 1){
     startingTotal +=i;
    }
    return startingTotal ;
  }

  console.log(sumDaNumbers()); */

/*Homework Review from 11.12.19

because the method is scoped inside of the object you don't need named parameters-> just use "this.______"

*/

const numberSummerMachine = {
  startingNumber: 1,
  endingNumber: 10,

  sumDaNumbers: function() {
    let total = 0;

    for (let i = this.startingNumber; i <= this.endingNumber; i += 1) {
      total += i;
    }
    return total;
  }
};
console.log(numberSummerMachine.sumDaNumbers());

//2. Developer's note: here is the ES6 method shorthand for writing function(same as other one but shorter syntax)

/*const numberSummerMachine ={
  startingNumber : 1,
  endingNumber : 10,

  sumDaNumbers () {

  let total = 0;

  for (let i = this.startingNumber; i<= this.endingNumber; i+=1) {
    total +=i;
  }
  return total;
  }

  }
  console.log(numberSummerMachine.sumDaNumbers())

  */
