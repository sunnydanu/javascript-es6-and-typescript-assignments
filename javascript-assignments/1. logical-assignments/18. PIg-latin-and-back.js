((n) => {
    // Input
    let input = process.argv[2] || "the quick brown fox jump over the lazy dog" ;
  
    // Operation
    const result  = []
    input.split(" ").map(word=>{
           result.push( [...[...word].slice(1),...[...word].slice(0,1),"ay"].join(""))
    });

    // Output
    console.log(result.join(" "));
  
  })();
  
  // Invocation
  // node '.\18. PIg-latin-and-back.js' "the quick fox"