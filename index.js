//FUNCTION CONSTRUCTOR
function Person(fname, lname, age, occupation) {
  this.fname = fname;
  this.lname = lname;
  this.age = age;
  this.occ = occupation;

  this.canDrink = function() {
    if (this.age >= 21) {
      return `I like to keep a 6-pack of beer in my my fridge`;
    }
    return `I like to keep soda in my fridge`;
  };

  this.getBio = function() {
    return `Hi! My name is ${this.getFullName()}. I am ${this.age} years old.
  ${this.canDrink()}`;
  };

  this.getFullName = function() {
    return `${this.fname} ${this.lname}`;
  };
}
const me = new Person("Madi", "Ryan", 27, "AmeriCorps Vista");
console.log(me.getFullName());
console.log(me.getBio());
