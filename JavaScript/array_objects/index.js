//array objects

const fruits=[{name:'apple',color:'red',calories:95},
              {name:'orange',color:'orange',calories:45},
              {name:'banana',color:'yellow',calories:105},
              {name:'coconut',color:'white',calories:159},
              {name:'pineapple',color:'yellow',calories:37}  
];

// console.log(fruits)
// console.log(fruits[4].calories)
// fruits.push({name:'grapes',color:'green',calories:62})

// console.log(fruits)

// fruits.pop()

// console.log(fruits)

// fruits.splice(1,2)

// console.log(fruits)

// fruits.forEach(fruits => console.log(fruits))

// const fruitNames = fruits.map(fruits => fruits.name)

// console.log(fruitNames)

// const yellowFruits = fruits.filter(fruits => fruits.color==='yellow')

// console.log(yellowFruits)


const maxFruit=fruits.reduce((max,fruit)=>
                              fruit.calories>max.calories ?
                              fruit:max);

const minFruit=fruits.reduce((min,fruit)=>
                              fruit.calories<min.calories ?
                              fruit:min);

console.log(maxFruit)
console.log(minFruit)