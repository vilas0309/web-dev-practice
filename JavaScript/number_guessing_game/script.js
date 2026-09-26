let min=1;
let max=100;
let input;
let randomNumber=Math.floor(Math.random()*(max-min)+1)
let isRunning = true;
let attempts=0;

while(isRunning){
    input=window.prompt("Enter number between 1-100:")
    input=Number(input)
    if(isNaN(input)){
        window.alert("Enter valid number")
    }
    else if(input<min || input>max){
        window.alert(`Enter the number between ${min} and ${max}`)
    }
    else{
        attempts++;
        if (input<randomNumber){
            window.alert("TOO LOW! try again.")
        }
        else if(input>randomNumber){
            window.alert("TOO HIGH! try again.")
        }
        else{
            window.alert(`Congrats the number ${randomNumber} in ${attempts} attempts.`)
            isRunning=false;    
        }
    }
    
}
