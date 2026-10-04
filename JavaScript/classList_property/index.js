//classList: Element property in JavaScript used to interact
//           with an element's list of classes (css classes)
//           Allows you to make reusable classes for many elements
//           across your webpage.

//add()
//remove()
//toggle()
//replace()

let buttons=document.querySelectorAll('.btn');

// buttons.forEach(button=>{
//     button.classList.add('enabled')
//      button.classList.add('hover')
// })

// buttons.forEach(button=>{
//     button.addEventListener('click',event=>{
//         button.classList.add('disabled')
//     })
// })

buttons.forEach(button=>{
    button.addEventListener('click',event=>{
        if (button.classList.contains('enabled')){
            button.classList.replace('enabled','disabled')
        }
        else if((button.classList.contains('disabled'))){
            button.classList.replace('disabled','enabled')
        }
        else{
            button.classList.add('enabled')
        }
        
    })

    button.addEventListener('mouseover',event=>{
        button.classList.toggle('hover');
    })
    button.addEventListener('mouseout',event=>{
        button.classList.toggle('hover');
    })
})

