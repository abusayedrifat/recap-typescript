{

    //type gaurd / narrowing
    //=================================



    //"typeof" narrowing

type AlphaNumeric = number | string

const sum = (param1:AlphaNumeric, param2:AlphaNumeric) :AlphaNumeric =>{
    if ( typeof param1 === "number" && typeof param2 === "number") {
        return param1+param2
    }
    else{
        return param1.toString()+param2.toString()
    }
}



console.log(sum('2','3'));





// "in" gaurd narowing

type NormalUser = {
    name:string,

}
type AdminUser = {
    name:string,
    role: "admin"
}

const getUser = (user: NormalUser | AdminUser) =>{
    if ("role" in user) {
        console.log(`my name is ${user.name} and i am ${user.role}`);
        
    }else{
        console.log(`my name is ${user.name} and i am normal user`);
        
    }
}

const normalUser: NormalUser = {
    name:'public'
}

const adminUser: AdminUser = {
    name:'mr.X',
    role:'admin'
}


console.log(getUser(adminUser));




}