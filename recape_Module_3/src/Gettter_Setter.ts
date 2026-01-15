{
// getter & setter
//Getters and setters in TypeScript allow you to control access to class properties with custom logic. They look like properties when used but execute functions behind the scenes.

// public - accessible from anywhere (default for methods/properties)
// private - only accessible within the class itself
// protected - accessible within the class and its subclasses

class Temperature {
    tempInCelcius : number;
    // tempInFerhenhiet: number;

    constructor(tempInCelcius:number){
        this.tempInCelcius = tempInCelcius;
        // this.tempInFerhenhiet = tempInFerhenhiet
    }

    get celciusToFer():number{
        if (this.tempInCelcius < -547) {
            throw new Error('Temperature below absolute zero!')
            
        }
        
        return (this.tempInCelcius*9/5)+32;
    }


}


const temp = new Temperature(-73)


console.log(temp.celciusToFer);



class BankAccount {
    name:string;
    id:number;
    private _balance: number

    constructor(name:string, id:number , _balance:number){
        this.name = name;
        this.id = id;
        this._balance = _balance
    }

    //getter
    get balance() {  
        return this._balance
    }


    //setter

    set deposit(amount:number){
    
        this._balance = this._balance+amount
    }
}

const goriberAccount = new BankAccount('rifat', 123, 50)

goriberAccount.deposit = 30

console.log(goriberAccount.balance);

















}