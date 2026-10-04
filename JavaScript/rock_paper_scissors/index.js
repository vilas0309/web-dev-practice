//ROCK PAPER SCISSORS

const choices=["rock","paper","scissors"];
const playerDisplay=document.getElementById("playerDisplay")
const computerDisplay=document.getElementById("computerDisplay");
const resultDisplay=document.getElementById("result");
const playerScoreDisplay=document.getElementById("playerScoreDisplay");
const computerScoreDisplay=document.getElementById("computerScoreDisplay");
let playscore=0;
let computerscore=0;

function playGame(playerChoice){
    const computerChoice=choices[Math.floor(Math.random()*3)];
    // console.log(computerChoice)
    let result="";
    if(playerChoice===computerChoice){
        result="IT'S A TIE!";
    }
    else{
        switch(playerChoice){
            case 'rock':
                result=(computerChoice==="scissors")? "YOU WIN!" : "YOU LOSE!";
                break;
            case 'paper':
                result=(computerChoice==="rock")? "YOU WIN!" : "YOU LOSE!";
                break;
            case 'scissors':
                result=(computerChoice==="paper")? "YOU WIN!" : "YOU LOSE!";
                break;
        }
    }
    resultDisplay.classList.remove('txtgrn','txtred')
    playerDisplay.textContent=`PLAYER: ${playerChoice}`
    computerDisplay.textContent=`COMPUTER: ${computerChoice}`
    resultDisplay.textContent=result;
    switch(result){
        case "YOU WIN!":
            resultDisplay.classList.add('txtgrn');
            playscore++;
            break;
        case "YOU LOSE!":
            resultDisplay.classList.add('txtred');
            computerscore++;
            break;
    }
    playerScoreDisplay.textContent=playscore;
    computerScoreDisplay.textContent=computerscore;
}