((input) => {
  let maxSizeWord, res, end,star, padding, br;
  br = "\n";
  star  ="*";
  padding = 7;

  maxSizeWord = Math.max(...input.map((word) => word.length));

  res = star.repeat(maxSizeWord + padding) + br;
  end = res;
  input.map((word) => res += `${star}${word}${star}${br}`);
  res+= end;

  console.log(res)
  
})(["Hello", "World", "In", "a", "Frame"]);
