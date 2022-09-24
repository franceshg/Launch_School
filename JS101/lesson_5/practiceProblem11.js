/*
input: array with nested objects
output: new array

keeping original structure of input array
increment each number (each keys values) by 1

*/

let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

let newArr = arr.map(obj => {
  // iterate through object keys and increment it's value by 1
  let newObj = {};
  for (let key in obj) {
    newObj[key] = obj[key] + 1;
  }

  return newObj;
})

console.log(arr);