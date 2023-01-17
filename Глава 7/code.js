let x

if (x == undefined) {
    console.log("Переменная x не инициализирована")
}

const user = {
    name: "Jane",
    phoneNumber: 9992323
}

if (user.phoneNumber == undefined) {
    console.log("Номер не определен")
} else {
    console.log(user.phoneNumber)
}

var subject = "Just a string";
var probe = typeof subject;
console.log(probe)

if (99 === "99") { //строка преобразуется в число
    console.log("Число равно строке")
} else (
    console.log("Число не равно строке")
)