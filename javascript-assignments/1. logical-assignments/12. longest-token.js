(() => {
    // Input
    let input = process.argv[2] || "abcjkhjhjkhdsiwjkjhabggfgia";
  
    // Operation
    const result =  input.replace(/[a-b]/g, '');
  
    // Output
    console.log(result);
  
  })();
  
  // Invocation
  //  node '.\12. longest-token.js' "asdasdasd"