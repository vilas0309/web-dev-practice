// forEach() : method used to iterate over elements of an array 
//             and apply specific function(callback) to each elements

//             array.forEach(callback)
//             element,index,array are provided            

let numbers=[1,2,3,4,5,6]

numbers.forEach(square)
numbers.forEach(display)

function square(element,index,array){
    array[index]=element*element
}
function display(element){
    console.log(element)
}