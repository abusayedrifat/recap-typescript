"use strict";
let age = 23;
let num = 123;
console.log(age);
console.log(num);
const surName = 'rifat';
console.log(surName);
const boolean = true;
console.log(boolean);
//array
const numbers = [1, 2, 3, 4, 5];
const names = ['rifat', 'abu', 'sayed'];
names[2].concat('ur name');
console.log(names);
// tuple
// tuple only usefull when we use only two values
const basket = ['banana', 24];
let mySize = 3 /* size.Large */;
console.log(mySize);
//function
{
    function calculateTax(income) {
        if (income < 15000) {
            let totalTax = income * 0.12;
            return totalTax;
        }
        let totalTax = income * 0.35;
        return totalTax;
    }
    calculateTax(5000);
}
{
    function calculateTax(income, taxYear = 2022) {
        if (taxYear < 2022) {
            return income * 0.18;
        }
        return income * 0.22;
    }
    calculateTax(4000);
}
//object
