/*class Healthy {
  constructor(name, fitness) {
    this.name = name;
    this.fitness = fitness;
  }

  get fitnessLevel() {
    if (this.fitness >= 7) {
      return `great job on your fitness ${this.name}! Now let's focus on your stress!`;
    }
    return `A fitness level of ${this.fitness} is too low, let's focus on upping your fitness days up!`;
  }
  get dinnerMealOption() {
    let dinner = this.food;
    for (let i = 0; i < this.food.length; i += 1) {
      dinner[i];
    }
    return dinner;
  }
  set dinnerMealOption(mealArr) {
    if (mealArr) {
      this.food = mealArr;
    }
  }
}
const me = new Healthy("George", 8);
me.setdinnerMealOption(["pizza", "salad", "hamburger", "pasta"]);
console.log(me.getdinnerMealOption.pop());
*/

class Person {
  constructor(fname, favBeers) {
    this.first = fname;
    this.favBeers = favBeers;
  }
  get Name() {
    return `Hi I'm ${this.first}`;
  }
  get myFavBeer() {
    return this.favBeers.filter(beer => {
      if (beer.startsWith("I")) {
        return beer;
      }
    });
  }
  set changeBeer(beerType) {
    this.favBeers = beerType;
  }
}
const me = new Person("Madi", ["IPA", "Stout", "Pilsner"]);
//console.log(me.Name);
//console.log(me.favBeers);
console.log(me.myFavBeer);
