((n) => {
  // Input
  let input = parseInt(process.argv[2] || 100);

  let randomArray = [...Array(input)].map((e) => (Math.random() * input) | 0);

  console.log("Random array: ", randomArray);
  // Operation

  const sum = randomArray.reduce((a, b) => a + b, 0);
  const avg = sum / randomArray.length;
  console.log("Total Sum :", sum);
  console.log("Average :", avg);
  console.log("Max Number: ", Math.max(...randomArray));
  console.log("min Number: ", Math.min(...randomArray));

  {
    // even or odd count

    let count = { even: 0, odd: 0 };
    randomArray.map((elm) => {
      if (input % 2 == 0) {
        count.even++;
      } else {
        count.odd++;
      }
    });
    let winner = count.even > count.odd ? "EVEN" : "ODD";
    console.log(winner, " count is bigger ", count);
  }
})();

// Invocation
// node '.\14. random-array.js'   
