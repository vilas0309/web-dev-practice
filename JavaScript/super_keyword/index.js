//super: keyword is used classes to call the constructor or accsee the properties and
//       methods of a parent (superclass)
//      this = this object
//      super= the parent


class Animal{
    constructor(name,age){
        this.name=name,
        this.age=age
    }
    move(speed){
        console.log(`This ${this.name} at ${speed}Kph`)
    }
}

class Rabbit extends Animal{
    constructor(name,age,speed){
        super(name,age),
        this.runSpeed=speed
    }
    run(){
        console.log(`This ${this.name} is running`)
        super.move(this.runSpeed)
    }
}

class Fish extends Animal{
    constructor(name,age,speed){
        super(name,age),
        this.swimSpeed=speed
    }
    swim(){
        console.log(`This ${this.name} is swiming`)
        super.move(this.swimSpeed)
    }
}

class Hawk extends Animal{
    constructor(name,age,speed){
        super(name,age),
        this.flySpeed=speed
    }
    fly(){
        console.log(`This ${this.name} is flying`)
        super.move(this.flySpeed)
    }
}

const rabbit =new Rabbit('rabbit',12,20)
const fish = new Fish('fish',3,15)
const hawk = new Hawk('hawk',6,50)

console.log(rabbit.name)
console.log(rabbit.age)
rabbit.run()

console.log(fish.name)
console.log(fish.age)
fish.swim()

console.log(hawk.name)
console.log(hawk.age)
hawk.fly()