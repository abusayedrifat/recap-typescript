"use strict";
function multiply(a, b = 1) {
    return a * b;
}
multiply(3);
const stabdardDeviation = (mean, median) => mean * median;
const user1 = {
    userName: 'abu sayed',
    balance: 0,
    status: 'gorib',
    addBalance(balance) {
        return `my new balance is ${this.balance + balance}`;
    }
};
const arr = [2, 3, 4, 5, 6];
const squaredArr = arr.map((num) => num * num);
