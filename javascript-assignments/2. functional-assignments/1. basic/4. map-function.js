//  callback function
const square = x => x*x;

// custom map function :

function map(inputArr,callback) {
    
    let result = [];
    for (let index = 0; index < inputArr.length; index++) {
      
        result.push(callback(inputArr[index]))
    }
    return result;
}

// test case 1
console.log("Case 1: squre ",map([1,2,3,4,5],square))
// test case 2
console.log("Case 2: Math.sqrt ",map([1,4,9,16,25],Math.sqrt))

// Invocation

// node '.\4. map-function.js' 