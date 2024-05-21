const str = 'The quick brown fox jumps over the lazy dog';
function isPangram (string){
    const al = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    const arrStr = string.toLowerCase();
    arrStr.split('') 
    al.forEach(val => {
        if(arrStr.includes(val)){
            return true 
        }
        else if(!arrStr.includes(val)){
            return false
        }
    })
}

console.log(isPangram(str))