
const numbers = [1, 2, 3, 4, 5];
const participants = ["Sinead", "Amrit", "Alex", "Chris", "Jasien"];
const newNumbers = numbers.slice(1, 4);
console.log(newNumbers); 
const fromEndNumbers = numbers.slice(-3);
console.log(fromEndNumbers); // [3,4,5]
const startAtIndexOneNumbers = numbers.slice(1); // [2,3,4,5]

const winners = participants.slice(0, 3);

console.log(winners); 
