//  callback function
const isEven = (num) => num % 2 == 0


// custom find function :

function find(inputArr,callback) {
    
    let result ;
    for (let index = 0; index < inputArr.length; index++) {
        const element = inputArr[index];
        
        if(callback(element)){
            result = element
            break
        }
    }
    return result;
}

// test case
console.log(find([1,3,5,4,2],isEven))

// Invocation

// node '.\3. find-function.js' 