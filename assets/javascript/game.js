//Variable with A-Z arrays, total 26 in length.
let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p","q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//Generate a number between 0 - 25
let rand = Math.floor(Math.random() * 25);

//To confirm random number in console.
console.log(alphabet[rand]);


//Create variables.
let numOfGuesses = 10;
let win = 0;
let loss = 0;


let winText = document.getElementById("win");
let lossText = document.getElementById("loss");
let numOfGuessesText = document.getElementById("numOfGuesses");
let guessText = document.getElementById("guesses");
let correctLetterText = document.getElementById("correctLetter");

winText.textContent = win;
lossText.textContent = loss;
numOfGuessesText.textContent = numOfGuesses;

//Create a onkeypress function.
document.onkeypress = function (event) {

let keyPressed = event.key;
guessText.textContent += keyPressed + " ";
numOfGuesses--;
numOfGuessesText.textContent = numOfGuesses;
correctLetterText.textContent = "";

//Set conditionals.
if (numOfGuesses >= 0 && alphabet[rand] === keyPressed) {
    win++;
    winText.textContent = win;
    numOfGuesses = 10;
    guessText.textContent = "";
    correctLetterText.textContent = alphabet[rand];
}
else if (numOfGuesses !== 0) {

}
else if (numOfGuesses === 0) {
    loss++;
    lossText.textContent = loss;
    numOfGuesses = 10;
    guessText.textContent = "";
    correctLetterText.textContent = alphabet[rand];
}

}