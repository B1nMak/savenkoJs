const w1 = 'din';
const w2 = 'recede'
function duplicateEncode(word) {
    let result1 = '';
    let preResult = ''
    const arrWord = word.toLowerCase().split('');

    arrWord.forEach((element, i) => {
        if (!preResult.includes(element)) {
            preResult += element
        }
        else if(preResult.includes(element)){
            preResult = preResult.replace(element, 'i')
            preResult += 'i'
        }
      

       
    });
    console.log(preResult)
    return result1
}

console.log(duplicateEncode(w2))


// function duplicateEncode(word) {
//     let result = '';
//     let newWord = word.toLowerCase();
//     for (let i = 0; i < newWord.length; i++) {
//         if ((newWord.indexOf(newWord[i], i + 1) != -1 && i != newWord.length) ||
//             (newWord.lastIndexOf(newWord[i], i - 1) != -1 && i != 0)) {
//             result += ')';
//         }
//         else {
//             result += '(';
//         }
//     }
//     return result;
// }

// console.log(duplicateEncode(w2))