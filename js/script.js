// Handling PopUp Data Cars 
const carsData = {
    "car-1": {
        name: "Toyota Corolla",
        price: "$40/day",
        category: "Mid-Range",
        performance: "Reliable handling, 139 hp, 0-60 mph in 10.5 sec.",
        power: "1.8L 4-cylinder engine.",
        fuel: "29 MPG city / 38 MPG highway.",
        description: "Compact and efficient for city driving. Ideal for budget-conscious renters. Smooth and comfortable ride."
    },
    "car-5": {
        name: "Honda Civic",
        price: "$45/day",
        category: "Mid-Range",
        performance: "Agile handling, 158 hp, 0-60 mph in 8.2 sec.",
        power: "2.0L 4-cylinder engine.",
        fuel: "30 MPG city / 38 MPG highway.",
        description: "Sporty yet practical sedan. Perfect for urban adventures. Fuel-efficient and stylish."
    },
    "car-4": {
        name: "Hyundai Elantra",
        price: "$38/day",
        category: "Mid-Range",
        performance: "Responsive steering, 147 hp, 0-60 mph in 8.5 sec.",
        power: "2.0L 4-cylinder engine.",
        fuel: "31 MPG city / 41 MPG highway.",
        description: "Modern design with great value. Excellent for long trips. Comfortable and tech-savvy."
    },
    "car-3": {
        name: "Nissan Versa",
        price: "$35/day",
        category: "Mid-Range",
        performance: "Decent handling, 122 hp, 0-60 mph in 10.8 sec.",
        power: "1.6L 4-cylinder engine.",
        fuel: "27 MPG city / 35 MPG highway.",
        description: "Affordable and easy to drive. Great for short commutes. Simple yet reliable."
    },
    "car-16": {
        name: "Kia Forte",
        price: "$37/day",
        category: "Mid-Range",
        performance: "Solid handling, 147 hp, 0-60 mph in 8.6 sec.",
        power: "2.0L 4-cylinder engine.",
        fuel: "29 MPG city / 40 MPG highway.",
        description: "Stylish and efficient choice. Ideal for daily use. Spacious interior."
    },
    "car-15": {
        name: "Chevrolet Spark",
        price: "$30/day",
        category: "Mid-Range",
        performance: "Light and nimble, 98 hp, 0-60 mph in 11.5 sec.",
        power: "1.4L 4-cylinder engine.",
        fuel: "29 MPG city / 38 MPG highway.",
        description: "Perfect for city parking. Economical and fun. Compact and easy to maneuver."
    },
    "car-21": {
        name: "Mitsubishi Mirage",
        price: "$32/day",
        category: "Mid-Range",
        performance: "Easy handling, 78 hp, 0-60 mph in 12.0 sec.",
        power: "1.2L 3-cylinder engine.",
        fuel: "36 MPG city / 43 MPG highway.",
        description: "Compact and ultra-efficient. Perfect for city driving. Budget-friendly with great fuel economy."
    },
    "car-14": {
        name: "Volkswagen Jetta",
        price: "$42/day",
        category: "Mid-Range",
        performance: "Smooth ride, 147 hp, 0-60 mph in 8.6 sec.",
        power: "1.4L 4-cylinder turbo engine.",
        fuel: "30 MPG city / 40 MPG highway.",
        description: "Elegant and refined sedan. Great for business trips. Comfort meets technology."
    },
    "car-30": {
        name: "Ford Fusion",
        price: "$60/day",
        category: "Luxury",
        performance: "Balanced handling, 175 hp, 0-60 mph in 8.5 sec.",
        power: "2.5L 4-cylinder engine.",
        fuel: "21 MPG city / 31 MPG highway.",
        description: "Sophisticated mid-size sedan. Ideal for comfortable cruises. Blend of luxury and efficiency."
    },
    "car-2": {
        name: "Chevrolet Malibu",
        price: "$65/day",
        category: "Luxury",
        performance: "Stable ride, 160 hp, 0-60 mph in 8.8 sec.",
        power: "1.5L 4-cylinder turbo engine.",
        fuel: "29 MPG city / 36 MPG highway.",
        description: "Spacious and stylish. Perfect for family outings. Smooth driving experience."
    },
    "car-9": {
        name: "Mazda 6",
        price: "$62/day",
        category: "Luxury",
        performance: "Dynamic handling, 187 hp, 0-60 mph in 7.6 sec.",
        power: "2.5L 4-cylinder engine.",
        fuel: "26 MPG city / 35 MPG highway.",
        description: "Sporty and elegant design. Great for long drives. Premium feel on a budget."
    },
    "car-8": {
        name: "Subaru Legacy",
        price: "$58/day",
        category: "Luxury",
        performance: "All-wheel drive, 182 hp, 0-60 mph in 8.4 sec.",
        power: "2.5L 4-cylinder engine.",
        fuel: "27 MPG city / 35 MPG highway.",
        description: "Reliable in all weather. Ideal for outdoor enthusiasts. Spacious and sturdy."
    },
    "car-20": {
        name: "Honda Accord",
        price: "$70/day",
        category: "Luxury",
        performance: "Excellent handling, 192 hp, 0-60 mph in 7.3 sec.",
        power: "1.5L 4-cylinder turbo engine.",
        fuel: "30 MPG city / 38 MPG highway.",
        description: "Luxurious and powerful. Perfect for highway travel. Advanced safety features."
    },
    "car-19": {
        name: "Nissan Altima",
        price: "$66/day",
        category: "Luxury",
        performance: "Smooth ride, 188 hp, 0-60 mph in 7.5 sec.",
        power: "2.5L 4-cylinder engine.",
        fuel: "28 MPG city / 39 MPG highway.",
        description: "Stylish and comfortable. Great for business trips. Fuel-efficient luxury."
    },
    "car-31": {
        name: "Kia Optima",
        price: "$63/day",
        category: "Luxury",
        performance: "Smooth handling, 185 hp, 0-60 mph in 7.6 sec.",
        power: "2.4L 4-cylinder engine.",
        fuel: "24 MPG city / 32 MPG highway.",
        description: "Stylish and comfortable sedan. Ideal for daily driving. Great value with upscale features."
    },
    "car-32": {
        name: "Toyota Camry",
        price: "$68/day",
        category: "Luxury",
        performance: "Stable handling, 203 hp, 0-60 mph in 7.7 sec.",
        power: "2.5L 4-cylinder engine.",
        fuel: "28 MPG city / 39 MPG highway.",
        description: "Reliable and upscale. Ideal for long journeys. Elegant interior design."
    },
    "car-7": {
        name: "BMW 5 Series",
        price: "$120/day",
        category: "Luxury",
        performance: "Exceptional handling, 248 hp, 0-60 mph in 6.0 sec.",
        power: "2.0L 4-cylinder turbo engine.",
        fuel: "24 MPG city / 34 MPG highway.",
        description: "Ultimate luxury sedan. Perfect for executive travel. Cutting-edge technology."
    },
    "car-6": {
        name: "Mercedes E-Class",
        price: "$130/day",
        category: "Luxury",
        performance: "Superior handling, 255 hp, 0-60 mph in 6.1 sec.",
        power: "2.0L 4-cylinder turbo engine.",
        fuel: "23 MPG city / 32 MPG highway.",
        description: "Pinnacle of luxury. Ideal for premium experiences. Exquisite craftsmanship."
    },
    "car-13": {
        name: "Audi A6",
        price: "$125/day",
        category: "Luxury",
        performance: "Agile and precise, 248 hp, 0-60 mph in 6.2 sec.",
        power: "2.0L 4-cylinder turbo engine.",
        fuel: "24 MPG city / 32 MPG highway.",
        description: "Sleek and sophisticated. Great for city elegance. High-tech interior."
    },
    "car-12": {
        name: "Tesla Model S",
        price: "$150/day",
        category: "Luxury",
        performance: "Electric acceleration, 670 hp, 0-60 mph in 3.1 sec.",
        power: "Dual electric motors.",
        fuel: "N/A (electric, ~100 MPGe).",
        description: "High-performance electric car. Perfect for eco-conscious drivers. Futuristic design."
    },
    "car-25": {
        name: "Lexus ES",
        price: "$135/day",
        category: "Luxury",
        performance: "Smooth and quiet, 203 hp, 0-60 mph in 8.1 sec.",
        power: "2.5L 4-cylinder engine.",
        fuel: "28 MPG city / 39 MPG highway.",
        description: "Luxurious and serene. Ideal for relaxed drives. Premium comfort."
    },
    "car-24": {
        name: "Cadillac CT6",
        price: "$140/day",
        category: "Luxury",
        performance: "Powerful handling, 265 hp, 0-60 mph in 6.2 sec.",
        power: "2.0L 4-cylinder turbo engine.",
        fuel: "23 MPG city / 32 MPG highway.",
        description: "Bold and luxurious. Perfect for statement drives. Spacious and refined."
    },
    "car-23": {
        name: "Jaguar XF",
        price: "$145/day",
        category: "Luxury",
        performance: "Dynamic handling, 247 hp, 0-60 mph in 6.3 sec.",
        power: "2.0L 4-cylinder turbo engine.",
        fuel: "25 MPG city / 34 MPG highway.",
        description: "Elegant British design. Ideal for luxury tours. Sporty yet comfortable."
    },
    "car-22": {
        name: "Tesla Model X",
        price: "$180/day",
        category: "Luxury SUV",
        performance: "Electric power, 670 hp, 0-60 mph in 2.9 sec.",
        power: "Dual electric motors.",
        fuel: "N/A (electric, ~90 MPGe).",
        description: "All-electric SUV marvel. Perfect for family adventures. Innovative falcon doors."
    },
    "car-10": {
        name: "Chevrolet Tahoe",
        price: "$100/day",
        category: "SUV",
        performance: "Robust handling, 355 hp, 0-60 mph in 6.7 sec.",
        power: "5.3L V8 engine.",
        fuel: "15 MPG city / 21 MPG highway.",
        description: "Spacious family SUV. Ideal for off-road trips. Powerful and reliable."
    },
    "car-11": {
        name: "Ford Explorer",
        price: "$80/day",
        category: "SUV",
        performance: "Capable handling, 300 hp, 0-60 mph in 6.5 sec.",
        power: "2.3L 4-cylinder turbo engine.",
        fuel: "20 MPG city / 27 MPG highway.",
        description: "Versatile and rugged. Perfect for outdoor fun. Comfortable seating."
    },
    "car-17": {
        name: "Toyota Highlander",
        price: "$90/day",
        category: "SUV",
        performance: "Stable ride, 295 hp, 0-60 mph in 6.8 sec.",
        power: "3.5L V6 engine.",
        fuel: "21 MPG city / 29 MPG highway.",
        description: "Family-friendly SUV. Great for long trips. Reliable and safe."
    },
    "car-29": {
        name: "Jeep Grand Cherokee",
        price: "$85/day",
        category: "SUV",
        performance: "Off-road prowess, 293 hp, 0-60 mph in 7.2 sec.",
        power: "3.6L V6 engine.",
        fuel: "19 MPG city / 26 MPG highway.",
        description: "Rugged and stylish. Ideal for adventure seekers. Luxurious interior."
    },
    "car-28": {
        name: "GMC Yukon",
        price: "$110/day",
        category: "SUV",
        performance: "Powerful towing, 355 hp, 0-60 mph in 6.6 sec.",
        power: "5.3L V8 engine.",
        fuel: "16 MPG city / 22 MPG highway.",
        description: "Massive and sturdy. Perfect for large groups. Luxurious ride quality."
    },
    "car-27": {
        name: "Dodge Durango",
        price: "$95/day",
        category: "SUV",
        performance: "Strong acceleration, 293 hp, 0-60 mph in 7.6 sec.",
        power: "3.6L V6 engine.",
        fuel: "19 MPG city / 26 MPG highway.",
        description: "Bold and muscular. Ideal for power lovers. Spacious family vehicle."
    },
    "car-26": {
        name: "BMW X5",
        price: "$140/day",
        category: "SUV",
        performance: "Agile handling, 335 hp, 0-60 mph in 5.3 sec.",
        power: "3.0L 6-cylinder turbo engine.",
        fuel: "21 MPG city / 26 MPG highway.",
        description: "Luxury SUV excellence. Perfect for premium drives. Advanced technology."
    },
};

