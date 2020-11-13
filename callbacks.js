const numbers = [1, 2, 3, 4, 5];

function callbackFunction(item) {
  console.log("hello", item);
}

console.log("Example 1");
numbers.forEach(callbackFunction);

console.log("Example 2");
numbers.forEach(function (item) {
  console.log("hello", item);
});

console.log("Example 3");
function arrayForEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i]);
  }
}

arrayForEach(numbers, callbackFunction);
