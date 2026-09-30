// sort() = method used to sort elements of an array in place.
//          sorts elements as strings in lexicographic order, not alphabetical
//          lexicographic = (alphabet+number+symbol)as strings

const people =[{name:'Spongebob',age:30,gpa:6},
                {name:'Patrick',age:37,gpa:3},
                {name:'Squidward',age:51,gpa:5},
                {name:'Sandy',age:27,gpa:8}
]

console.log(people)

people.sort((a,b)=>a.gpa-b.gpa)
console.log(people)
people.sort((a,b)=>b.gpa-a.gpa)