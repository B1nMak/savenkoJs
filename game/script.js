const area = document.querySelector('.area');
const square = document.querySelector('.square');
const timer = 0;

let x = 0;
let y = 0;

window.addEventListener('keydown', (event) => {

    switch (event.keyCode) {
        case 68: {
            if (timer) {
                clearInterval(timer);
                timer = 0;
            }
            timer = setInterval(() => {
                
                if (square.offsetLeft === 500) {
                    x += 0;
                    console.log(x);
                    square.style.left += `0px`
                    clearInterval(timer)
                }
                x += 1
                console.log(x)
                square.style.left = `${x}px`
            }, 16)
            break;
        }
        case 65: {
            if (timer) {
                clearInterval(timer);
                timer = 0;
            }
            timer = setInterval(() => {
                x -= 1
                square.style.left = `${x}px`
            }, 16);

            break;


        }
        case 83: {
            if (timer) {
                clearInterval(timer);
                timer = 0;
            }
            timer = setInterval(() => {
                y += 1;
                square.style.top = `${y}px`;
            }, 16);

        }
        case 87: {
            if (timer) {
                clearInterval(timer);
                timer = 0;
            }
            timer = setInterval(() => {
                y -= 1;
                square.style.top = `${y}px`;
            }, 16)
        }
    }

    // switch(event.keyCode){
    //     case 68: {
    //         if(x< area.offsetWidth - 100){
    //             x+= 10;
    //             square.style.left = `${x}px`;
    //             break
    //         }
    //         else if(square.style.left = area.offsetWidth-100){
    //             x+=0;
    //             square.style.left = `${x}px`;
    //             break
    //         }
    //     }
    //     case 65: {
    //         if (x > 0){
    //             x += -10;
    //             square.style.left = `${x}px`;
    //             break
    //         }
    //         else if(x = 0){
    //             x += 0
    //             square.style.left = `${x}px`;
    //             break
    //         }
    //   }
    //     case 83: {
    //         if (y < area.offsetHeight - 100){
    //             y += 10;
    //             square.style.top = `${y}px`;
    //             break
    //         }
    //         else if(y = area.offsetHeight - 100){
    //             y += 0;
    //             square.style.top = `${y}px`;
    //             break
    //         }
    //     }
    //     case 87: {
    //         if (y > 0){
    //             y += -10;
    //             square.style.top = `${y}px`;
    //             break
    //         }
    //         else if(y = 0 ){
    //             y += 0;
    //             square.style.top = `${y}px`;
    //             break
    //         }
    //     }
    // }

})
console.log(square.offsetLeft)
console.log(area.offsetWidth)
console.log(area.offsetHeight)