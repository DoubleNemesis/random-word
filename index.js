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
livesDisplayBox.innerText = lives
createKeyboard()

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
        })
}

function createKeyboard(){
    const unicodeA = 97
    const unicodeZ = 122
    for(let i=unicodeA; i<=unicodeZ; i++){
        let character = String.fromCharCode(i);
        let letterButton =  document.createElement('button')
        letterButton.type = 'button';
        letterButton.innerHTML = character
        letterButton.className = 'letter-button';
        letterButton.setAttribute('id', character.toString())
        letterButton.addEventListener('click', handleGuess)
        playerKeyboard.appendChild(letterButton)
    }
}

function handleGuess(e) {
    const stringToCheck = e.target.id
    document.getElementById(stringToCheck).classList.add('used')
    if (wordToGuess.indexOf(stringToCheck) > -1) {
        for (let i = 0; i < wordToGuess.length; i++) {
            if (stringToCheck === wordToGuess[i]) {
                let playerGuessArray = playerGuess.split('')
                playerGuessArray[i] = stringToCheck
                playerGuess = playerGuessArray.join('')
            }
        }
        checkFinish()
    }
    else {
        lives--
        livesDisplayBox.innerText = lives
    }

    blanksDisplayBox.innerText = playerGuess
}


function checkFinish() {
    if (wordToGuess === playerGuess) {
        console.log('you win')
    }
    else {
        return
    }
}

function handleReset() {
    blanksDisplayBox.innerText = ''
    // wordDisplayBox.innerText = ''
    livesDisplayBox.innerText = ''
    lives = 10
    playerGuess = ''
    startBtn.style.display = 'block'
    resetBtn.style.display = 'none'
    const usedLetters = document.getElementsByClassName('used')
    Array.from(usedLetters).forEach((item)=>{
        item.classList.remove('used')
    })
}