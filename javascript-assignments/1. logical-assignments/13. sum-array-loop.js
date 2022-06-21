(() => {
  // Input
  let input = parseInt(process.argv[2] || 5);

  // Operation
  const randomArray = [...Array(input + 1).keys()];

  // for loop;

  let result = 0;
  for (let index = 0; index < randomArray.length; index++) {
    result += randomArray[index];
  }
  console.log("sum with for loop:", result);

  // while loop

  {
    let result = 0;
    let index = 0;
    while (index < randomArray.length) {
      result += randomArray[index];
      index++;
    }
    console.log("sum with while loop:", result);
  }

  // do while

  {
    let result = 0;
    let index = 0;
    do {
        result += randomArray[index];
        index++;
      } while (index < randomArray.length);
    console.log("sum with do-while loop:", result);
  }

  
})();

// Invocation:
// node "2. condtional-print-n-sum.js" 4
