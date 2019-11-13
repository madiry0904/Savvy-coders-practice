/*EXPRESSION v. STATEMENTS
expressions need to be part of a statement to be meaningful ex. (2+3 won't have meaning unless tied to a statement)
const x = 2 + 3;
const y = 2 === 3;

Expression are used in conjunction with keywords and appropriate syntax to do useful things
Expressions and operators-arithmetic left to right associativity */

// LOGICAL OPERATORS involve and/ or operators
// && (AND) both left and right operands must be true
// ||(OR) checks if left operand is true, right is never seen-only checks if one is true
//short circuiting is when an OR statement is evaluated and if the L is true then the R will never be evaluated
const x = 3;
const y = 5;
const z = 10;

console.log(x < y && x < z);
console.log(x < y || x < z);
