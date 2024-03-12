const cars = [];
function getData(){
    const brand = document.getElementById('brand');
    const model = document.getElementById('model');
    const imgUrl = document.getElementById('imgUrl');
    const descr = document.getElementById('descr');


    const items = {
        'brand': brand.value,
        'model': model.value,
        'imgUrl':imgUrl.value,
        'descr':descr.value,

    }

    cars.push(items)
    banner()

}

function banner(){

    const elem = document.getElementById('app');

    let pattern = '';

    for(let i = 0; i <cars.length; i++){
        pattern += `
            <div class="card" style="width: 18rem;">
                <img src="${cars[i].imgUrl}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${cars[i].brand} ${cars[i].model}</h5>
                    <p class="card-text">${cars[i].descr}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        
        `
    }
    
    elem.innerHTML = pattern

}

