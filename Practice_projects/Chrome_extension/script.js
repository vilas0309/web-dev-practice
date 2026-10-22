
// function saveLead(){
//     console.log("Button clicked")
// }
let myLeades=["https://www.google.com"]
const inputEl = document.getElementById("input-el")
let inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ulEl")
let listItem = ""
showLeads()
inputBtn.addEventListener("click", function() {
    myLeades.push(inputEl.value)
    // console.log(myLeades)
    addLeads()
    inputEl.value = ""
})

function addLeads(){
    listItem +=`
        <li>
            <a target="_blank" href="${inputEl.value}">
                ${inputEl.value}
            </a>
        </i>`;
    ulEl.innerHTML +=listItem
}

function showLeads(){
    let listItems = ""
    myLeades.forEach(lead =>{
        // let li = document.createElement("li")
        // let a = document.createElement("a")
        // a.textContent = lead
        // li.textContent = lead
        // ulEl.append(li)
        listItems +=`
        <li>
            <a target="_blank" href="${lead}">
                ${lead}
            </a>
        </i>`;
    })
    ulEl.innerHTML = listItems
}