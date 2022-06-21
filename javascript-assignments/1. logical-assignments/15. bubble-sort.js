((input) => {
    // Input
    const len = input.length;
  
    // Operation
   
      
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len; j++) {
        if (input[j] > input[j + 1]) {
          let tmp = input[j];
          input[j] = input[j + 1];
          input[j + 1] = tmp;
        }
      }
    }
    // Output
    console.log(input);
  
  })( [1,2,4,6,3,8,0,5,6,7]);
  
  // Invocation
  // nodenode '.\15. bubble-sort.js'   