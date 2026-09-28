//spread operator '...' :allows an iterable object such as
//                        arrays and strings into a seperable objects
//                        (unpack elements)

let number = [1,2,3,4,5]
// let max=Math.max(number)
let max=Math.max(...number)

console.log(max)

let username='Vilas'
console.log(username)
console.log(...username)

let fruits=['apple','banana','mango']
let vegetables=['carrot','tomato','potatos']
let food=[...fruits,...vegetables,'egg','milk']
console.log(food)