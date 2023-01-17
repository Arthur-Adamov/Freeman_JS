function findCarInLot(car) {
    for (let i = 0; i < lot.length; i++) {
        if (car === lot[i]) {
            return i
        }      
    }
    return -1
}

const chevy = {
    make: "Chevy",
    model: "Bel Air"
}
const taxi = {
    make: "Webwille Motors",
    model: "Taxi"
}
const fiat1 = {
    make: "Fiat",
    model: "500"
}
const fiat2 = {
    make: "Fiat",
    model: "500"
}

let lot = [chevy, taxi, fiat1, fiat2]

let loc1 = findCarInLot(fiat2)
let loc2 = findCarInLot(taxi)
let loc3 = findCarInLot(chevy)
let loc4 = findCarInLot(fiat1)

console.log(loc1)
console.log(loc2)
console.log(loc3)
console.log(loc4)


let test = []

if (test) {
    console.log("выражение истино")
} else {
    console.log("выражение не истино")
}

