//NodeList : a static collection of html elements
//            can be created by using querySelectorAll()
//            similar to array(no:map,reduce,filter) 
//            ,but it won't automatically update reflect changes

let buttons=document.querySelectorAll(".btn");

buttons.forEach(button=>{
    button.addEventListener('click',event=>{
        button.remove();
        console.log(buttons);
    })
})

const newBtn=document.createElement('button');
newBtn.classList='btn';
newBtn.textContent='Button5'
document.body.append(newBtn)

console.log(buttons)
buttons=document.querySelectorAll(".btn");
console.log(buttons)

