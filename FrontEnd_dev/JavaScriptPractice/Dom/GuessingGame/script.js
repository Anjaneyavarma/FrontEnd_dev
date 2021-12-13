let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let randomNumber = Math.ceil((Math.random()) * 100)
console.log(randomNumber)

function checkGuess() {
    inputValue = parseInt(userInput.value)
    if (inputValue > randomNumber) {
        gameResult.textContent = "too high"
    } else if (inputValue < randomNumber) {
        gameResult.textContent = "too low"
    } else {
        gameResult.textContent = "Guess is correct"
    }
}