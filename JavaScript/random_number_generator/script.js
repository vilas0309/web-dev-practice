let randomNumber1;
let randomNumber2;
let randomNumber3;

const min=1;
const max=6;

document.getElementById("roll").onclick = function(){
    randomNumber1=Math.floor(Math.random()*max)+min;
    randomNumber2=Math.floor(Math.random()*max)+min;
    randomNumber3=Math.floor(Math.random()*max)+min;

    document.getElementById("dice1").textContent=randomNumber1;
    document.getElementById("dice2").textContent=randomNumber2;
    document.getElementById("dice3").textContent=randomNumber3;
}