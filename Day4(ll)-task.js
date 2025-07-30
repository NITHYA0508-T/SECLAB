let numbers = [1, 2, 3, 2, 4, 3, 5];

let uniqueNumbers = numbers.filter((value, index, array) => {
  return array.indexOf(value) === index;
});

console.log(uniqueNumbers); 
