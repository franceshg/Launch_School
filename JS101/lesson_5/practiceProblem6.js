/*

output: print the name, age, and gender of each family member
input: object

create new variables name, age, and gender
iterate through the object, and reassign the three variables with the current key value pair
log the output sentence
move to the next key and repeat

*/

let munsters = {
  herman: { age: 32, gender: 'male' },
  lily: { age: 30, gender: 'female' },
  grandpa: { age: 402, gender: 'male' },
  eddie: { age: 10, gender: 'male' },
  marilyn: { age: 23, gender: 'female'}
};

for (let currentMember in munsters) {
  let name = currentMember;
  let age = munsters[currentMember].age;
  let gender = munsters[currentMember].gender;

  console.log(`${name} is a ${age}-year-old ${gender}`);
  
}