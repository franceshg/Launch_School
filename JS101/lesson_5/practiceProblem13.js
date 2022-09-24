/*
input: array with subarrays
output: sorted array

iterate through each sub-array
sum the odd numbers in each array
sort the arrays based on the sum of its odd numers in ascending order

*/

let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

function filterOdd(arr) {
  arr.filter(num => num % 2 !== 0)
  return arr;
};

function sumOdd(arr) {
  sumOddNums = arr.reduce((a,b) => a + b);
  return sumOddNums;
}

  arr.sort((a, b) => {
    let oddSumA = a.filter(num => num % 2 !== 0).reduce((a,b) => a + b);
    let oddSumB = b.filter(num => num % 2 !== 0).reduce((a,b) => a + b);
    
    return oddSumA - oddSumB;
  });

  console.log(arr);