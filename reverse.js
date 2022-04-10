

const numbers = [1, 2, 3, 4, 5];


console.log(numbers);


const newArr = [...numbers].reverse();

console.log(newArr);
// Reverse the characters inside of a string
const str = "Coding is fun!";
const res = str.split(""); // - Will split every letter into indiv char, and store in an array
const resReverse = res.reverse().join("");
console.log(resReverse);
