const A = ['a' ,'a', 't', 'e', 'f', 'i', 'j'];
const B = ['t', 'g', 'g', 'i', 'k', 'f'];
function diff (x, y){
    let c = []
    x.forEach(element => {
        if(c.includes(element)){
        return c
        }
        if(!y.includes(element)){
            c.push(element)
        }
    });
    y.forEach(el => {
        if(c.includes(el)){
            return c
        }
        if(!x.includes(el)){
            c.push(el)
        }
    })
    c.sort()
    return c
}
console.log(diff(A,B));


