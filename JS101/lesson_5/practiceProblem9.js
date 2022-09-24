/*
input: array with nested arrays
output: new array with same structure as input array

order the values in each subarray in ascending order
*/

let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

arr.map(subArr => {
  if (typeof subArr[0] === 'Number') {
    return subArr.slice().sort((a, b) => a - b)
  } else {
    return subArr.slice().sort();
  }
})

 