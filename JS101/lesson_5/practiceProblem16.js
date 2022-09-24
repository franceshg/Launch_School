/*
output: object where the key is the first item in each subarray, and the value is the second
*/

let arr = [ ['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']] ]

// expected value of object:
// { a: 1, b: 2, sea: {c: 3}, D: ['a', 'b', 'c'] }

const obj = {};

arr.forEach(subArr => {
  obj[subArr[0]] = subArr[1]; 
});

console.log(obj);
