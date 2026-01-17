{
//polymorphism


class Person{
    getSleep(){
        console.log('i am sleeping 8 hours');
        
    }
}


class Student extends Person{
    getSleep(){
        console.log('i am sleeping 6 hours');
        
    }
}

class Developer extends Person{
    getSleep(): void {
        console.log(' i am sleeping 5 hours');
        
    }
}


const person1 = new Person();
const person2 = new Student();
const person3 = new Developer();


const getSleepingHours = (param: Person) =>{
    param.getSleep()
}

getSleepingHours(person1)
getSleepingHours(person2)
getSleepingHours(person3)



class Shape {
    getArea():number{
        return 0
    }
}

class Circle extends Shape {
    radius:number

    constructor(radius:number){
        super()
        this.radius = radius
    }

    getArea(): number {
        return 2*Math.PI*Math.pow(this.radius,2);
    }
}


class Ractangle extends Shape{
    length:number;
    width:number;

    constructor(length:number,width:number){
        super()
        this.length = length;
        this.width = width
    }

    getArea(): number {
        return this.width*this.length;
    }
}


const circle = new Circle(2);
const ractangle = new Ractangle(4,5)

const measureArea = (param: Shape) =>{
   console.log(param.getArea());
    
}

measureArea(ractangle)









}