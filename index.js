//Function Constructor
function rightToVote(name, age, citizenship) {
  this.name = name;
  this.age = age;
  this.citizenship = citizenship;
  this.canVote = function() {
    if ((this.citizenship = "yes" && this.age >= 18)) {
      return `Congrats ${this.name} you can vote!`;
    }
    return `I'm sorry ${this.name} you can't vote just yet.`;
  };
}
const me = new rightToVote("Madi", 27, "yes");
console.log(me.canVote());
