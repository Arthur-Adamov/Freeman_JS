// // charAT

// let input = "jenny@wickedlysmart.com"

// for ( let i = 0; i < input.length; i++ ) {
//     if (input.charAt(i) === "@") {
//         console.log("There's an @ sign at index " + i)
//     }
// }


// // indexOf

// let phrase = "the cat in the hat"

// // let index = phrase.indexOf("cat")
// let index = phrase.indexOf("the", 5)

// console.log("there's a cat sitting at index " + index)


// // substring and split

// let data = "name|phone|address"

// let val = data.substring(5, 10)
// console.log(`Substring is ${val}`)

// let vals = data.split("|")
// console.log("Split array is", vals)


// Task

// let phoneNumber = "123-4567"

// Вариант 1

// function validate (phoneNumber) {
//     if ( phoneNumber.length > 8 || phoneNumber.length < 7) {
//         return false
//     }
//     for (let i = 0; i < phoneNumber.length; i++) {
//         if (i === 3) {
//             if (phoneNumber.length === 8 && phoneNumber.charAt(i) !== '-') {
//                 return false
//             } else if (phoneNumber.length === 7 && isNaN(phoneNumber.charAt(i))) {
//                 return false
//             }
//         } else if (isNaN(phoneNumber.charAt(i))) {
//             return false
//         }
//         } return true 
// }

// Вариант 2

// function validate(phoneNumber) {
//     if (phoneNumber.length > 8 || phoneNumber.length < 7) {
//         return false
//     }
//     let first = phoneNumber.substring(0, 3)
//     let second = phoneNumber.substring(phoneNumber.length - 4)

//     if (isNaN(first) || isNaN(second)) {
//         return false
//     }
//     if (phoneNumber.length === 8 && phoneNumber.split("-", 2)) {
//         return true
//     }
//     return true

// }

// Вариант 3

function validate(phoneNumber) {
    return phoneNumber.match(/^\d{3}-?\d{4}$/).join("");
    }

console.log(validate("123-4567"))

// console.log(phoneNumber)