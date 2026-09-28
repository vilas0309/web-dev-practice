//rest parameter '...' :allows a function to bind variable number of elements 
//                      into single array

let food1='pizza'
let food2='apple'
let food3='biryani'
let food4='noodles'

function lunch(...foods){
    return foods
}

let foods=lunch(food1,food2,food3,food4)
console.log(foods)


function avg(...nums){
    let result=0;
    for(let num of nums){
        result +=num
    }
    result=result/nums.length
    return result
}

console.log(avg(1,2,3,4,5,6,7,8,9,10))