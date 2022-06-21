((n) => {
  // Input
  let input = parseInt(process.argv[2] || 5);

  // Operation
  const sum = [...Array(input + 1).keys()].reduce((a, b) => a + b, 0);

  // Output
  console.log(sum);

})();

// Invocation
// node "1. print-n-sum.js" 6