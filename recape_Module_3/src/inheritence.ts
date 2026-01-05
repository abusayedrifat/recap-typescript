{

    // by inheritence we get property initializer from parent


    class Parent{
        name:string;
        age:number;
        address:string;

        constructor( name:string, age:number, address:string){
            this.name = name;
            this.age = age;
            this.address = address
        }

        getSleep(numOfHours:number){
            console.log(`${this.name} get sleep 8 hours a day`);
            
        }
    }


    class Child1 extends Parent{
        income: boolean;

        constructor(name:string, age:number, address:string , income:boolean){
            super(name, age, address)   
            this.income = income
        }
        infoAboutChild(){
            console.log(`The child of ${this.name} already earning news is ${this.income}`);
            
        }
    }

    const checkInheritence = new Child1("sayed ahmed",24,"b-baria", true)

    checkInheritence.infoAboutChild()
    








}