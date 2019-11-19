//IMPERATIVE ORIENTED PROGRAMMING (what we've been doing->line by line state what needs to be done)
//OBJECT ORIENTED PROGRAMMING

function weekendActivity(sport, food, relax) {
  return {
    sport,
    food,
    relax,

    getSport: function() {
      return `I like to go ${this.sport} when the weather is nice out!`;
    },

    getFood: function() {
      return `I go to ${this.food} with my sister and friends in Central West End.`;
    },

    getRelax: function() {
      return `Sunday is my day to relax and ${this.relax}`;
    }
  };
}

const myWeekend = weekendActivity("running", "brunch", "read a book");
console.log(myWeekend.getSport());
