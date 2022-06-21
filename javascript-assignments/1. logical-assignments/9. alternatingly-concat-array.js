((a, b) => {
  const result = [];
    for (let i = 0; i < a.length; i++) {
   result.push(a[i])
   result.push(b[i])
  }
  console.log(result);
})(["a", "b", "c"], ["1", "2", "3"]);
