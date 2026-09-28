// callbacks = a function is passed as an argument to another
//             function
//             Used to handle asynchronuous operations
//             1.Reading a file 
//             2.Network requests
//             3.Interacting with database

sum(display,2,77)

function sum(display,x,y){
    let sum =x+y
    display(sum);
}
function display(sum){
    console.log(sum)
}