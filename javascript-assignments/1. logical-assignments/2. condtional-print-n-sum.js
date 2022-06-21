(() => {
  // Input
  let input = parseInt(process.argv[2] || 5);

  // Operation
  const sum = [...Array(input + 1).keys()].reduce((total, num) => {
    if (num % 3 == 0 || num % 5 == 0) {
      return total + num;
    }
    return total;
  }, 0);

  // Output
  console.log(sum);
})(); 

// Invocation: 
// node "2. condtional-print-n-sum.js" 4