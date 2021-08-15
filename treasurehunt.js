alert("The Game is Ready!")
let counterVal = 5;
let count = document.getElementById("counter").innerHTML = counterVal
// values 0 - 5
let winOrLose = document.getElementById("winOrLose")
var treasureLocation = Math.floor(Math.random() * 9)
var bombLocation = Math.floor(Math.random() * 9)
 while (treasureLocation == bombLocation) {
  bombLocation = Math.floor(Math.random() * 9)
}
console.log("bombLocation: ", bombLocation)
console.log("treasureLocation: ", treasureLocation)
// const treasure = () => {
//    alert("Hey Treasure is connected")
// }
const treasure = (location) => {
  if (location == treasureLocation){
    document.getElementById(location).innerHTML = "<img src=\'https://cdn.emojidex.com/emoji/seal/bitcoin.png\' width=\'80px\' height=\'80px\'>";
    winOrLose.innerHTML = "YOU WIN!!!"
    document.getElementById("table").style.pointerEvents = "none"
    }
    else if (location == bombLocation){
    document.getElementById(location).innerHTML = "&#128163";
    winOrLose.innerHTML = "YOU LOSE!!!"
    document.getElementById("table").style.pointerEvents = "none"
    }
    else {
    document.getElementById(location).innerHTML = "&#128542";
    }
    counterVal -= 1
    let count = document.getElementById("counter").innerHTML = counterVal
    console.log(counterVal);

    if (counterVal < 1){
    winOrLose.innerHTML = "OUT OF TURNS!!!"
    document.getElementById("table").style.pointerEvents = "none";
    }
}
//return setTimeout("location.reload(true);", 5000)

//Count the number of guesses the user has//
  //User has five attempts to guess correct number//


// User can click on the table as a kind of game Keyboard
// User click should reveal a treasure
