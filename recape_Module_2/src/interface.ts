{


    //type alias
    type User1 = {
        name:string
        age:number
    }


    // declearing type with interface

    interface User2  {
        name:string,
        age:number
    }


    const user : User2 = {
        name:'rifat',
        age:23
    }


    //extend object eith type alias and interface

    type User3 = User1 & {role: string}

    interface User4 extends User1 {
        role: string
    }



    const user3 : User4 = {
        name:'rifat',
        age:24,
        role:'executive'
    }


// most of the time we will use "type alias" & "interface" for object
// we can also declear array and function with "interface" but "type alias" suits best. it's look more cleaner.



}