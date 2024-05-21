const uS = 'ZpglnRxqenU'

function acum(s){
    let result = '';
    for(let i = 0; i < s.length; i++){
        result +=`-${s[i].toUpperCase()}`+`${s[i].toLowerCase().repeat(i)}`
    }
    
    return result.replace('-','')
}

console.log(acum(uS))

