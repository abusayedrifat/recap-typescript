{

//Utility types

//====================================
//TypeScript provides several utility types to facilitate    common "type transformations". These utilities are available globally.
//https://www.typescriptlang.org/docs/handbook/utility-types.html
//====================================


type Person ={
    name:string,
    age:number,
    email?: string,
    number:string
}

// => Pick

type PersonPick = Pick<Person,"name" | "email" >


// => Omit


type PersonOmit = Omit<Person, "age">


// => Required 

type personRequired = Required<Person>

// => Partial

type partialPerson = Partial<Person>


// => readOnly


















}