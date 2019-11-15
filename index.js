//function factorial (4) {
//4* 3* 2* 1;
//}
function factorial(num) {
  let ret = 1;
  for (let i = num; i > 0; i -= 1) {
    ret *= i;
  }
  return ret;
}

console.log(factorial(4));
