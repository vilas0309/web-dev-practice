//class: (ES6 feature) provides a more structured and cleaner way to 
//        work with objects compared to traditional constructor functions
//         ex. static, encapsulation, inheritance

class product{
    constructor(name,price){
        this.name=name,
        this.price=price
    }

    displayproduct(){
        console.log(`Product:${this.namr}`)
        console.log(`Price:${this.price}`)
    }
    salestax(tax){
        return this.price+(tax*this.price)
    }
}

const tax=0.05;
const product1 =new product('Shirt',2000)

product1.displayproduct()
let total=product1.salestax(tax)
console.log(`Total price (after tax):Rs${total}`)