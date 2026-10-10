//JSON = (JavaScript Object Notation) data-interchange format
//      Used for exchanging data between a server and a web application
//      JSON files {key:value} or [value1,value2,value3]

//      JSON.stringify() = converts a JS object to a JSON string.
//      JSON.parse() = converts a JSON string to a JS onject.

// const names = ["Spongebob","Patrick","Squidward","Sandy"];
// const person = {"name":"Spongebob","age":30,"isEmployed":true,"hobbies":["Jellyfishing","Karate","Cooking"]};
// const people = [{"name":"Spongebob","age":30,"isEmployed":true},
//                 {"name":"Patrick","age":34,"isEmployed":false},
//                 {"name":"Squidward","age":34,"isEmployed":true},
//                 {"name":"Sandy","age":27,"isEmployed":false}]

// console.log(names);
// console.log(person);
// console.log(people);

// const stringName = JSON.stringify(names)
// const stringPerson = JSON.stringify(person)
// const stringPeople = JSON.stringify(people)

// console.log(stringName);
// console.log(stringPeople);
// console.log(stringPerson);

// const names = `["Spongebob","Patrick","Squidward","Sandy"]`;
// const person = `{"name":"Spongebob","age":30,"isEmployed":true,"hobbies":["Jellyfishing","Karate","Cooking"]}`;
// const people =`[{"name":"Spongebob","age":30,"isEmployed":true},
//                 {"name":"Patrick","age":34,"isEmployed":false},
//                 {"name":"Squidward","age":34,"isEmployed":true},
//                 {"name":"Sandy","age":27,"isEmployed":false}]`

// console.log(names);
// console.log(person);
// console.log(people);

// const stringName = JSON.parse(names)
// const stringPerson = JSON.parse(person)
// const stringPeople = JSON.parse(people)

// console.log(stringName);
// console.log(stringPeople);
// console.log(stringPerson);

fetch("names.json")
    .then(response => response.json())
    .then(value => console.log(value))

fetch("person.json")
    .then(response => response.json())
    .then(value => console.log(value))

fetch("people.json")
    .then(response => response.json())
    .then(values => values.forEach(element => {
         console.log(element.name)
    }));