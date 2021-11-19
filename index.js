let wordToGuess = ''
const wordDisplayBox = document.getElementsByClassName('word-display-box')[0]
const blanksDisplayBox = document.getElementsByClassName('blanks-display-box')[0]
const livesDisplayBox = document.getElementsByClassName('lives-display-box')[0]
const playerKeyboard = document.getElementsByClassName('player-keyboard')[0]
const startBtn = document.getElementsByClassName('start-btn')[0]
const resetBtn = document.getElementsByClassName('reset-btn')[0]
const playerGuessInput = document.getElementById('player-guess-input')
let playerGuess = ""
let lives = 10

//set up the game
createKeyboard()
function createKeyboard(){
    const unicodeA = 97
    const unicodeZ = 122
    for(let i=unicodeA; i<=unicodeZ; i++){
        let character = String.fromCharCode(i);
        let letterButton =  document.createElement('button')
        letterButton.type = 'button';
        letterButton.innerHTML = character
        letterButton.className = 'letter-btn';
        letterButton.setAttribute('id', character)
        letterButton.disabled = true
        letterButton.addEventListener('click', handleGuess)
        playerKeyboard.appendChild(letterButton)
    }
}

function handleStart() {
    fetch('https://random-word-api.herokuapp.com/word?number=1&swear=0')
        .then(result => result.json())
        .then(data => {
            wordToGuess = data.toString()
            // wordDisplayBox.innerText = wordToGuess
            for (let i = 0; i < wordToGuess.length; i++) {
                playerGuess += '-'
            }
            blanksDisplayBox.innerText = playerGuess
            startBtn.style.display = 'none'
            resetBtn.style.display = 'block'
            livesDisplayBox.innerText = `${lives} Lives Left`
            const letterButtons = document.getElementsByClassName('letter-btn')
            Array.from(letterButtons).forEach((item)=>{
                item.disabled = false
            })
        })
}

function handleGuess(e) {
    const stringToCheck = e.target.id
    const targetBtn = document.getElementById(e.target.id)
    targetBtn.classList.add('used')
    targetBtn.disabled = true
    if (wordToGuess.indexOf(stringToCheck) > -1) {
        for (let i = 0; i < wordToGuess.length; i++) {
            if (stringToCheck === wordToGuess[i]) {
                let playerGuessArray = playerGuess.split('')
                playerGuessArray[i] = stringToCheck
                playerGuess = playerGuessArray.join('')
            }
        }
        checkWin()
    }
    else {
        lives--
        livesDisplayBox.innerText = `${lives} Lives Left`
        checkLose()
    }
    blanksDisplayBox.innerText = playerGuess
}

function checkWin() {
    if (wordToGuess === playerGuess) {
        livesDisplayBox.innerText = "You Win"
        blanksDisplayBox.style.color = "limegreen"
    }
    else {
        return
    }
}

function checkLose(){
    if (lives > 0){
        return
    }
    else{
        playerGuess = wordToGuess
        livesDisplayBox.innerText = "You Lose"
        blanksDisplayBox.style.color = "red"
    }
}

function handleReset() {
    blanksDisplayBox.innerText = ''
    // wordDisplayBox.innerText = ''
    lives = 10
    livesDisplayBox.innerText = `${lives} Lives Left`
    playerGuess = ''
    blanksDisplayBox.style.color = "#333"
    const usedLetters = document.getElementsByClassName('used')
    Array.from(usedLetters).forEach((item)=>{
        item.classList.remove('used')
        item.disabled = false
    })
    handleStart()
}