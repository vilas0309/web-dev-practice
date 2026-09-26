//Function - A section reusable code
            // Declare code once call many times
            // Call function name to execute    
let result;
function add(x,y){
    result=x+y
    return result
}

function sub(x,y){
    result=x-y
    return result
}

function div(x,y){
    result=x/y
    return result
}

console.log(add(3,7))
console.log(add(5,8))
console.log(add(10,34))

console.log(sub(3,7))
console.log(sub(99,34))

console.log(div(3,7))
console.log(div(3,0))