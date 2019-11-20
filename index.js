function Person(fname, lname, age) {
  this.fname = fname;
  this.lname = lname;
  this.age = age;

  this.getFullName = function() {
    return `${this.fname} ${this.lname}`;
  };

  this.setLastName = function(newLastName) {
    if (!newLastName) {
      console.error("no blank last name allowed");
      return;
    }
    this.lname = newLastName;
  };
}

const older = new Person("John", "Smith", 77);

console.log("older says", older);
console.log(older.getFullName());

older.setLastName();
console.log("older says", older);

function manageYourHealth(name, stressLevel, fitnessLevel) {
  this.name = name;
  this.stressLevel = stressLevel;
  this.fitnessLevel = fitnessLevel;

  this.manageStress = function() {
    if (this.stressLevel <= 7 && this.fitnessLevel >= 7) {
      return `Awesome job ${this.name} on your fitness! Let's focus on managing your stress levels because a stress level of ${this.stressLevel} is too high!`;
    }
    return `Wow you're doing awesome! Keep up the good work!`;
  };
  this.startExercise = function() {
    if (this.stressLevel <= 7 && this.fitnessLevel <= 3) {
      return `Great job on managing your stress ${this.name}!`;
    }
    return `Awesome job ${this.name} you're doing fantastic!`;
  };
  this.newFname = function(newFirstName) {
    if (!newFirstName) {
      console.log("no blank first names allowed");
      return;
    }
    this.name = newFirstName;
  };

  this.setStressLevel = function(stress2) {
    if (stress2 && typeof stress2 === "number") {
      //this line checks if 1. the input is truthy or falsey and then 2. if it's the correct type of data
      this.stressLevel = stress2;
    } else {
      console.error("not a number");
    }
  };
}

const me = new manageYourHealth("Annabel", 0, 2);
//console.log(me.manageStress());
//console.log(me.startExercise());
//me.newFname();
me.setStressLevel("Hello");
