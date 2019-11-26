/*
function healthy(name, fitness, stress) {
  this.name = name;
  this.fitness = fitness;
  this.stress = stress;
}
healthy.prototype.getFitnessLevel = function() {
  if (this.fitness >= 7) {
    return `great job on your fitness ${this.name}! Now let's focus on your stress!`;
  }
  return `A fitness level of ${this.fitness} is pretty low, let's focus on increasing your workouts this week!`;
};

healthy.prototype.getStressLevel = function() {
  if (this.stress <= 5) {
    return `Wow ${this.name} a stress level of ${this.stress} is fantastic!`;
  }
  return `A stress level of ${this.stress} is hurting your health! Let's focus on lowering your stress levels this week!`;
};

healthy.prototype.setFitnessLevel = function(newFitness) {
  if (typeof newFitness === "number") {
    this.fitness = newFitness;
    return `fitness level changed`;
  }
  console.error(`invalid entry try again please`);
};
healthy.prototype.setCalorie = function(newArray) {
  if (newArray) {
    this.array = newArray;
  }
};
healthy.prototype.getCalorie = function() {
  let calList = `Here are some new goals ${this.name}`;
  for (let i = 0; i < this.array.length; i += 1) {
    calList += this.array[i];
  }
  return calList;
};
//newArray = [2000, 5000, 300, 7000];
const me = new healthy("Madi", 10, 2);
me.setCalorie([2000, 4500, 7000, 10000]);
console.log(me.getCalorie());

*/
//CLASS DOES NOT CHANGE THE FACT THAT WE ARE DOING PROTOTYPE-BASED OOP AND NOT CLASS-BASED OOP
class Person {
  constructor(fname, lname, age, occupation) {
    this.fname = fname;
    this.lname = lname;
    this.age = age;
    this.occupation = occupation;
  }
  get fullName() {
    return `${this.fname} ${this.lname}`;
  }
  set changeName(newLName) {
    if (newLName) {
      this.lname = newLName;
    } else {
      console.error("Name not changed");
    }
  }
}
const me = new Person("George", "Blezard", 28, "Teacher");
console.log(me.fullName);
me.changeName = "Ryan";
console.log(me);

class Employee extends Person {
  constructor(fname, lname, age, occupation, empid) {
    super(fname, lname, age, occupation); //uses information from Person constructor (this.age etc)
    this.id = empid;
  }
  get empBio() {
    return `My name is ${this.fname} ${this.lname} and my employee id is ${this.id}`;
  }
  set empBio(empid) {
    this.id = empid;
  }
}

const emp = new Employee("Madi", "Ryan", 27, "Program Analyst", 1234);
console.log(emp);

//with classes you always need a getter and a setter
//getters usually have strings where setters set things
