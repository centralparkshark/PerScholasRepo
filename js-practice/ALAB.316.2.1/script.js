const statusEl = document.getElementById("status")
const guessBtn = document.getElementById("newGuess")
const restartBtn = document.getElementById("restartGame")
const moleHoles = document.getElementsByClassName("hole")

let attempt = 0;
let mole = (Math.floor(Math.random() * 6) + 1);

function newGame() {  
    attempt = 0;
    for (let i = 0; i < moleHoles.length; i++) {
        moleHoles[i].innerHTML = ""
        moleHoles[i].style.border = "rgb(100, 20, 20) 2px solid"    
    }
    mole = (Math.floor(Math.random() * 6) + 1);
    newGuess()
    
}

function newGuess() {
    if (attempt < 3) {
        let guess = prompt("Pick a hole between 1-6")
        if (mole == guess) {
            // right answer, game over
            statusEl.innerText = "You got 'em!"
            document.getElementById(`hole${guess}`).style.border = "yellowgreen 2px solid"
            document.getElementById(`hole${mole}`).innerHTML = "<img id='moleImg' src='./mole.png' alt='mole'>"
            restartBtn.innerText = "Play again"
            restartBtn.style.display = "inline"
            guessBtn.style.display = "none"     
        } else {
            // wrong answer, still attempts left
            statusEl.innerText = "You missed :p"
            document.getElementById(`hole${guess}`).style.border = "red 2px solid"  
            guessBtn.style.display = "inline"
            restartBtn.style.display = "none"
            attempt++;
        }
        if (attempt >= 3) {
            //game over
            document.getElementById(`hole${mole}`).innerHTML = "<img id='moleImg' src='./mole.png' alt='mole'>"
            restartBtn.innerText = "Play again"
            restartBtn.style.display = "inline"
            guessBtn.style.display = "none"
            statusEl.innerText = "Game over.."
    }
        }
}

guessBtn.addEventListener('click', newGuess)
restartBtn.addEventListener('click', newGame)
