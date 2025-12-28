{

// generic type

type Generic<T> = Array<T>

// const numbers : number[] = [1,2,3]
const numbers : Generic<number> = [1,2,3]

// const names : string[] = ['abu', 'sayed', 'rifat']
const names : Generic<string> = ['abu', 'sayed', 'rifat']

// const booleans : boolean[] = [true, false, true, true]
const booleans : Generic<boolean> = [true, false, true, true]


//Array of Object

const users : Generic<{name:string, age:number}> = [
    {name:'abu', age:3},
    {name:'abasdu', age:4},
    {name:'abufdgh', age: 5},
    {name:'asdfghbu', age:9},
]


// tuple


type GenericTuple<X,Y> = [X,Y]

const couple:GenericTuple<string, string> = ['boy', 'girl']

const stuff: GenericTuple<number,{name:string, age:number}> = [123,{name:'rifat', age:34}]




}