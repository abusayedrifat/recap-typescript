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

type AreaString = {
    [key in keyof AreaNumber] : string
}
 









}