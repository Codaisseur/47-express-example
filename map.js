const numbers = [1, 2, 3, 4, 5];

// all examples do the same thing
// in all examples, we are passing in a callback

// example 1
function multiplyByTen(item) {
  return item * 10;
}
console.log(numbers.map(multiplyByTen));

// example 2
const multiplyByTenArrow = item => item * 10;
console.log(numbers.map(multiplyByTenArrow));

// example 3
console.log(
  numbers.map(function (item) {
    return item * 10;
  })
);

// example 4
console.log(numbers.map(item => item * 10));
