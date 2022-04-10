
const numbers = [1, 2, 3, 4, 5, 6];

const total = numbers.reduce(sum, 3);


function sum(accumulator, value, index, arr) {
  return accumulator + value;
}

console.log(total); 
const moreNumbers = [1, 2, 3, 20, 4, 5, 6];
const max = moreNumbers.reduce(callback, -Infinity);

function callback(accumulator, value, index, arr) {
  if (accumulator > value) {
    return accumulator;
  } else {
    return value;
  }
}

console.log(max);

function addTwo(acc, val) {
  if (val >= 10 && val <= 99) return val;
}

const ans = moreNumbers.reduce(addTwo, 0);
console.log(ans);

//3

const store = [
  {
    name: "laptop",
    price: 1000,
    count: 5,
  },
  {
    name: "desktop",
    price: 1500,
    count: 2,
  },
  {
    name: "phone",
    price: 500,
    count: 12,
  },
];


const totalValue = store.reduce(
  (acc, item) => acc + item.price * item.count,
  0
);

console.log(totalValue);
