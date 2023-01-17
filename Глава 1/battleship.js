let randomLoc = Math.floor(Math.random() * 5);

let location1 = randomLoc;
let location2 = location1 + 1;
let location3 = location2 + 1;

let guess;
let hits = 0;
let guesses = 0;
let isSunk = false;

console.log(location1)
console.log(location2)
console.log(location3)

const tryArr = []; // создаем массив для всех введенных значений

while (isSunk === false) {
    
    guess = prompt('Ready, aim, fire! (enter the number 0-6):');

    tryArr.push(guess); //помещаем введеное значение в массив
    console.log(tryArr);

    if (guess < 0 || guess > 6) {
        alert('Plese enter a valid cell number') 
    } else {
        guesses += 1;
    
        if (guess == location1 || guess == location2 || guess == location3) {
            alert('HIT')
            hits += 1;

            if (hits === 3) {
                isSunk = true;
                alert('You sank my battleship!');
            }
        } else {
            alert('Miss')
        }
    
    }
}

let stats = 'You took ' + guesses + ' guesses to sink the battleship, ' + 'which means your shooting accuracy was ' + (3/guesses);

alert(stats);


