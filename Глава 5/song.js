// let song = {
//     name: "Walk This Way",
//     artist: "Run-D.M.C.",
//     minutes: 4,
//     seconds: 3,
//     genre:"80s",
//     playing: false,
    
//     play: function () {
//         if (!this.playing) {
//             this.playing = true
//             console.log("Playing " + this.name + " by " + this.artist)
//         }
//     },

//     pause: function () {
//         if (this.playing) {
//             this.playing = false
//             console.log("Song pause")
//         }
//     }
// }

// song.play()
// // console.log(song)

let user = {
    name: "John",
    age: 30,
    // sayHi() {
    //     console.log("Hello!")
    // }
    sayHi: function () {
        console.log("Hello!")
    }
}

// user.sayHi = function () {
//     console.log("Hello!")
// }

user.sayHi()
console.log(user)