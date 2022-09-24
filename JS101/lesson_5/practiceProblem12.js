/*

input: nested array
output: return a new array identical in structure to the input array
        containing only the numbers that are multiples of 3

use combination of methods including filter

*/

let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

arr.map(subArr => {
  return subArr.filter(num => num % 3 === 0)
});

