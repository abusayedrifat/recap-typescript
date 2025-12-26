
{


//ternay -- optional chaining --  nullish coalescing


const age:number = 18

// if (age>=18) {
//     console.log('adult');
    
// }
// else{
//     console.log('not adult');
    
// }

//ternary 
const isAdult = age>=18 ? 'adult' : 'not adult'
console.log(isAdult);


//optional chaining

type User = {
    name:string,
    age: number,
    city: string,
    address:{
        presentAddress: string,
        parmanentAddress?: string
    }
}

const user1:User ={
    name:'sayed',
    age: 19,
    city:'b-baria',
    address:{
        presentAddress:'rajshahi university'
    }
}

const parmanentAdd = user1?.address?.parmanentAddress ?? 'no parmanent address'
console.log(parmanentAdd);


//nullish coalescing (if he value of a var is "null" or "undefined" then it sets a default value)

const isAuthenticated = null

const result = isAuthenticated ?? 'guest'
console.log(result);




}