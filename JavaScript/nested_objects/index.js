//nested objects: objects inside of other objects
//                  Allows you to represent more complex data structure
//                 Child object is enclosed by a prent object

//                  Person{Address{},ContactInfo{}}
//                  ShoppingCart {Keyborad{},Mouse{},Monitor{}}

// const person ={
//     fullName: "Spongebob Squarepants",
//     age: 30,
//     isStudent: true,
//     hobbies:['karate','jellyfishing','cooking'],
//     address:{
//         street:'124 Conch St',
//         city:"Bikini Bottom",
//         country:"Int. Water"
//     }
// }


// console.log(person.fullName);
// console.log(person.age);
// console.log(person.isStudent);
// console.log(person.hobbies);
// console.log(person.address);
// console.log(person.address.street);


class Person{
    constructor(name,age,...address){
        this.name=name,
        this.age=age,
        this.address = new Address(...address);
    }
}

class Address{
    constructor(street,city,country){
        this.street=street,
        this.city=city,
        this.country=country
    }
}


const person1 = new Person('Spongebob',30,'124 Conch St','Bikini Bottom','Int. Waters');
const person2 = new Person('Patrick',37,'124 Conch St','Bikini Bottom','Int. Waters');
const person3 = new Person('Squidward',45,'124 Conch St','Bikini Bottom','Int. Waters');

console.log(person1)
console.log(person2.address.city)