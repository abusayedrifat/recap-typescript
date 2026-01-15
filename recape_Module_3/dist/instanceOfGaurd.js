"use strict";
{
    // intance of gaurd
    class Animal {
        constructor(name, species) {
            this.name = name;
            this.species = species;
        }
        makeSound() {
            console.log(`${this.name} making sound`);
        }
    }
    class Cat extends Animal {
        constructor(name, species) {
            super(name, species);
        }
        makeMewo() {
            console.log(`${this.name} make mewo sound`);
        }
    }
    class Dog extends Animal {
        constructor(name, species) {
            super(name, species);
        }
        makeBark() {
            console.log(`${this.name} make bark sound`);
        }
    }
    // here const cat/dog is instance of Cat/Dog class
    const isDog = (animal) => {
        return animal instanceof Dog;
    };
    const isCat = (animal) => {
        return animal instanceof Cat;
    };
    const getAnimal = (animal) => {
        if (isDog(animal)) {
            animal.makeBark();
        }
        if (isCat(animal)) {
            animal.makeMewo();
        }
    };
    const cat = new Cat('biral vai', 'cat');
    const dog = new Dog('dog vai', 'dog');
    getAnimal(cat);
}
