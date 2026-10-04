// add and remove html elements using javascript

//1. create a new element
const newElement = document.createElement("h1");


//2 add attributes/properties
newElement.id = "heading";
newElement.className = "heading";
newElement.innerText = "This is a heading";
newElement.style.color = "tomato";
newElement.style.textAlign = "center";

//3. append the new element to the body
// document.body.append(newElement);
// document.body.prepend(newElement);
document.getElementById("box1").prepend(newElement);
// document.getElementById("box1").append(newElement);
// document.body.insertBefore(newElement, document.getElementById("box3"));

//4. remove the element
newElement.remove(); 
