//  callback function
const isEven = (num) => num % 2 == 0;

// custom find function :

function find(inputArr, callback) {
  if (inputArr.length === 0) {
    return false;
  }
  let currentVal = inputArr.pop();

  if (callback(currentVal)) {
  return currentVal
  } 
   return find(inputArr, callback);
}

// test case
console.log(find([1,3,5,4,1,5,7],isEven))

// Invocation
// node '.\1. recursive-find.js'
