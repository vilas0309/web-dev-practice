// filter() : creats a array by filtering out the elements
//            usually accepts boolean valus for filtering

let number=[1,2,3,4,5]
let evenNum=number.filter(isEven)
let oddNum=number.filter(isOdd)

console.log(number)
console.log(evenNum)
console.log(oddNum)

function isEven(element){
    return element % 2 ===0
}

function isOdd(element){
    return element % 2 !==0
}