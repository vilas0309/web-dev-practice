
// function saveLead(){
//     console.log("Button clicked")
// }
let myLeades=["https://www.google.com","https://www.epiclead.com","https://www.greatlead.com"]
const inputEl = document.getElementById("input-el")
let inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ulEl")
showLeads()
inputBtn.addEventListener("click", function() {
    myLeades.push(inputEl.value)
    console.log(myLeades)
    showLeads()
})

function showLeads(){
    ulEl.innerHTML = ""
    myLeades.forEach(lead =>{
        // let li = document.createElement("li")
        // let a = document.createElement("a")
        // a.textContent = lead
        // li.textContent = lead
        // ulEl.append(li)
        ulEl.innerHTML +="<li><a target=_blank href='"+lead+"'>"+lead+"</a></i>";
    })
}