/*function bBallTeam(name, city) {
  this.name = name;
  this.city = city;
}
bBallTeam.prototype.setNumbers = function(numArray) {
  this.numbers = numArray;
};
bBallTeam.prototype.printNums = function() {
  for (let i = 0; i <= this.numbers.length; i += 1) {
    console.log(this.numbers[i]);
  }
};
const bulls96 = new bBallTeam("Bulls", "Chicago");
bullsNumbers = [23, 91, 33, 13, 9, 25];
bulls96.setNumbers(bullsNumbers);

bulls96.printNums();
*/

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

const me = new healthy("Madi", 10, 2);
calorieNumbers = [2000, 5000, 300, 7000];
me.setCalorie(calorieNumbers);

healthy.prototype.printNum = function() {
  for (let i = 0; i <= this.array.length; i += 1) {
    console.log(this.array[i]);
  }
};

me.printNum();
