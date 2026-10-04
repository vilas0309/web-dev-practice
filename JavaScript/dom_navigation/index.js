//dom navigation: the process of moving through the DOM tree to access elements and their properties

//.firstChild: returns the first child node of the specified element
//.lastChild: returns the last child node of the specified element
//.nextSibling: returns the next sibling node of the specified element
//.previousSibling: returns the previous sibling node of the specified element
//.parentElement: returns the parent element of the specified element
//.children: returns a collection of the child elements of the specified element


const element=document.getElementById("fruits");
const firstChild=element.firstElementChild;
firstChild.style.backgroundColor="yellow";

const element2=document.getElementById("vegetables");
const lastChild=element2.lastElementChild;
lastChild.style.backgroundColor="yellow";

const element3=document.getElementById("vegetables");
const nextSibling=element3.nextElementSibling;
nextSibling.style.backgroundColor="yellow";

const element4=document.getElementById("broccoli");
const previousSibling=element4.previousElementSibling;
previousSibling.style.backgroundColor="lightgreen";

const element5=document.getElementById("apple");
const parentElement=element5.parentElement;
parentElement.style.backgroundColor="lightblue";

const element6=document.getElementById("drinks");
const children=element6.children;
Array.from(children).forEach(child => {
    child.style.backgroundColor="lightgray";
});