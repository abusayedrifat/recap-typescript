{


const user = {
   name :{
    firstName : 'abu',
    middleName: 'sayed',
    lastName : 'rifat'
   },
   address: 'b-baria',
   income:0
}

const { income, name :{middleName} } = user


//array destrucuring

const friends = ['abu', 'sayed', 'rifat', 'emon', 'arju' , 'roni', 'bayzid', 'musa' , 'shokilur']

const [x,y,z,aa,bb,cc,dd ] = friends
const [ , , a,b, , ,...rest ] = friends //suppose i don't want to take specific ones than i can destructure 

}