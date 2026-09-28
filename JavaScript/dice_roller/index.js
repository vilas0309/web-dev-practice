const numOfDice=document.getElementById('numOfDice')
const dice_result=document.getElementById('diceResult')
const dice_image=document.getElementById('diceImages')

function roll_dice(){
        let numDice=Number(numOfDice.value)
        let dices=[];
        let temp;
        let diceImage=[];

        for(let i=0;i<numDice;i++){
            temp=Math.floor(Math.random()*6)+1
            dices.push(temp)
            diceImage.push(`<img src="dice_images/${temp}.png" alt=Dice ${temp}>`);
        }
        // console.log(dices)
        dice_result.textContent=`Dices:`+dices.join(", ")
        dice_image.innerHTML=diceImage.join(' ')
}