/*
order array
descending numeric value

sort (b-a)
*/

let arr = ['10', '11', '9', '7', '8'];

arr.sort((a, b) => (b - a));
// arr.sort((a, b) => Number(b) - Number(a)); would be EXPLICIT coercion and so a more clear solution

console.log(arr);


