
const uS = 'ZpglnRxqenU'

function acum(sentanse){
    let result = '';
    for(let i = 0; i < sentanse.length; i++){
        result +=`${sentanse[i].toUpperCase()}`+`${sentanse[i].toLowerCase().repeat(i)}`
        
    }
    return result
}

console.log(acum(uS))

