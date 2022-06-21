const stringObj =  '{"name":"John","age":30,"city":"New York"}';

console.log(typeof stringObj, ": stringObj",stringObj);
const obj = JSON.parse(stringObj);
console.log("JSON.parse : convert  to real ",typeof obj,obj)

console.log(obj.name,obj.age)

