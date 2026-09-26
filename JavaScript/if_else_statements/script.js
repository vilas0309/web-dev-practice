let age=0;
let ageResult=document.getElementById("age");
let result=document.getElementById("result");

document.getElementById("submit").onclick = function(){
    age=ageResult.value;
    age=Number(age);
    if (age>100){
        console.log("Your too old for this site");
        result.textContent="Your too old for this site";
    }
    else if(age>=18){
        console.log("You can enter the age");
        result.textContent="You can enter the age";
    }
    else if(age<0){
        console.log("Enter valid age.")
        result.textContent="Enter valid age."
    }
    else{
        console.log("You must 18+ to enter the site.")
        result.textContent='You must 18+ to enter the site'
    }
}