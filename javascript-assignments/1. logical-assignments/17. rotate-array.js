((inputArr) => {
   
    // Input 
    let input = parseInt(process.argv[2] || 3);

    console.log("Before rotaion array : " ,inputArr);
    // Operation
    const rotate = [...inputArr.slice(input),...inputArr.slice(0,input)]
      
     
    // Output
    console.log("after rotate by ",input ,rotate);
 
  })([1,2,3,4,5,6,7]);
  
  // Invocation
  // node '.\17. rotate-array.js' 3