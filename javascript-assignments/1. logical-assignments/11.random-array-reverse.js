((a) => {
    console.log("Before reverse:",a)
    const result = [];
      for (let i = 0; i < a.length; i++) {
       
     result.push(a[a.length - i - 1])
     
    }
    console.log("after:",result);
  })([...Array(5)]
  .map(() => Math.round(Math.random() * 2)));
  