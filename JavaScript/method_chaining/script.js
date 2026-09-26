//method chaining - calling method after an method in one continuous line of code
let username=window.prompt("Enter your name:")

//Without method chaining
// username=username.trim()
// let firstletter=username.slice(0,1)
// firstletter=firstletter.toUpperCase()
// let extraChar=username.slice(1)
// extraChar=extraChar.toLocaleLowerCase()
// username=firstletter+extraChar
// console.log(username)

//with method chaining
username=username.trim().slice(0,1).toUpperCase() + username.slice(1).toLocaleLowerCase()
console.log(username)
