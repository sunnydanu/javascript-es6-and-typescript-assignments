  (async () => {
  const sumValueA = () => {
    return new Promise((resolve, reject) => {
      resolve(5);
    });
  };
  const sumValueB = () => {
    return new Promise((resolve, reject) => {
      resolve(5);
    });
  };

  const [a, b] = await Promise.all([sumValueA(), sumValueB()]);

  console.log("Sum is ",a+b)
})();

