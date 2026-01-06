{

    //type gaurd / narrowing



    










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