//static:



class User{
    static userCount=0;

    constructor(name){
        this.name=name,
        this.userCount++
    }

    static getUserCont(){
        console.log(`There are ${this.userCount} users online.`)
    }

    hello(){
        console.log(`My name is ${this.name}.`)
    }
}

const user1 = new User('Spongebob')
const user2 = new User('Patrick')
const user3 = new User('Sandy')

user1.hello()
user2.hello()
user3.hello()
User.getUserCont()
