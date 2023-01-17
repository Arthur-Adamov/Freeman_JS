let chevy = {
    make: "Chevy",
    model: "Bel Air",
    year: 1957,
    color: "red",
    passengers: 2,
    convertiable: false,
    mileage: 1021,
};

let cady = {
    make: "Cadillac",
    model: "Eldorado",
    year: 1959,
    color: "blue",
    passengers: 4,
    convertiable: true,
    mileage: 2500,
}

let fiat = {
    make: "Fiat",
    model: "500",
    year: 1957,
    color: "Medium blue",
    passengers: 2,
    conventiable: false,
    mileage: 88000
}

let taxi = {
    make: "Webville morots",
    model: "Taxi",
    year: 1965,
    color: "yellow",
    passengers: 4,
    convertible: false,
    mileage: 281341
};

// if (fiat.year < 1965) {
//     fiat.classic = true
// }

// fiat.needsWashing = true;

// fiat.mileage = 10000

// let miles = fiat.mileage;
// console.log(miles)

// console.log(fiat)

function prequal(car) {
    if (car.mileage > 10000) {
        return false;
    } else if (car.year > 1960) {
        return false;
    }
    return true;
}

let worthALook = prequal(taxi);

if (worthALook) {
    console.log("You gotta check out this " + taxi.make + " " + taxi.model);
} else {
    console.log("You should really pass on the " + taxi.make + " " + taxi.model)
}