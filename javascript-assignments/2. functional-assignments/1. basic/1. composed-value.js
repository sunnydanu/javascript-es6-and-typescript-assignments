
const square = x => x*x;
const double = x => x*2;

  // Input
  let input = parseInt(process.argv[2] || 5);

// Operation
const composedValue = (f1,f2,val) => f1(f2(val))

  // Output
console.log(composedValue(square,double,input))

// Invocation
// node '.\1. composed-value.js' 
 