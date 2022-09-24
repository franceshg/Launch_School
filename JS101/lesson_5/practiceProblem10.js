let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

arr.map(subArr => {
  return subArr.slice().sort((a, b) => {
    if (typeof a === 'Number') {
      return b - a;
    };
  
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else return 0;
  });
});
