let x = null;
let y = null;
let znak
function getNumber(number){
    if (x === null){
        x = number
    }
    else{
        y = number
    }
}
function getSign(sign){
    
    znak = sign; 
}

function rezult(x, y, znak){

    switch(znak){
        case '+': console.log(`${x} + ${y} = ${x + y}`);
        break
        case '-': console.log(`${x} - ${y} = ${x - y}`);
        break
        case '/': console.log(`${x} / ${y} = ${x / y}`);
        break
        case '*': console.log(`${x} * ${y} = ${x * y}`);
        break

    }
}
