const greenBtn = document.getElementById("green")
const redBtn = document.getElementById("red")
const yellowBtn = document.getElementById("yellow")
const blueBtn = document.getElementById("blue")

const colorBtns = [greenBtn, redBtn, yellowBtn, blueBtn]
const text = document.getElementById('text')
const score = document.getElementById('scoreNum')

colorBtns.forEach(btn => {
    btn.addEventListener("click", playGame)
});

let currentGame = []
let clickIndex = 0;
let highest = 0;

function playGame() {
    text.innerText=" "
    colorBtns.forEach(btn => {
        btn.removeEventListener("click", playGame)
        btn.addEventListener("click", buttonPress)
        btn.classList.remove("powerOff")
    });

    randomLight();   
}

function randomLight() {
    clickIndex=0;
    let thisRound = generateRandom();
    currentGame.push(colorBtns[thisRound]);
    let i = 0;
    while (i < currentGame.length) {
        lightTimer(i, currentGame[i]);
        i++;
    }
}

function lightTimer(i, selected) {
  setTimeout(function() {
      showLight(selected)
  }, 1000 * i);
}

async function showLight(btn) {
    btn.classList.add("selected");
    await new Promise((resolve) => setTimeout(resolve, 500));
    btn.classList.remove("selected");
    return true;
}

function buttonPress(e) {
    if (e.target == currentGame[clickIndex]) {
        clickIndex++;
        if (clickIndex == currentGame.length) {
            randomLight();
        }
    } else {
        endGame();
    }
}

function generateRandom() {
    return Math.floor(Math.random() * 4)
}

function endGame() {
    colorBtns.forEach(btn => {
        btn.addEventListener("click", playGame)
        btn.classList.add("powerOff")
    });
    text.innerText="You lost.. click any button to play again."
    if (currentGame.length - 1> highest) {
        highest = currentGame.length - 1;
    } 
    currentGame = []
    clickIndex = 0;
    scoreNum.innerText = highest;
}