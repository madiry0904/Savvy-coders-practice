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
  const numberSummerMachine = {
    startingNumber : 1,
    endingNumber : 200,
    sumDaNumbers: function(startingNumber, endingNumber) {
     let sumDaNumbers = 1;
     for (let i = startingNumber; i < endingNumber; i += 1) {
       sumDaNumbers += i;
     }
     return sumDaNumbers;
    }
    }
    console.log(numberSummerMachine.sumDaNumbers(numberSummerMachine.startingNumber, numberSummerMachine.endingNumber))
