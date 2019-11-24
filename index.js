/*class Person {
  constructor(first, last, age, job) {
    this.first = first;
    this.last = last;
    this.age = age;
    this.job = job;
  }
  get bio() {
    return `Hi my name is ${this.first} ${this.last} and I work as a ${this.job}`;
  }
  get fullName() {
    return `My name is ${this.first} ${this.last}`;
  }
}

const me = new Person("Madi", "Ryan", 27, "AmeriCorps VISTA");
//console.log(me.bio);
console.log(me.fullName);
*/
class healthy {
  constructor(name, fitness, stress) {
    this.name = name;
    this.fitness = fitness;
    this.stress = stress;
  }

  get fitnessLevel() {
    if (this.fitness >= 7) {
      return `great job on your fitness ${this.name}! Now let's focus on your stress!`;
    }
    return `A fitness level of ${this.fitness} is too low, let's focus on upping your fitness days up!`;
  }

  get stressLevel() {
    if (this.stress <= 5) {
      return `Wow ${this.name} a stress level of ${this.stress} is fantastic!`;
    }
    return `A stress level of ${this.stress} is hurting your health! Let's focus on lowering your stress levels this week!`;
  }

  set calorie(newArray) {
    this.array = newArray;
  }
}

const me = new healthy("Madi", 10, 2);
calories = [2000, 5000, 3000, 7000];
console.log(calories.pop());
