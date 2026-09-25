//User Input

//1.Window promtp

// let name;
// name=window.prompt("Enter your name:");
// console.log(name);

//2.Html text box

let name;
document.getElementById("submit").onclick = function() {
    name=document.getElementById("name").value
    console.log(name);
    document.getElementById("h1").textContent = `Hello ${name}`;
};