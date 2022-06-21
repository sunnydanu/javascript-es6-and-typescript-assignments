const UserData={
    name: "Sunny",
    deskNo: 1080,
    laptopModel: "dell I 15- 7687"
}

const template  = `Hello Team,

My Name is ${UserData.name}, my desk no is ${UserData.deskNo}. and I am facing a issue 
with my ${UserData.laptopModel}.

Regards

${UserData.name}

`
console.log(template)