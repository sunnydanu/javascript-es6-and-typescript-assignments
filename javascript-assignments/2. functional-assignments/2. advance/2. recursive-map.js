//  callback function
const square = (x) => x * x;

// custom find function :

function map(inputArr, callback, result = []) {
  if (inputArr.length === 0) {
    return result;
  } 
  result.push(callback(inputArr.pop()));
  return map(inputArr, callback, result);
}
// test case 1
console.log("Case 1: squre ", map([1, 2, 3, 4, 5], square));
// test case 2
console.log("Case 2: Math.sqrt ", map([1, 4, 9, 16, 25], Math.sqrt));

// Invocation
// node '.\1. recursive-map.js'
