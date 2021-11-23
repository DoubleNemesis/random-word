let wordToGuess = ''
const wordDisplayBox = document.getElementsByClassName('word-display-box')[0]
const blanksDisplayBox = document.getElementsByClassName('blanks-display-box')[0]
const livesDisplayBox = document.getElementsByClassName('lives-display-box')[0]
const playerKeyboard = document.getElementsByClassName('player-keyboard')[0]
const startBtn = document.getElementsByClassName('start-btn')[0]
const resetBtn = document.getElementsByClassName('reset-btn')[0]
let playerAttempt = ""
let lives = 10
const livesEmoji = `&#127873;`
const winMessage = `You Win! &#127881;`
const loseMessage = `Game Over. &#128534;`

//set up the game
createKeyboard()
function createKeyboard(){
    const unicodeA = 97
    const unicodeZ = 122
    // use a for loop to log out letters a-z (String.fromCharCode) in hint

    for(let i=unicodeA; i<=unicodeZ; i++){
        let character = String.fromCharCode(i);
        let letterButton =  document.createElement('button')
        // letterButton.type = 'button'
        letterButton.innerText = character
        letterButton.className = 'letter-btn'
        letterButton.setAttribute('id', character)
        letterButton.disabled = true
        letterButton.addEventListener('click', handleGuess)
        playerKeyboard.appendChild(letterButton)
    }
}

function handleStart() {
    //HANDLE ERRORS
        fetch('https://random-word-api.herokuapp.com/word?number=1&swear=0')
        .then(response => response.json())
        .then(data => {
            console.log(typeof data)      
            wordToGuess = data.toString()  // change for testing
            // wordDisplayBox.innerText = wordToGuess
            for (let i = 0; i < wordToGuess.length; i++) {
                playerAttempt += '-'
            }
            blanksDisplayBox.innerText = playerAttempt
            startBtn.style.display = 'none'
            resetBtn.style.display = 'block'
            // livesDisplayBox.innerText = `${lives} Lives Left`
            renderLivesLeftEmojis()
            const letterButtons = document.getElementsByClassName('letter-btn')
            const newArr = Array.from(letterButtons)
            console.log(typeof newArr, newArr)
            newArr.forEach((item)=>{
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
                let playerAttemptArray = playerAttempt.split('')
                playerAttemptArray[i] = stringToCheck
                playerAttempt = playerAttemptArray.join('')
            }
        }
        checkWin()
    }
    else {
        lives--
        // livesDisplayBox.innerText = `${lives} Lives Left`
        renderLivesLeftEmojis()
        checkLose()
    }
    blanksDisplayBox.innerText = playerAttempt
}

function checkWin() {
    if (wordToGuess === playerAttempt) {
        livesDisplayBox.innerHTML = winMessage
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
        playerAttempt = wordToGuess
        livesDisplayBox.innerHTML = loseMessage
        blanksDisplayBox.style.color = "red"
    }
}

function renderLivesLeftEmojis(){
    livesDisplayBox.innerHTML = "" // without this, what a challenge
    for(let i=0; i<lives; i++){
        livesDisplayBox.innerHTML += livesEmoji
    }
}

function handleReset() {
    blanksDisplayBox.innerText = ''
    // wordDisplayBox.innerText = ''
    lives = 10
    // livesDisplayBox.innerText = `${lives} Lives Left`
    renderLivesLeftEmojis()
    playerAttempt = ''
    blanksDisplayBox.style.color = "#333"
    const usedLetters = document.getElementsByClassName('used')
    Array.from(usedLetters).forEach((item)=>{
        item.classList.remove('used')
        item.disabled = false
    })
    handleStart()
}

