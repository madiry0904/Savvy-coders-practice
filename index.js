/*We went over function factories in class today. Now, you can create one that will return a function that will include a 'greeting' and a 'name.'

Here's how I want to be able to use it:

const morningMartin = initGreeting('Good Morning', 'Martin');
console.log(morningMartin()); // 'Good Morning, Martin!'

So, I pass in 2 strings. First is a greeting next is a name. You have a function factory called initGreeting(greeting, name) . As you see 👆🏾, it return s a function that, when invoked, will return a string that basically just puts together the greeting and the `name`. */

/*function initGreeting(greeting, name) {
  return function() {
    return `${greeting} ${name}`;
  };
}

const morningMartin = initGreeting("Good Morning ", "Martin!");
console.log(morningMartin(` How are you today?`));
*/

//passing a parameter to print the time
function initGreeting(greeting, name) {
  return function(time) {
    return `${greeting} ${name}. The time is ${time}`;
  };
}

const morningMartin = initGreeting("Good Morning ", "Martin!");
const time = new Date(Date.now());
console.log(morningMartin(time.getHours()));
