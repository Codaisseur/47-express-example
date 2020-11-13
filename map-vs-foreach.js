const numbers = [1, 2, 3, 4, 5];

// just a way to loop over the array
const returnValue = numbers.forEach(item => {
  console.log(item);
  return item; // has no effect
});
console.log(returnValue);

// creates a new array
const newArray = numbers.map(item => {
  // console.log(item);
  return item * 100; // replaces the original item in the new array
});

console.log(numbers);
console.log(newArray);