const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');
const mainLayer = document.querySelector('main');

menuBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
    mainLayer.classList.toggle('make-it-blur');
});

mainLayer.addEventListener('click', () => {
    nav.classList.remove('active');
    mainLayer.classList.remove('make-it-blur');
})


// Handling Modal Car popup
const rentBtn = document.querySelectorAll(".car .action .rent");
const carItems = document.querySelectorAll('.cars .car img');
const modal = document.getElementById('carModal');
const closeBtn = document.querySelector('.close');
let carNum;

// popup Variable
const carName = document.querySelector(".modal-content .name")
const carDescription = document.querySelector(".modal-content .description")
const carCategory = document.querySelector(".modal-content .category")
const carPerformance = document.querySelector(".modal-content .performance")
const carPower = document.querySelector(".modal-content .power")
const carFuel = document.querySelector(".modal-content .fuel")
const carPrice = document.querySelector(".modal-content .price")
const carImg = document.querySelector(".modal-content .car-popup-img")


// Show Car Data POPUP
function showCarDetails(carNum) {
    const carData = carsData[`car-${carNum}`];
    if (!carData) return;

    modal.style.display = 'block';
    carName.textContent = carData.name;
    carPrice.textContent = carData.price;
    carDescription.textContent = carData.description;
    carCategory.textContent = `Category: ${carData.category}`;
    carPerformance.textContent = `Performance: ${carData.performance}`;
    carPower.textContent = `Power: ${carData.power}`;
    carFuel.textContent = `Fuel: ${carData.fuel}`;
    carImg.src = `image/rent-${carNum}.jpg`;
}

