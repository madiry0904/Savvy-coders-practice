//Function Constructor
function manageYourHealth(name, stressLevel, fitnessLevel) {
  this.name = name;
  this.stressLevel = stressLevel;
  this.fitnessLevel = fitnessLevel;

  this.manageStress = function() {
    if (this.stressLevel >= 7 && this.fitnessLevel >= 7) {
      return `Awesome job ${this.name} on your fitness! Now let's manage your stress levels because a stress level of ${this.stressLevel} is high! Your task for this week is to meditate 5 times a week for 5 minutes.`;
    }
    return `Wow you're killing it! Keep up the amazing work ${this.name}!`;
  };
  this.startExercise = function() {
    if (this.stressLevel <= 7 && this.fitnessLevel <= 3) {
      return `Great job on managing your stress ${this.name}! Now let's get you a consistent fitness regime because a stress level of ${this.stressLevel} is great but a fitness level of ${this.fitnessLevel} needs improvement. Your task is to go for a walk for 20 minutes 3 times a week.`;
    }
    return `Awesome job ${this.name} you're doing fantastic!`;
  };
}

const me = new manageYourHealth("Grace", 0, 2);
console.log(me.manageStress());
console.log(me.startExercise());
