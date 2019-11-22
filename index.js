//Using Class
class Person {
  constructor(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
  }
  get firstName() {
    return `My name is ${this.name}!`;
  }
  get bio() {
    return `Hi my name is ${this.name}. I am a ${this.age} year old ${this.job}`;
  }
  set changeName(fname) {
    if (fname) {
      this.fname = fname;
    } else {
      console.error("bad name received");
    }
  }
}
const me = new Person("Madi", 27, "AmeriCorps Vista");
//console.log(me.firstName);
//console.log(me.changeName);

console.log((me.changeName = "Kelly"));
