"use strict";
{
    //modifiers in class -> public, private, readonly, protected
    class Animal {
        constructor(name, species, sound) {
            this.name = name;
            this.species = species;
            this.sound = sound;
        }
        makeSound() {
            console.log(`${this.name} sounds like ${this.sound}`);
        }
    }
    const cat = new Animal("paki cat", "tiger", "mew");
    cat.makeSound();
}
