(() => {
    // Input
    let input = parseInt(process.argv[2] || 5);
  

    // Operation
    let f1,f2,sum;
    f1 = 0;
    f2 = 1;
    sum = 0;

    for (let index = 1; index < input; index++) {
        let next = f1 + f2;
        f1 = f2;
        f2 = next;
        sum += f1;
         
    }
  
    // Output
    console.log(sum);
  })(); 
  
  // Invocation: 
  // node "10. fibonacci.js" 4