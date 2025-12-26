let age: number = 23;
let num: number = 123;
console.log(age);
console.log(num);


const surName: string = 'rifat'
console.log(surName);

const boolean: boolean = true
console.log(boolean);


//array

const numbers: number[] = [1, 2, 3, 4, 5]

const names: string[] = ['rifat', 'abu', 'sayed']

names[2].concat('ur name')

console.log(names);

// tuple
// tuple only usefull when we use only two values

const basket: [string, number] = ['banana', 24]

// enum         

const enum size { Small = 1, Medium, Large }

let mySize = size.Large
console.log(mySize);


//function
{
  function calculateTax(income: number): number {
    if (income < 15000) {
      let totalTax = income * 0.12
      return totalTax
    }
    let totalTax = income * 0.35
    return totalTax
  }
  calculateTax(5000)
}


{

function calculateTax(income: number, taxYear: number = 2022): number {
  if (taxYear < 2022) {
    return income * 0.18
  }

  return income * 0.22
}  
calculateTax(4000)

}

//object