// Show POPUP When Click On Car Image
carItems.forEach(item => {
    item.addEventListener('click', (e) => {
        const src = e.target.src;
        const match = src.match(/rent-(\d+)/);
        if (match) {
            const carNum = match[1];
            showCarDetails(carNum);
        }
    });
});

// Show POPUP When Click On Rent Button
rentBtn.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const carNum = e.target.id;
        showCarDetails(carNum);
    });
});


// Close POPUP When Click On (X) Button
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close POPUP When Click at Any Place Outside POPUP
window.addEventListener('click', (event) => {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});

// Handling favorites Container
const favoritesContainer = document.querySelector(".favorites-container");
const addCarToFavBtn = document.querySelectorAll(".add-to-favo");
const addedCars = new Set();

// Add And Remove From Favorite List With Notification
addCarToFavBtn.forEach(ele => {
    const applyFavorite = document.getElementById(ele.id);
    
    ele.addEventListener('click', function addCarToFavorites() {
        // Return If The Car Is Already Exist 
        const carNumber = ele.id.match(/\d+/)[0];
        if (addedCars.has(carNumber)) return;

        applyFavorite.style.color = "red";
        addedCars.add(carNumber);
        const favoriteDiv = document.createElement('div');
        favoriteDiv.className = 'favorite';

        favoriteDiv.innerHTML = `
        <i class="delete-car fa-solid fa-xmark"></i>
            <span>
                <img src="image/rent-${carNumber}.jpg" alt="Car-Favorite">
                <h2 class="f20 name">${carsData[`car-${carNumber}`].name}</h2>
            </span>
        <p class="f13 mt-10 color-888 description">${carsData[`car-${carNumber}`].description}</p>
        `;

        favoritesContainer.appendChild(favoriteDiv);
        showFavPopup("✅ Added To Favorites");

        const deleteBtn = favoriteDiv.querySelector('.delete-car');
        deleteBtn.addEventListener('click', function () {
            favoriteDiv.remove();
            applyFavorite.style.color = "#000";
            addedCars.delete(ele.id);
            showFavPopup("❌ Removed From Favorites");
        });
    });
});


