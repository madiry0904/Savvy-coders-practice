//pass by reference vs pass by value aka pass by copy
//Heap is an area in memory where values "hang out"

//PASS BY VALUE(PRIMITIVES aka strings booleans numbers....)

//Primitives(which numbers are) can't be mutated
//Primitives are passed by value
let x = 3;

let y = x;

function add1(num) {
  return num + 1;
}

console.log(add1(x));
console.log(y);

//returns 4
//returns 3 because it's a "copy"- they're not interlinked

//y references it's own COPY of the number 3; they're not directly linked
// x THROWS AWAY it's '3' values when passed through the function and gets a whole new value of 4 because the function says n+1 but y keeps it's value of 3 because y made a copy-the two (x, y) aren't interrelated

//PASS BY REFERENCE(objects can be mutated)
const me = {
  name: "Mark"
};

const meToo = me;

function nameChanger(obj, newName) {
  obj.name = newName;
}

nameChanger(me, "Fred");

console.log(me);
console.log(meToo);
//outputs Fred/Fred (because they're interlinked)

//I pass in 'me' to nameChanger
//think like they're sharing the same name
//whatever happens to one object happens to the other one (unlike pass by value where it's basically making a copy)
