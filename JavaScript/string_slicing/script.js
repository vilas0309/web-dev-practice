//String Slicing- creating a sub string from the portion of the msin string
                    // String.slice(start,end)
let username="Vilas Sathish";
// let firstname=username.slice(0,5);
// let lastname=username.slice(6)
let firstChar=username.slice(0,1)
let lastChar=username.slice(-1)

let firstname=username.slice(0,username.indexOf(" "))
let lastname=username.slice(username.indexOf(" ")+1)


console.log(firstname)
console.log(lastname)
console.log(firstChar)
console.log(lastChar)