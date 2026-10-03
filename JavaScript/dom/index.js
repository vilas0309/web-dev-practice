//DOM :Document Object Model
//      object{} that represents the structure of a web page
//      allows us to manipulate the content and structure of a web page
//      allows us to add interactivity to a web page
//      allows us to access and manipulate the elements of a web page
//      allows us to access and manipulate the attributes of a web page
//      allows us to access and manipulate the styles of a web page
//      allows us to access and manipulate the events of a web page
//      allows us to access and manipulate the forms of a web page

// const username='vilas';
const username='';
document.body.style.backgroundColor='lightblue';
const welcomeMessage=document.getElementById('welcome-msg');

welcomeMessage.textContent+=username===''?'Guest':username;