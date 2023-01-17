function bake (degrees) {

    let message;
    if (degrees > 500) {
        message = "I'm not a nuclear reactor!"
    } else if (degrees < 100) {
        message = "I'm not a refrigerator!"
    } else {
        message = "That's a very comfortable temperature for me."
    }
    return message;
}

let stat = bake(350)

console.log(stat)