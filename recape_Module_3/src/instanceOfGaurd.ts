{

    // intance of gaurd


class Animal {
    name:string;
    species:string;

    constructor(name:string, species:string){
        this.name = name;
        this.species = species
    }
    makeSound(){
        console.log(`${this.name} making sound`);
        
    }
}


class Cat extends Animal{
    constructor(name:string, species:string){
        super(name,species)
    }
    makeMewo(){
        console.log(`${this.name} make mewo sound`);
        
    }
}

class Dog extends Animal{
    constructor(name:string, species:string){
        super(name,species)
    }
    makeBark(){
        console.log(`${this.name} make bark sound`);
        
    }
}


// here const cat/dog is instance of Cat/Dog class

const isDog = (animal: Animal) =>{
    return animal instanceof Dog
}
const isCat = (animal: Animal) =>{
    return animal instanceof Cat
}


const getAnimal = (animal : Animal) =>{
    if (isDog(animal)) {
        animal.makeBark()
    }
    if (isCat(animal)) {
        animal.makeMewo()
    }
}

const cat = new Cat('biral vai', 'cat') 
const dog = new Dog('dog vai', 'dog')

getAnimal(cat)
















}