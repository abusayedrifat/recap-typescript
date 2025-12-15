
//normal function

function multiply (a:number, b:number=1): number{
    return a*b;
}
multiply(3)


//arrow function

const stabdardDeviation = (mean:number, median:number):number => mean*median;


// function inside an object

const user1 ={
    userName : 'abu sayed',
    balance : 0,
    status:'gorib',
    addBalance(balance:number):string{
        return `my new balance is ${this.balance+balance}`
    }
}
const user2 ={
    userName : 'sayed',
    balance : -20,
    status:'hoto-doridro',
    addBalance(balance:number):string{
        return `my new balance is ${this.balance+balance}`
    }
}