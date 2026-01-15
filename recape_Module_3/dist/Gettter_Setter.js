"use strict";
{
    // getter & setter
    //Getters and setters in TypeScript allow you to control access to class properties with custom logic. They look like properties when used but execute functions behind the scenes.
    class Temperature {
        // tempInFerhenhiet: number;
        constructor(tempInCelcius) {
            this.tempInCelcius = tempInCelcius;
            // this.tempInFerhenhiet = tempInFerhenhiet
        }
        get celciusToFer() {
            if (this.tempInCelcius < -547) {
                throw new Error('Temperature below absolute zero!');
            }
            return (this.tempInCelcius * 9 / 5) + 32;
        }
    }
    const temp = new Temperature(-73);
    console.log(temp.celciusToFer);
    class BankAccount {
        constructor(name, id, _balance) {
            this.name = name;
            this.id = id;
            this._balance = _balance;
        }
        //getter
        get balance() {
            return this._balance;
        }
        //setter
        set deposit(amount) {
            this._balance = this._balance + amount;
        }
    }
    const goriberAccount = new BankAccount('rifat', 123, 50);
    goriberAccount.deposit = 30;
    console.log(goriberAccount.balance);
}
