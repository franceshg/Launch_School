/*
output: array which contains only the objects where ALL numbers are even
input: array with nested objects

iterate through the objects in the outer array
iterate through the arrays in the objects
check that each character is even 
if it is, return that object
if there is an odd number, do nothing and move on. 

*/

let arr = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];

let results = arr.filter(obj => {

  return Object.values(obj).every(arr => {
    return arr.every(num => {
      return num % 2 === 0;
    });
  });
});


console.log(results);
// [ { e: [8], f: [6, 10] } ]
