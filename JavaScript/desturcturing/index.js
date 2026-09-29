//destructuring: extacts values from arrays and objects,
                // then assign to variables in a convenient way
                // []=to perform array destructuring
                // {}=to perform object destructuring


//------swap values of two variables
// let a=1;
// let b=2;
// console.log(a,b);
// [a,b]=[b,a];
// console.log(a,b);


//-----swap two elements in an array
// const color=['red','green','blue','white']
// console.log(color);
// [color[0],color[3]]=[color[3],color[0]];
// console.log(color)


//-------assign array elements to variables
// const color=['red','green','blue','white','black']

// const [firstColor,secondColor,thirdColor,...extra]=color;

// console.log(firstColor)
// console.log(secondColor)
// console.log(thirdColor)
// console.log(extra)


//----------extracts values from objects
// const person1={
//     firstName:'Spongebob',
//     lastName:'Squarepants',
//     age:30,
//     job:'Fry cook'
// }

// const person2={
//     firstName:'Patrick',
//     lastName:'Star',
//     age:35
// }

// // const {firstName,lastName,age,job}=person1
// const {firstName,lastName,age,job='unemplyed'}=person2

// console.log(firstName)
// console.log(lastName)
// console.log(age)
// console.log(job)



//----------Destructure in function

function displayPerson({firstName,lastName,age,job='unemployed'}){
    console.log(`name: ${firstName} ${lastName}`)
    console.log(`age: ${age}`)
    console.log(`Job: ${job}`)
}

const person1={
    firstName:'Spongebob',
    lastName:'Squarepants',
    age:30,
    job:'Fry cook'
}

const person2={
    firstName:'Patrick',
    lastName:'Star',
    age:35
}

displayPerson(person1);
displayPerson(person2);