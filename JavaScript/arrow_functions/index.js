// arrow functions : a concise way to write a function expressiom
//                     for simple functions that going to use once
//                     (paramets)=>code

const hello=(name)=>console.log(`Hello ${name}`)

hello(`vilas`);

// setTimeout(()=>console.log(`How are you?`),3000)

const number=[1,2,3,4,5]
const square=number.map((element)=>Math.pow(element,2))
const isEevn=number.filter((element)=>element%2===0)
const total=number.reduce((pre,next)=>pre+next)
console.log(number)
console.log(square)
console.log(isEevn)
console.log(total)