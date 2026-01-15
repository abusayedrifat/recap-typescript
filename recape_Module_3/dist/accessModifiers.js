"use strict";
{
    // access modifiers
    class BankAccount {
        constructor(id, name, balance) {
            this.id = id;
            this.name = name;
            this.balance = balance;
        }
        addDeposite(newBalance) {
            this.balance = this.balance + newBalance;
            console.log(this.balance);
        }
    }
    const account = new BankAccount(123, 'abu sayed', 500);
    // account.addDeposite(10)
    console.log(account.addDeposite(20));
    // console.log(account.balance);
}
