const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let yourScore = 0;
let pcScore = 0;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1 // or you can use possibleChoices.length

    if (randomNumber === 1) {
        computerChoice = 'rock'
    }
    if (randomNumber === 2) {
        computerChoice = 'scissors'
    }
    if (randomNumber === 3) {
        computerChoice = 'paper'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice) {
        yourScore;
        pcScore;
    }
    if (computerChoice === 'rock' && userChoice === "paper") {
        yourScore++
    }
    if (computerChoice === 'rock' && userChoice === "scissors") {
        pcScore++
    }
    if (computerChoice === 'paper' && userChoice === "scissors") {
        yourScore++
    }
    if (computerChoice === 'paper' && userChoice === "rock") {
        pcScore++
    }
    if (computerChoice === 'scissors' && userChoice === "rock") {
        yourScore++
    }
    if (computerChoice === 'scissors' && userChoice === "paper") {
        pcScore++
    }
    resultDisplay.innerHTML = "<br /> Your Score: " + yourScore + "<br />PC Score :" + pcScore
}