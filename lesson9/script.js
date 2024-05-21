const cars = [];
const elem = document.getElementById('app');
const up = document.getElementById('up')
function getData() {
    const brand = document.getElementById('brand');
    const model = document.getElementById('model');
    const imgUrl = document.getElementById('imgUrl');
    const descr = document.getElementById('descr');
    const price = document.getElementById('price');


    const items = {
        'id': (Math.random()).toString().split('.')[1],
        'brand': brand.value,
        'model': model.value,
        'imgUrl': imgUrl.value,
        'price': price.value,
        'descr': descr.value,

    }

    cars.push(items)
    banner()

}

function banner() {
    const card = document.querySelectorAll('.card');
    const app = document.querySelector('#app');
    if (card.length > 0) {
        app.innerHTML = '';
    }

    for (let i = 0; i < cars.length; i++) {
        createCard(
            cars[i].imgUrl,
            cars[i].brand,
            cars[i].model,
            cars[i].price,
            cars[i].descr,
        )
    }

    // let pattern = '';

    // for(let i = 0; i <cars.length; i++){
    //     pattern += `
    //         <div class="card" style="width: 18rem;">
    //             <img src="${cars[i].imgUrl}" class="card-img-top" alt="...">
    //             <div class="card-body">
    //                 <h5 class="card-title">${cars[i].brand} ${cars[i].model}</h5>
    //                 <p class="card-text">${cars[i].descr}</p>
    //                 <a href="#" class="btn btn-primary">Go somewhere</a>
    //             </div>
    //         </div>

    //     `
    // }

    // elem.innerHTML = pattern

}
const deleteCard = (e) => {
    const { id } = e.currentTarget.dataset;
    const filteredCard = cars.filter(car => car.id !== id);
    cars = [...filteredCard];
    banner();
}


const createCard = (...data) => {
    const [imgUrl, brand, model, price, descr] = data;

    ``

    const divCard = document.createElement('div');
    div.setAttribute('class', 'card');
    const img = document.createElement('img');
    img.setAttribute('src', imgUrl);
    img.setAttribute('src', 'card-img-top');


    const divBody = document.createElement('div');
    divBody.setAttribute('class', 'card-body');

    const h5 = document.createElement('h5');
    h5.setAttribute('class', 'card-title');
    const h5Text = document.createTextNode(`${brand} ${model}`);
    h5.appendChild(h5Text)

    const priceP = document.createElement('p');
    priceP.setAttribute('class', 'card-text');
    const pricePText = document.createTextNode(`${price}`);
    priceP.appendChild(pricePText)

    const p = document.createElement('p');
    p.setAttribute('class', 'card-text');
    const pText = document.createTextNode(`${descr}`);
    p.appendChild(pText)

    const a = document.createElement('a');
    const aText = document.createTextNode(`${imgUrl}`)
    a.setAttribute('class', 'btn btn-primary');

    divBody.appendChild(img);
    divBody.appendChild(h5);
    divBody.appendChild(p);
    divBody.appendChild(priceP)

    divCard.appendChild(divBody);
    elem.appendChild(divCard)



}

createCard('mers.webp', 'mersedes', 'e', 'lorem')