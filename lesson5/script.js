const cars = [
    {
        brand: 'bmw',
        img:'bmw-x6.png',
        model:'X6',
        descr:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet at architecto quidem consectetur voluptatum illum tenetur ut voluptas assumenda amet beatae, doloribus dolorem voluptates sunt ducimus harum. Omnis, quos amet?'
    },
    {
        brand:'audi',
        img:'AudiRS6.jpeg',
        model:'RS6',
        descr:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet at architecto quidem consectetur voluptatum illum tenetur ut voluptas assumenda amet beatae, doloribus dolorem voluptates sunt ducimus harum. Omnis, quos amet?'
    },
    {
        brand:'mersedes',
        img:'mers.webp',
        model:'E-class',
        descr:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet at architecto quidem consectetur voluptatum illum tenetur ut voluptas assumenda amet beatae, doloribus dolorem voluptates sunt ducimus harum. Omnis, quos amet?'
    },
    {
        brand:'mersedes',
        img:'mers.webp',
        model:'E-class',
        descr:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet at architecto quidem consectetur voluptatum illum tenetur ut voluptas assumenda amet beatae, doloribus dolorem voluptates sunt ducimus harum. Omnis, quos amet?'
    },
    {
        brand:'audi',
        img:'AudiRS6.jpeg',
        model:'RS6',
        descr:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet at architecto quidem consectetur voluptatum illum tenetur ut voluptas assumenda amet beatae, doloribus dolorem voluptates sunt ducimus harum. Omnis, quos amet?'
    },
    {
        brand: 'bmw',
        img:'bmw-x6.png',
        model:'X6',
        descr:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet at architecto quidem consectetur voluptatum illum tenetur ut voluptas assumenda amet beatae, doloribus dolorem voluptates sunt ducimus harum. Omnis, quos amet?'
    },
];



function banner(){

    const elem = document.getElementById('cards');

    let pattern = '';

    for(let i = 0; i <cars.length; i++){
        pattern += `
            <div class="card" style="width: 18rem;">
                <img src="${cars[i].img}" class="card-img-top" alt="...">
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

banner()
