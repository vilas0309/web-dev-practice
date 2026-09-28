const fahrenheit=document.getElementById("toFahrenheit")
const clesius=document.getElementById("toCelsius")
const submit=document.getElementById("submit")
const result=document.getElementById("result")
const input=document.getElementById("textbox")
let temp;

function convert(){
    temp=Number(input.value)
    if(fahrenheit.checked){
        temp = temp*9/5+32
        result.textContent=temp.toFixed(1)+'°F'
    }
    else if(clesius.checked){
        temp=(temp-32)*(5/9)
         result.textContent=temp.toFixed(1)+'°C'
    }
    else{
        result.textContent="select a unit"
    }
}