const numbers =("1 2 3 4 5");
function highAndLow (num){
    let result = '';
    let newNum = num.split(' ')
    for (let i = 0;i<newNum.length;i++){
        if(typeof newNum !== 'number' ){
            Number(newNum[i])
        }
        if(Math.max(newNum) === newNum[i] || Math.min(newNum) === newNum[i]){
            result += newNum[i]
        }
    }
    return result 
}

console.log(highAndLow(numbers))