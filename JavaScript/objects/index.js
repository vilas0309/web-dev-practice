//object : a collections of related properties and/or methods
        // can represent real world objects(person,Product,place)
        // Object={
        //     key:value,
        //     function()
        // }

const person1 = {
    firstName: 'Vilas',
    lastName: 'Sathish',
    age: 23,
    isEmployed: false,
    hello: function(){console.log("Hello")},
    eat:()=>{console.log("I like biryani.")}
}

console.log(person1.firstName)
console.log(person1.lastName)
console.log(person1.age)
console.log(person1.isEmployed)
person1.hello()
person1.eat()