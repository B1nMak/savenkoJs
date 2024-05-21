const str = 'abcdef';
function toChar (string){
    let result1 = '';
    
    for (i = 0; i < string.length; i++){
        result1 += string[i].charCodeAt();
    }
    let result2 = ''
    for (j = 0; j < result1.length; j++){
        if(result1[j] != 7 ){
            result2 += result1[j]
        }
        else if( result1[j] = 7){
            result2 += 1
        }
    }
    let total1 = 0
    for(x = 0; x < result1.length; x++){
        total1 = total1 + parseInt(result1[x])
    }
    let total2 = 0;
    for(y = 0; y< result2.length; y++){
        total2 = total2 + parseInt(result2[y])    
    }
    return total1 - total2
}
console.log(toChar(str))