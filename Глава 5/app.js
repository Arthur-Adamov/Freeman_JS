let fido = {
    name: "Fido",
    weigth: 48,
    age: 4,
    breed: "mixed",
    activity: "walkss",
}

// let bark;

// if (dog.weigth > 20) {
//     bark = "WOOF WOOF";
// } else {
//     bark = "woof woof";
// }
// let speak = dog.name + " says " + bark + " when he wants to " + dog.activity;
// console.log(speak)

// dog.years = 35;

// delete dog.years
// console.log(dog);

function loseWeight (dog, amount) {
    dog.weigth = dog.weigth - amount;
}

loseWeight(fido, 10)

console.log(fido.name + " now weighs " + fido.weigth);