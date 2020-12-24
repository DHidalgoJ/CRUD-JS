const cars = [
    {
        id: 1,
        brand: 'Toyota',
        model: 'Fortuner',
        colour: 'blanco',
        year: 2015,
        price: 70000000,
        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F3.bp.blogspot.com%2F-PtDqtBly1F8%2FUV48aVfQ0wI%2FAAAAAAAAAFw%2FVoyTGoysid0%2Fs1600%2FToyota%2BFortuner2012a.jpg&f=1&nofb=1'
    },
    {
        id: 2,
        brand: 'Kia',
        model: 'Picanto Emotion',
        colour: 'rojo',
        year: 2019,
        price: 35900000,
        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FF9tw-6kqJbc%2Fmaxresdefault.jpg&f=1&nofb=1'
    },
    {
        id: 3,
        brand: 'Volkswagen',
        model: 'Tigüan',
        colour: 'Blanco',
        year: 2020,
        price: 48000000,
        image: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fs1.1zoom.me%2Fb5549%2F41%2FVolkswagen_Tiguan_R-Line_White_521324_1920x1080.jpg&f=1&nofb=1'
    },
];

function addCar() {
    const id = cars[cars.length - 1].id + 1;
    const brand = document.getElementById('brand').value;
    const model = document.getElementById('model').value;
    const colour = document.getElementById('colour').value;
    const year = document.getElementById('year').value;
    const price = document.getElementById('price').value;
    const image = document.getElementById('image').value;

   const newCar = {
        id,
        brand,
        model,
        colour,
        year,
        price,
        image
   }

   cars.push(newCar);
   document.getElementById('frm-car').reset();
   printCars();
}

function editCar(id){
    let car = cars.find(car => car.id === id);
    document.getElementById('id').value = car.id;
    document.getElementById('brand').value = car.brand;
    document.getElementById('model').value = car.model;
    document.getElementById('colour').value = car.colour;
    document.getElementById('year').value = car.year;
    document.getElementById('price').value = car.price;
    document.getElementById('image').value = car.image;
    showHideButtons();
}

function saveModificationCar() {
    const id = document.getElementById('id').value;
    const brand = document.getElementById('brand').value;
    const model = document.getElementById('model').value;
    const colour = document.getElementById('colour').value;
    const year = document.getElementById('year').value;
    const price = document.getElementById('price').value;
    const image = document.getElementById('image').value;
    let car = cars.find(car => car.id == id);
    car.brand = brand;
    car.model = model;
    car.colour = colour;
    car.year = year;
    car.price = price;
    car.image = image;

    showHideButtons();
    document.getElementById('frm-car').reset();
    printCars();
}

function showHideButtons() {
    let buttons = document.getElementsByClassName('btn');
    for (const key of buttons) {
        key.classList.toggle('d-none');
    }
}

function cancelModificationCar() {
    showHideButtons();
    document.getElementById('frm-car').reset();
}

function deleteCar(id) {
    const index = cars.findIndex(car => car.id === id);
    cars.splice(index,1);
    printCars();
}

function printCars() {
    const container = document.getElementById('container-cards');
    let html = '';
    cars.forEach((car) => {
        html += `
        <tr>
            <td>${car.brand}</td>
            <td>${car.model}</td>
            <td>${car.colour}</td>
            <td>${car.year}</td>
            <td>${car.price}</td>
            <td><img src="${car.image}" alt="${car.brand}-${car.model}"></td>
            <td>
                <i class="fa fa-edit" title="editar" onclick="editCar(${car.id})"></i>
                <i class="fa fa-trash" title="eliminar" onclick="deleteCar(${car.id})"></i>
            </td>
        </tr>`;
    });
    container.innerHTML = html;
}

printCars();