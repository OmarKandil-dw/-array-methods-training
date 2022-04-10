/* SORT 
- Sorts the element of array by manipulating array
- default order is ascending 
- converts to a string and compares utf 16 code values


*/

// 1
const names = ["Kelly", "Alex", "Alan", "Jenny", "Emma"];

names.sort();

console.log(names);


function compare(a, b) {
  return a - b;
}

const numbers = [74, 18, 5, 99, 43, 105];

numbers.sort(compare); // 5, 18, 43, 74, 99, 105

console.log(numbers);

const products = [
  {
    name: "laptop",
    price: 1000,
  },
  {
    name: "desktop",
    price: 1500,
  },
  {
    name: "phone",
    price: 500,
  },
];

// products.sort();
console.log(products); 
products.sort((a, b) => b.price - a.price);
