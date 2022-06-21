(()=>{
    // input
    const input = parseInt(process.argv[2] || 5);

    // operation
    let result = (input % 2 == 0) ? "EVEN" : "ODD";
   
    // result
    console.log(input,"is",result)
  })() // invocation
     
  // node "3. even-or-odd.js" 9