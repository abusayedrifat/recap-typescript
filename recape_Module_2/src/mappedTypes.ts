{


   

    const arrOfNummbes: number[] = [1,2,3,4]

    const arrOfString:string[] = arrOfNummbes.map((number)=> number.toString())
    console.log(arrOfString);
    
 //mapped types
 //(means we can change the type of every property in an object, array)


 type AreaNumber = {
    width:number;
    height:number
 }

//  type AreaNumber = {
//     width:string;
//     height:string
//  }

//note: The keyof operator in TypeScript creates a union type of all the keys (property names) of an object type. 

type AreaString<T> = {
    [key in keyof T] : T[key]
}
 

const areaMeasuer2: AreaString<{height:string, width:number }> ={

    height:'123',
    width:1234
}





type Volume4 = {
    height:string,
    width:number,
    length:number
}


type MapVolume4<T> = {
    [key in keyof T ] : T[key]
}

const measureVolume : MapVolume4<{height:number, width:string, length:number}> = {
    height:356,
    width:'2345',
    length:234
} 







}