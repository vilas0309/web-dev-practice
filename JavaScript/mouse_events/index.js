//eventListener = Listen for specific events interactive web pages
//                events: click,mouseover,mouseout
//                .addeventListener(event,callback);

const box=document.getElementById("box");
const btn=document.getElementById("btn");

btn.addEventListener("click",event=>{
    box.style.backgroundColor='tomato';
    box.textContent='OUCH! 🤕'
})

btn.addEventListener("mouseover",event=>{
    box.style.backgroundColor='yellow';
    box.textContent="Don't do it 😨"
})

btn.addEventListener("mouseout",event=>{
    box.style.backgroundColor='lightgreen';
    box.textContent="Click me! 😄"
})