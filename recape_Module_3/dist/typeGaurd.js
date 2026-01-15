"use strict";
{
    const sum = (param1, param2) => {
        if (typeof param1 === "number" && typeof param2 === "number") {
            return param1 + param2;
        }
        else {
            return param1.toString() + param2.toString();
        }
    };
    console.log(sum('2', '3'));
    const getUser = (user) => {
        if ("role" in user) {
            console.log(`my name is ${user.name} and i am ${user.role}`);
        }
        else {
            console.log(`my name is ${user.name} and i am normal user`);
        }
    };
    const normalUser = {
        name: 'public'
    };
    const adminUser = {
        name: 'mr.X',
        role: 'admin'
    };
    console.log(getUser(adminUser));
}
