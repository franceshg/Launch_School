/*
output: array containing:
         - colours of the fruits (capitalised) AND
         - sizes of the vegetables (all upercase)

iterate through the array 
return colours with first character uppercase
return size with all characters uppercase
*/

let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

let capitalize = word => word[0].toUpperCase() + word.slice(1);

console.log(Object.values(obj).map(attributes => {
  if (attributes['type'] === 'fruit') {
    return attributes['colors'].map(char => capitalize(char)); 
  } else {
    return attributes['size'].toUpperCase();
  }
}));
