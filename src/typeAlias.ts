
type Customer = {
 name:string,
 age: number,
 address: string,
 phoneNumber: string,
 email?: string
}


const  customer1: Customer={
    name:'emon',
    age: 24,
    address:'monaikhali',
    phoneNumber:'01834....',
    
}

const customer2 : Customer = {
    name: 'shamim',
    age: 34,
    address:'nobi-pur',
    phoneNumber:'018239....',
    email: 'sadfjkb@gmail.com'
}


type IsAdmin = boolean
const isAdmin : IsAdmin = true

type Profession = string
const profession : Profession = 'student'

type Multiply = (num1:number , num2:number) => number 

const cross:Multiply = (num1, num2) => num1*num2















