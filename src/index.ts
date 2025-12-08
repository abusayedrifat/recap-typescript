let age:number = 23;
let num: number= 123;
console.log(age);
console.log(num);
 

const surName: string = 'rifat'
console.log(surName);

const boolean: boolean = true
console.log(boolean);


//array

const numbers : number[] = [1,2,3,4,5]

const names : string [] = ['rifat', 'abu', 'sayed']

names[2].concat('ur name')

console.log(names);

// tuple
// tuple only usefull when we use only two values

const basket : [string, number] = ['banana', 24]

// enum         

  const enum size { Small = 1, Medium , Large}

  let mySize = size.Large
  console.log(mySize);
   

//function

function calculateTax(income:number): number{
  if (income < 10000) {
    return income*0.12;
  }
    
  return income*0.35
}