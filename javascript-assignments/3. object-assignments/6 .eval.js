const stringObj =  '({"name":"John","age":30,"city":"New York"})';

console.log(typeof stringObj, ": stringObj",stringObj);
const obj = eval(stringObj);
console.log("eval : convert real ",typeof obj,obj)

console.log(obj.name,obj.age)

console.log(JSON.parse(stringObj))