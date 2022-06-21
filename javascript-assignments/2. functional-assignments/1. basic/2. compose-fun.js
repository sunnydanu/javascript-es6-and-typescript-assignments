
const square = x => x*x;
const double = x => x*2;

  // Input
  let input = parseInt(process.argv[2] || 5);

const compose = (f1,f2) => (val) => f1(f2(val))

// Output
const fn1 = compose(square,double)
console.log("composed function 1 : output ", fn1(input))

const fn2  = compose(double,square)
console.log("composed function 2 : output", fn2(input))

// Invocation
// node '.\2. compose-fun.js' 
 