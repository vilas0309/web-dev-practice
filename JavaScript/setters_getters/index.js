//setter:special method that makes a property writeable
//getter: special method that makes a property readable

// validate and modify a value when reading/writing a property

class Rectangle{
    constructor(width,height){
        this.width=width,
        this.height=height
    }

    set width(newWidth){
        if(newWidth>0){
            this._width=newWidth
        }
        else{
            console.error(`width must be a positive number.`)
        }
    }
    
    set height(newHeight){
        if(newHeight>0){
            this._height=newHeight
        }
        else{
            console.error(`height must be a positive number.`)
        }
    }

    get width(){
        return this._width;
    }

    get heigh(){
        return this._height;
    }

    get area(){
        return this._width*this._height;
    }
}

const rectangle = new Rectangle (28,34)
console.log(rectangle.width)
console.log(rectangle.heigh)
console.log(rectangle.area)

const rectangle1 = new Rectangle (-28,34)
const rectangle2 = new Rectangle (28,'pizza')
