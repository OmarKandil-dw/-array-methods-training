/* CONCAT
Merge 2 or more arrays into a new array
- want change og arrays - a, b, d  - produces new one
 */
const a = [1, 2, 3];
const b = [4, 5, 6];
const d = [7, 8, 9];

const c = a.concat(1, 2, 3, a); // 1,2,3,1,2,3

console.log(c);
