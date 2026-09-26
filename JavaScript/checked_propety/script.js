let checkBtn=document.getElementById("selected")
let optionOne=document.getElementById("one")
let optionTwo=document.getElementById("two")
let optionThre=document.getElementById("three")
let optionFour=document.getElementById("four")
let submitBtn=document.getElementById("submit")
let checkResult=document.getElementById("checkResult")
let radioResult=document.getElementById("radioResult")

submitBtn.onclick = function(){
    if(checkBtn.checked){
        checkResult.textContent='You have checked the checkbox.'
    }
    else{
         checkResult.textContent='You have not checked the checkbox.'
    }

    if(optionOne.checked){
        radioResult.textContent='You have selected option one.'
    }
    else if(optionTwo.checked){
        radioResult.textContent='You have selected option two.'
    }
    else if(optionThre.checked){
        radioResult.textContent='You have selected option three.'
    }
    else if(optionFour.checked){
        radioResult.textContent='You have selected option four.'
    }
    else{
        radioResult.textContent='You have not selected any option.'
    }
}