let nameData = ['Tom','Ivan','Jerry'];
result = [];
nameData.map(n=>result.push({name:n,length:n.length}))
console.log(...result)