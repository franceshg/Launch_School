/*
output: display total age of the male members of the family
input: object

select all the  male members of the family
total their ages
*/

let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

let totalMaleAges = 0;

for (let currentMember in munsters) {
  if (munsters[currentMember].gender === 'male') {
    totalMaleAges += munsters[currentMember].age;
  }
}

console.log(totalMaleAges);



