const a = 5; 
const b = -1; 
const c = 2;
const d = -1;

function getSum(num1, num2){
    let result = 0
    if(num1 === num2){
        result = num1 || num2
        return result
    }
    else if(num1 !== num2){
        result = num1 + num2 
        return result
    }
}
console.log(getSum(a,b))