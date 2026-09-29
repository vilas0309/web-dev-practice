// this : reference to objects where THIS is used
//       (onbject depends on the immeadiate context)
//       person.name=this.name

const person1 = {
    firstName: 'Vilas',
    lastName: 'Sathish',
    age: 23,
    favfood: "biryani",
    isEmployed: false,
    hello: function(){console.log(`Hello from ${this.firstName}`)},
    //`this` key word will not work with arrow function
    eat:()=>{console.log(`I like ${this.favfood}.`)}
}

console.log(person1.firstName)
console.log(person1.lastName)
console.log(person1.age)
console.log(person1.isEmployed)
person1.hello()
person1.eat()

console.log(this)