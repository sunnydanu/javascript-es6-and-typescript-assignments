(()=>{
    // input
    const input = parseInt(process.argv[2] || 5);

    // operation
    let result = [];
    let year = new Date().getFullYear();
    while(result.length < input){
        const leapYear = new Date(year++,1,29).getDate() === 29;
        if(leapYear){
            result.push(year)
        }
    }
     
    // result
    console.log(`Next ${input} leap years`,result)
  })() // invocation
     
  // node "3. even-or-odd.js" 9