// Handling Favorite Container
const ShowFavoCarsBtn = document.getElementById("favo-cars");
const closeFavoWindow = document.querySelector(".close-favo");

ShowFavoCarsBtn.addEventListener('click', () => {
    favoritesContainer.classList.toggle('active');
    mainLayer.style.opacity = "0.6";
    nav.classList.remove('active');
});
mainLayer.addEventListener('click', () => {
    favoritesContainer.classList.remove('active');
    mainLayer.style.opacity = "1";
})
closeFavoWindow.addEventListener('click', () => {
    favoritesContainer.classList.remove('active');
    mainLayer.style.opacity = "1";
})


// Favo popup
function showFavPopup(message) {
    const popup = document.getElementById("fav-popup");
    popup.textContent = message;
    popup.classList.add("show");

    setTimeout(() => {
        popup.classList.remove("show");
    }, 2000);
}

// Handling Dark Mode
const switchMode = document.querySelector(".checkbox");
const StartImage = document.querySelector(".start-content img");

//Add And Remove The Dark-mode Class To Elements
function toggleDarkMode() {
        const elementsToToggle = [
            "body", ".content", ".nav", "main", "header",
            "input", "textarea", ".box", ".cars", ".car", 
            ".car h3", ".box h1", ".car .action button",
            "aside a h3", "aside .menu .active", "aside a",
            "aside a i", ".modal-content", ".modal .car-detils",
            ".favorites-container", "aside h1", "main .box .title p",
            ".container .user", ".container", ".container .user h3",
            ".container .stat", ".footer", ".footer-bottom"
        ];
    
        elementsToToggle.forEach(selector => {
            document.querySelectorAll(selector).forEach(el => {
                el.classList.toggle('dark-mode');
            });
        });
    
        StartImage.src = document.body.classList.contains("dark-mode")? "image/start-image-dark.jpg" : "image/start-image.jpg";
    
        localStorage.setItem(
            'theme',
            document.body.classList.contains('dark-mode') ? 'dark' : 'light'
        );
    }

    // Turn On & Off The Dark Mode
    switchMode.addEventListener('click', toggleDarkMode);

    // loading Dark Mode When We Open Another Page
    window.addEventListener('DOMContentLoaded', () => {
        if (localStorage.getItem('theme') === 'dark') {
            toggleDarkMode();
        }
    });


    // Handling Search
    document.getElementById("searchInput").addEventListener("keydown", function (event) {
        const searchInput = document.getElementById("searchInput").value;
        if (event.key === "Enter" && searchInput.length !== 0) {
            handleSearch(searchInput);
        }
    });

    function handleSearch(userInput) {
        for (const carId in carsData) {
            const car = carsData[carId];
            if (car.name.trim().toLowerCase() === userInput.trim().toLowerCase()) {
                displaySearchInput(carId);
                return;
            }
        }
        showFavPopup("The Car Is Not Found!");
    }

    function displaySearchInput(searchId) {
        modal.style.display = 'block';
        carName.textContent = carsData[searchId].name;
        carPrice.textContent = carsData[searchId].price;
        carDescription.textContent = carsData[searchId].description;
        carCategory.textContent = `Category: ${carsData[searchId].category}`;
        carPerformance.textContent = `Performance: ${carsData[searchId].performance}`;
        carPower.textContent = `Power: ${carsData[searchId].power}`;
        carFuel.textContent = `Fuel: ${carsData[searchId].fuel}`;
        carImg.src = `image/rent-${searchId.match(/\d+/)}.jpg`;
    }

// Handling Go Top Button
let mybutton = document.getElementById("myBtn");

window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
};

mybutton.addEventListener('click', function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});