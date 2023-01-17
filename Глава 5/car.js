let fiat = {
    make: "Fiat",
    model: "500",
    year: 1957,
    color: "Medium blue",
    passengers: 2,
    conventiable: false,
    mileage: 88000,

    started: false,
    fuel: 0,

    start: function() {
        if (this.fuel == 0) {
            console.log("The car is on empty, fill up before starting!")
        } else {
            this.started = true
        }
    },

    stop: function() {
        this.started = false
    },

    drive: function() {
        if(this.started) {
            if (this.fuel > 0) {
                console.log(this.make + " " + this.model + " goes zoom zoom!")
                this.fuel = this.fuel - 1
            } else {
                console.log("Uh oh, out of fuel.")
                this.stop()
            }
        } else {
            console.log("You need to start the engine first.")
        }
    },
    
    addFuel: function(amount) {
        this.fuel = this.fuel + amount
    }
}


fiat.start();
fiat.drive();
fiat.addFuel(2);
fiat.start();
fiat.drive();
fiat.drive();
fiat.drive();
fiat.stop();



let chevy = {
    make: "Chevy",
    model: "Bel Air",
    year: 1957,
    color: "red",
    passengers: 2,
    convertiable: false,
    mileage: 1021,

    started: false,
    start: function() {
        this.started = true
    },
    stop: function() {
        this.started = false
    },
    drive: function() {
        if(this.started) {
            console.log(this.make + " " + this.model + " goes zoom zoom!")
        } else {
            console.log("You need to start the engine first.")
        }
    }
};

let cadi = {
    make: "GM",
    model: "Cadillac",
    year: 1955,
    color: "tan",
    passengers: 5,
    convertiable: false,
    mileage: 12892,

    started: false,
    start: function() {
        this.started = true
    },
    stop: function() {
        this.started = false
    },
    drive: function() {
        if(this.started) {
            console.log(this.make + " " + this.model + " goes zoom zoom!")
        } else {
            console.log("You need to start the engine first.")
        }
    }
}

let taxi = {
    make: "Webville morots",
    model: "Taxi",
    year: 1955,
    color: "yellow",
    passengers: 4,
    convertible: false,
    mileage: 281341,

    started: false,
    start: function() {
        this.started = true
    },
    stop: function() {
        this.started = false
    },
    drive: function() {
        if(this.started) {
            console.log(this.make + " " + this.model + " goes zoom zoom!")
        } else {
            console.log("You need to start the engine first.")
        }
    }
};






// if (fiat.year < 1965) {
//     fiat.classic = true
// }

// fiat.needsWashing = true;

// fiat.mileage = 10000

// let miles = fiat.mileage;
// console.log(miles)

// console.log(fiat)

// function prequal(car) {
//     if (car.mileage > 10000) {
//         return false;
//     } else if (car.year > 1960) {
//         return false;
//     }
//     return true;
// }

// let worthALook = prequal(taxi);

// if (worthALook) {
//     console.log("You gotta check out this " + taxi.make + " " + taxi.model);
// } else {
//     console.log("You should really pass on the " + taxi.make + " " + taxi.model)
// }