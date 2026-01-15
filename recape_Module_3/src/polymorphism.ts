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

class Circle extends 











}