function makeCar () {
    let makes = ["Chevy", "GM", "Fiat", "Webville Motors", "Tucker"];
    let models = ["Cadillac", "500", "Bel-Air", "Taxi", "Torpedo"];
    let years = [1955, 1957, 1948, 1954, 1961];
    let colors = ["red", "blue", "tan", "yellow", "white"];
    let conventible = [true, false];

    let rand1 = Math.floor(Math.random() * makes.length);
    let rand2 = Math.floor(Math.random() * models.length);
    let rand3 = Math.floor(Math.random() * years.length);
    let rand4 = Math.floor(Math.random() * colors.length);
    let rand5 = Math.floor(Math.random() * 5) + 1;
    let rand6 = Math.floor(Math.random() * 2);

    let car = {
        make: makes[rand1],
        model: models[rand2],
        year: years[rand3],
        color: colors[rand4],
        passengers: rand5,
        conventible: conventible[rand6],
        mileage: 0
    }
    return car;
}

function displayCar (car) {
    console.log("Your new car is a " + car.make +  " " + car.model + " " + car.year);
};

let carToSell = makeCar();
// displayCar(carToSell);


// let randomNum = Math.floor(Math.random() * 5) + 1
// let randomNum2 = Math.floor(Math.random() * 2)
// console.log(randomNum)
// console.log(randomNum2)


var fiat = {
    make: "Fiat",
    model: "500",
    year: 1957,
    color: "Medium Blue",
    passengers: 2,
    convertible: false,
    mileage: 88000,
    started: false,
    start: function() {
        this.started = true;
    },
    stop: function() {
        this.started = false;
    },
    drive: function() {
        if (this.started) {
            console.log("Zoom zoom!");
        } else {
            console.log("You need to start the engine first.");
        }
    }
}

fiat.drive()
fiat.start()
fiat.drive()
fiat.stop()
