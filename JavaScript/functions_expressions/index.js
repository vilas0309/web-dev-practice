// function express : a way to define the functions as 
//                     variables or values

let numbers=[1,2,3,4,5]
let square=numbers.map(function(element){
    return Math.pow(element,2)
})
let cube=numbers.map(function(element){
    return Math.pow(element,3)
})
let total=numbers.reduce(function(pre,next){
    return pre+next
})

console.log(numbers)
console.log(square)
console.log(cube)
console.log(total)
