//const :variables that are can't be changed

const pi=3.14159;
let radius;
let circumferenc;

// pi=23;
document.getElementById("submit").onclick= function(){
    radius=document.getElementById("radius").value
    radius=Number(radius);
    circumferenc=2*pi*radius
    document.getElementById("circumference").textContent=circumferenc+'cm';
}