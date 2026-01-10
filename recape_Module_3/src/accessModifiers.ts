{

    // access modifiers


    class BankAccount{
        name : string;
        readonly id : number;
        private balance: number;

        constructor(id:number, name:string, balance:number){
            this.id = id;
            this.name = name;
            this.balance = balance
        }

        addDeposite(newBalance : number){
            this.balance = this.balance + newBalance;
            console.log(this.balance);
            
        }
    }

    
    const account = new BankAccount(123, 'abu sayed', 500)
    // account.addDeposite(10)
    
    console.log(account.addDeposite(20))
    
    // console.log(account.balance);
   
    













}