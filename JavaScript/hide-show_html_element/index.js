const img = document.getElementById('car');
const btn=document.getElementById('btn');

btn.addEventListener('click',event=>{
    if(img.style.visibility==='visible'){
        img.style.visibility='hidden';
        btn.textContent="Show";
    }
    else{
        img.style.visibility='visible';
        btn.textContent="Hide";
    }
    
})