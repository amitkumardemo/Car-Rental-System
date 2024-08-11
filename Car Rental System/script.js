// Navbar Toggle
const navbarToggle = document.getElementById('navbar-toggle');
const navbarMenu = document.getElementById('navbar-menu');

navbarToggle.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
});

// Populate car list
const cars = [
    { id: 1, model: 'Toyota Corolla', brand: 'Toyota', dailyRate: 30, imageUrl: 'https://moneyinc.com/wp-content/uploads/2016/08/1957-Chevy-Bel-Air-Red.jpg'},
    { id: 2, model: 'Honda Civic', brand: 'Honda', dailyRate: 32, imageUrl: 'https://tse4.mm.bing.net/th?id=OIP.OHWbPezrg_DamDg2sSlu7QHaE6&pid=Api&P=0&h=180' },
    { id: 3, model: 'Ford Focus', brand: 'Ford', dailyRate: 25, imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.HtG1cncjv4CVmUqtacPW5wHaEK&pid=Api&P=0&h=180' },
    { id: 4, model: 'Chevrolet Malibu', brand: 'Chevrolet', dailyRate: 28, imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.IoSEEwX-lC2pj5koaC8uRgHaE7&pid=Api&P=0&h=180' },
    { id: 5, model: 'Nissan Altima', brand: 'Nissan', dailyRate: 32, imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.MxskOsrr0l_-ai4fwO-nbQHaEo&pid=Api&P=0&h=180' },
    { id: 6, model: 'Hyundai Sonata', brand: 'Hyundai', dailyRate: 27, imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.aK1gTWopRzO4OquRVJlG4gHaE8&pid=Api&P=0&h=180' },
    { id: 7, model: 'Subaru Impreza', brand: 'Subaru', dailyRate: 30, imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.u9LYSJp6hBMC_byM0EAuAQHaEj&pid=Api&P=0&h=180' },
    { id: 8, model: 'Kia Optima', brand: 'Kia', dailyRate: 29, imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.AINVnW37RaKjhZw0qcVqKQHaEK&pid=Api&P=0&h=180' },
    { id: 9, model: 'Mazda 3', brand: 'Mazda', dailyRate: 34, imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.Nef3M9U-okHM-uEGSluhOgHaEK&pid=Api&P=0&h=180' },
    { id: 10, model: 'Volkswagen Jetta', brand: 'Volkswagen', dailyRate: 31, imageUrl: 'https://tse4.mm.bing.net/th?id=OIP.-qzOi_8rwYQ4Xtxg38IgQwHaEo&pid=Api&P=0&h=180' },
    { id: 11, model: 'Audi A4', brand: 'Audi', dailyRate: 45, imageUrl: 'https://tse2.mm.bing.net/th?id=OIP.2Jv92od7hf2hVjq_6JypOgHaEc&pid=Api&P=0&h=180' },
    { id: 12, model: 'BMW 3 Series', brand: 'BMW', dailyRate: 50, imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.ZkwBx6ADuigOVS-hP3K6IwHaFj&pid=Api&P=0&h=180' },
    { id: 13, model: 'Mercedes-Benz C-Class', brand: 'Mercedes-Benz', dailyRate: 55, imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.0tZoTCi9e27FBREAUxes_wHaDp&pid=Api&P=0&h=180' },
    { id: 14, model: 'Lexus ES', brand: 'Lexus', dailyRate: 52, imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.0tZoTCi9e27FBREAUxes_wHaDp&pid=Api&P=0&h=180' },
    { id: 15, model: 'Infiniti Q50', brand: 'Infiniti', dailyRate: 48, imageUrl: 'https://tse4.mm.bing.net/th?id=OIP.4wh1fOH9455IzIeXlprb8wHaEC&pid=Api&P=0&h=180' },
    { id: 16, model: 'Acura TLX', brand: 'Acura', dailyRate: 47, imageUrl: 'https://tse4.mm.bing.net/th?id=OIP.ZjE5miDzMLX6GFJlSD0rnwHaEK&pid=Api&P=0&h=180' },
    { id: 17, model: 'Cadillac CTS', brand: 'Cadillac', dailyRate: 53, imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.EZmDPfuZ_-6CF51rTbkJ6AHaE8&pid=Api&P=0&h=180' },
    { id: 18, model: 'Buick Regal', brand: 'Buick', dailyRate: 46, imageUrl: 'https://tse2.mm.bing.net/th?id=OIP.c58ID6VPsibqqvsdag-N7AHaFC&pid=Api&P=0&h=180' },
    { id: 19, model: 'Chrysler 300', brand: 'Chrysler', dailyRate: 49, imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.GsFhlMhsKfHivYI-AqNmVwHaD2&pid=Api&P=0&h=180' },
    { id: 20, model: 'Genesis G70', brand: 'Genesis', dailyRate: 54, imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.vVrqChc_fDkJVuI0FmgQywHaHa&pid=Api&P=0&h=180' },
    { id: 21, model: 'Toyota Camry', brand: 'Toyota', dailyRate: 33, imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.dCnKNa2tVFnsb8Hv0dikeQAAAA&pid=Api&P=0&h=180' },
    { id: 22, model: 'Honda Accord', brand: 'Honda', dailyRate: 37, imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.UPxupZuwH-2iJIre8BE8kgHaD4&pid=Api&P=0&h=180' },
    { id: 23, model: 'Ford Fusion', brand: 'Ford', dailyRate: 29, imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.SMVmNIulpiBfMy0LWQydUAHaEK&pid=Api&P=0&h=180' },
    { id: 24, model: 'Chevrolet Cruze', brand: 'Chevrolet', dailyRate: 28, imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.uHsTc82tlc9Hb0_u1BvsegHaFj&pid=Api&P=0&h=180' },
    { id: 25, model: 'Nissan Sentra', brand: 'Nissan', dailyRate: 31, imageUrl: 'https://tse4.mm.bing.net/th?id=OIP.4wh1fOH9455IzIeXlprb8wHaEC&pid=Api&P=0&h=180' },
    { id: 26, model: 'Hyundai Elantra', brand: 'Hyundai', dailyRate: 26, imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.TnrOwhGnEbJmnZGnccC0ygHaEK&pid=Api&P=0&h=180' },
    { id: 27, model: 'Subaru Legacy', brand: 'Subaru', dailyRate: 30, imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.2Mp7Bw5c9FwlIwnovARTJwHaEL&pid=Api&P=0&h=180' },
    { id: 28, model: 'Kia Forte', brand: 'Kia', dailyRate: 28, imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.ggq-NP9D5GhroVLO0toSsQHaEo&pid=Api&P=0&h=180' },
    { id: 29, model: 'Mazda 6', brand: 'Mazda', dailyRate: 35, imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.to1dXslVy6R2ywQiUI8IhQAAAA&pid=Api&P=0&h=180' },
    { id: 30, model: 'Volkswagen Passat', brand: 'Volkswagen', dailyRate: 32, imageUrl: 'https://tse4.mm.bing.net/th?id=OIP.w2g4Abq4eFsu_ovPk9XvbQHaDt&pid=Api&P=0&h=180' },
    { id: 31, model: 'Audi A3', brand: 'Audi', dailyRate: 40, imageUrl: 'https://tse4.mm.bing.net/th?id=OIP.FgZ1tAkBXDrwd8GJNvfu8wHaEK&pid=Api&P=0&h=180' },
    { id: 32, model: 'BMW 4 Series', brand: 'BMW', dailyRate: 55, imageUrl: 'https://tse4.mm.bing.net/th?id=OIP.vVtFhLXopn2Fr42IrsTufQAAAA&pid=Api&P=0&h=180' },
    { id: 33, model: 'Mercedes-Benz CLA', brand: 'Mercedes-Benz', dailyRate: 57, imageUrl: 'https://tse4.mm.bing.net/th?id=OIP.Ag3AVZbHOwGryMr57BCLTAHaE8&pid=Api&P=0&h=180' },
    { id: 34, model: 'Lexus RX', brand: 'Lexus', dailyRate: 60, imageUrl: 'https://tse4.mm.bing.net/th?id=OIP.u5EbBLa0wyub-sC_5J_XPQHaEK&pid=Api&P=0&h=180' },
    { id: 35, model: 'Infiniti Q60', brand: 'Infiniti', dailyRate: 58, imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.mIc1-VMnWAeGX5qy8BQojAAAAA&pid=Api&P=0&h=180' },
    { id: 36, model: 'Acura RDX', brand: 'Acura', dailyRate: 62, imageUrl: 'https://tse4.mm.bing.net/th?id=OIP.26VBx6B12SHd99bF1mP6QQHaEK&pid=Api&P=0&h=180' },
    { id: 37, model: 'Cadillac XTS', brand: 'Cadillac', dailyRate: 65, imageUrl: 'https://tse2.mm.bing.net/th?id=OIP.nRarcCGJQQDR71dZMdpQ2AAAAA&pid=Api&P=0&h=180' },
    { id: 38, model: 'Buick Enclave', brand: 'Buick', dailyRate: 68, imageUrl: 'https://tse2.mm.bing.net/th?id=OIP.nRarcCGJQQDR71dZMdpQ2AAAAA&pid=Api&P=0&h=180' },
    { id: 39, model: 'Chrysler Pacifica', brand: 'Chrysler', dailyRate: 72, imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.eg0-KeF7_yMTyYdDbTj-CwHaEZ&pid=Api&P=0&h=180' },
    { id: 40, model: 'Genesis G80', brand: 'Genesis', dailyRate: 70, imageUrl: 'https://tse2.mm.bing.net/th?id=OIP.Gu5IfO-gvm0wEp8keH14KwHaEL&pid=Api&P=0&h=180' },
    { id: 41, model: 'Toyota Prius', brand: 'Toyota', dailyRate: 25, imageUrl: 'https://tse4.mm.bing.net/th?id=OIP.O3mwoK7MKHRLY3s_1glykAHaDt&pid=Api&P=0&h=180' },
    { id: 42, model: 'Honda Fit', brand: 'Honda', dailyRate: 22, imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.fpeJLFlrxB-JJVHaZygKegHaE8&pid=Api&P=0&h=180' },
    { id: 43, model: 'Ford Fiesta', brand: 'Ford', dailyRate: 21, imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.NrDUX5FcbdAaTsM8BUfsrgAAAA&pid=Api&P=0&h=180' },
    { id: 44, model: 'Chevrolet Sonic', brand: 'Chevrolet', dailyRate: 23, imageUrl: 'https://tse2.mm.bing.net/th?id=OIP.yLH4IfC3JSiwPG3wR3YM6wHaEK&pid=Api&P=0&h=180' },
    { id: 45, model: 'Nissan Versa', brand: 'Nissan', dailyRate: 20, imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.rrx7EWHe9MwKyncAGGHjWAHaCW&pid=Api&P=0&h=180' },
    { id: 46, model: 'Hyundai Accent', brand: 'Hyundai', dailyRate: 22, imageUrl: 'https://tse4.mm.bing.net/th?id=OIP.3xvpTFN9nX-2il3zyzFu1wHaDO&pid=Api&P=0&h=180' },
    { id: 47, model: 'Subaru Crosstrek', brand: 'Subaru', dailyRate: 35, imageUrl: 'https://tse4.mm.bing.net/th?id=OIP.Y9UCJhf1fdJ3sat18YkJFQHaEK&pid=Api&P=0&h=180' },
    { id: 48, model: 'Kia Soul', brand: 'Kia', dailyRate: 28, imageUrl: 'https://tse2.mm.bing.net/th?id=OIP.8emctrO36WC47JVly4R1IgHaDt&pid=Api&P=0&h=180' },
    { id: 49, model: 'Mazda CX-5', brand: 'Mazda', dailyRate: 40, imageUrl: 'https://tse2.mm.bing.net/th?id=OIP.TEY0e-AaYIHBks3hpdeKeAHaE8&pid=Api&P=0&h=180' },
    { id: 50, model: 'Volkswagen Tiguan', brand: 'Volkswagen', dailyRate: 38, imageUrl: 'https://tse2.mm.bing.net/th?id=OIF.BDHeBG1E5DI0cwKGlNfO%2fw&pid=Api&P=0&h=180' }

    // Add more cars as needed
];

const carListElement = document.getElementById('cars-list');
const carSelectElement = document.getElementById('car-select');

cars.forEach(car => {
    const carCard = document.createElement('div');
    carCard.className = 'car-card';
    carCard.dataset.carId = car.id;

    const carImage = document.createElement('img');
    carImage.className = 'car-image';
    carImage.src = car.imageUrl;
    carCard.appendChild(carImage);

    const carInfo = document.createElement('div');
    carInfo.className = 'car-info';

    const carModel = document.createElement('h3');
    carModel.textContent = car.model;
    carInfo.appendChild(carModel);

    const carBrand = document.createElement('p');
    carBrand.textContent = `Brand: ${car.brand}`;
    carInfo.appendChild(carBrand);

    const carRate = document.createElement('p');
    carRate.textContent = `Daily Rate: $${car.dailyRate}`;
    carInfo.appendChild(carRate);

    carCard.appendChild(carInfo);
    carListElement.appendChild(carCard);

    const option = document.createElement('option');
    option.value = car.id;
    option.textContent = car.model;
    carSelectElement.appendChild(option);
});

// Handle car card click
carListElement.addEventListener('click', (event) => {
    const carCard = event.target.closest('.car-card');
    if (carCard) {
        const carId = carCard.dataset.carId;
        const form = document.getElementById('rent-form');
        document.getElementById('car-select').value = carId;
        form.scrollIntoView({ behavior: 'smooth' });
    }
});

// Handle form submission
document.getElementById('rent-form').addEventListener('submit', (event) => {
    event.preventDefault();

    const carId = document.getElementById('car-select').value;
    const customerName = document.getElementById('customer-name').value;
    const rentalDays = document.getElementById('rental-days').value;

    const selectedCar = cars.find(car => car.id == carId);
    const totalCost = selectedCar.dailyRate * rentalDays;

    // Redirect to thank you page
    window.location.href = `thankyou.html?name=${encodeURIComponent(customerName)}&car=${encodeURIComponent(selectedCar.model)}&days=${rentalDays}&total=${totalCost.toFixed(2)}`;
});
