const num =("1 2 3 4 5");
function highAndLow(numbers){
    return `${Math.max(...numbers.split(" "))} ${Math.min(...numbers.split(" "))}`;
}
console.log(highAndLow(num))