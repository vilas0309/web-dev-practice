const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const deleteBtn = document.getElementById("delete-btn")
const ulEl = document.getElementById("ul-El")
const tabBtn = document.getElementById("tab-btn")
let myLeades = JSON.parse(localStorage.getItem("myleads"))

showLeads()

function showLeads() {
    let list = ""
    myLeades.forEach(lead => {
        list += `
        <li>
            <a target="_blank" href="${lead}">
                ${lead}
            </a>
        </li>`
    })
    ulEl.innerHTML = list
}

function addLeads(url) {
    myLeades.push(url)
    localStorage.setItem("myleads", JSON.stringify(myLeades))
    showLeads()
}

inputBtn.addEventListener("click", function () {
    if (inputEl.value) {
        addLeads(inputEl.value)
        inputEl.value = ""
    }
})

deleteBtn.addEventListener("dblclick", function () {
    myLeades = []
    localStorage.setItem("myleads", JSON.stringify(myLeades))
    showLeads()
})

tabBtn.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        addLeads(tabs[0].url)
    })
})