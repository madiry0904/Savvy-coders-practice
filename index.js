class Healthy {
  constructor(name, fitness, meal, fitnessClass1) {
    this.name = name;
    this.fitness = fitness;
    this.meals = meal;
    this.fitnessClasses = fitnessClass1;
  }

  get fitnessLevel() {
    if (this.fitness >= 7) {
      return `great job on your fitness ${this.name}! Now let's focus on your stress!`;
    }
    return `A fitness level of ${this.fitness} is too low, let's focus on upping your fitness days up!`;
  }
  get dinnerMealOption() {
    return this.meals.filter(meal => {
      if (this.fitness >= 7 && meal.startsWith("p")) {
        return meal;
      } else if (this.fitness < 7 && meal.startsWith("s")) {
        return meal;
      }
    });
  }
  set dinnerMealOption(mealArr) {
    if (mealArr) {
      this.meals = mealArr;
    }
  }
  get fitnessClassOptions() {
    return this.fitnessClasses.filter(fitnessClass => {
      if (fitnessClass.startsWith("z")) {
        return fitnessClass;
      }
    });
  }
  set fitnessClassOptionsSetter(newFitnessClassForArray) {
    if (newFitnessClassForArray && newFitnessClassForArray === "string") {
      this.fitnessClasses = newFitnessClassForArray;
    }
  }
  get lastFitnessArray() {
    return this.fitnessClasses.pop();
  }
  set fitnessClassOptions(newFitnessClasses) {
    if (newFitnessClasses) {
      this.fitnessClasses = newFitnessClasses;
    }
  }
}

const newFit = new Healthy(
  "Madi",
  5,
  ["pizza", "pasta", "salad"],
  ["zumba", "yoga", "barre method", "pilates"]
);
console.log(newFit.dinnerMealOption);

/*class Person {
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
//console.log(me.myFavBeer);
const beerArray = me.myFavBeer;
console.log(beerArray);
*/
