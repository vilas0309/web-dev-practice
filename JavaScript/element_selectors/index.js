//element selectors = methods that allow us to find and select HTML elements from the DOM (Document Object Model) so we can manipulate them with JavaScript.

//1.document.getElementById() = method that allows us to find and select an HTML element by its id attribute value. It returns the first element that matches the specified id value. If no element is found, it returns null.
//2.document.getElementsByClassName() = method that allows us to find and select HTML elements by their class attribute value. It returns a live HTMLCollection of all elements that match the specified class value. If no elements are found, it returns an empty HTMLCollection.
//3.document.getElementsByTagName() = method that allows us to find and select HTML elements by their tag name. It returns a live HTMLCollection of all elements that match the specified tag name. If no elements are found, it returns an empty HTMLCollection.
//4.document.querySelector() = method that allows us to find and select the first HTML element that matches a specified CSS selector. It returns the first element that matches the specified selector. If no element is found, it returns null.
//5.document.querySelectorAll() = method that allows us to find and select all HTML elements that match a specified CSS selector. It returns a static NodeList of all elements that match the specified selector. If no elements are found, it returns an empty NodeList.

const welcomeMessage=document.getElementById('welcome-msg');
const paragraph=document.getElementById('paragraph');
const div=document.getElementById('div');
const span=document.getElementById('span');
const fruitsHeading=document.getElementById('fruits');
const fruitList=document.getElementById('fruit-list');
const vegetableList=document.getElementById('vegetable-list');
const listItems=document.getElementsByClassName('fruit');
const vegetableItems=document.getElementsByClassName('vegetable');
const h4=document.getElementsByTagName('h4');

welcomeMessage.textContent='Welcome to the DOM!';
paragraph.textContent='This is a paragraph.';
div.textContent='This is a div.';
span.textContent='This is a span.';
fruitList.style.listStyleType='none';

div.style.padding='10px';
div.style.borderRadius='5px';

for(let i=0; i<listItems.length; i++){
    listItems[i].style.color='blue';
}

for(let i=0; i<vegetableItems.length; i++){
    vegetableItems[i].style.color='green';
}

h4[0].style.backgroundColor='yellow';
h4[1].style.backgroundColor='lightgray';