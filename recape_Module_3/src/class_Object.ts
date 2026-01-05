{

    //modifiers in class -> public, private, readonly, protected

    class Animal {
       
    constructor(public name:string, public species:string , public sound:string ){}
    

     makeSound(){
        console.log(`${this.name} sounds like ${this.sound}`);
        
     }
    }


    const cat = new Animal ("paki cat","tiger" , "mew")
    cat.makeSound()
}