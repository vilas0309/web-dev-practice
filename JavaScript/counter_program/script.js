let count=0;
const dcereasebtn=document.getElementById("decrease");
const increasebtn=document.getElementById("increase");
const resetbtn=document.getElementById("reset");
const counterlabel=document.getElementById("counter");


counterlabel.textContent=count;

dcereasebtn.onclick = function() {
    count -=1;
    counterlabel.textContent=count;
}

resetbtn.onclick = function(){
    count=0;
    counterlabel.textContent=count;
}

increasebtn.onclick = function(){
    count+=1;
    counterlabel.textContent=count;
}