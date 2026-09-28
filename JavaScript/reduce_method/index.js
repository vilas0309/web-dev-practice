// reduce() : reduce the elements of an array into a 
//             single element

let numbers=[1,2,3,4,5,6]
let reducedNum=numbers.reduce(reducer)

console.log(numbers)
console.log(reducedNum)

function reducer(prevoiusNumber, nextNumber){
    return prevoiusNumber*nextNumber;
}