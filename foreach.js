/*
FOR EACH
- callback takes 3 parameters - value of current iteration, index and array.
*/
const numbers = [1, 2, 3, 4, 5];
const letters = ["a", "b", "c", "c", "a", "d", "e", "z", "a", "b"];

let sum = 0;
numbers.forEach((item) => {
  sum += item;
});
console.log(sum);
let count = {};

letters.forEach((item) => {
  if (count[item]) {
    count[item]++;  } else {
    count[item] = 1;
  }
});
console.log(count);
