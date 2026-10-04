//eventListener = Listen for specific events to create interactive web page
//                events: keydown,keyup
//                document.addEventListener(event,callback);

const box=document.getElementById('box');
const moveAmount=10;
let x=0;
let y=0;

document.addEventListener("keydown",event=>{
    if (event.key.startsWith("Arrow")){
        box.textContent='😨';
        box.style.backgroundColor='tomato';
    }
})

document.addEventListener("keyup",event=>{
    if (event.key.startsWith("Arrow")){
        box.textContent='😄';
        box.style.backgroundColor='lightgreen';
    }
})

document.addEventListener("keydown",event=>{
    if (event.key.startsWith("Arrow")){
        switch(event.key){
            case 'ArrowUp':
                y -=moveAmount
                break;
            case 'ArrowDown':
                y +=moveAmount
                break;
            case 'ArrowLeft':
                x -=moveAmount
                break;
            case 'ArrowRight':
                x +=moveAmount
                break;
        }

        box.style.top=`${y}px`;
        box.style.left=`${x}px`;
    }
});