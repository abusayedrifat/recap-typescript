"use strict";
//spread operator
//rest operator
//
//spread operator
const frnds1 = ['sayed', 'emon', 'mahin'];
const frnds2 = ['udoy', 'hasib', 'rifat'];
frnds1.push(...frnds2);
const mentors1 = {
    typescript: 'mezba',
    redux: 'Tonmoy',
    dbms: 'Mizan'
};
const mentors2 = {
    prisma: 'Firoz',
    next: 'Tonmoy',
    cloud: 'Nahid'
};
const mentorsList = Object.assign(Object.assign({}, mentors1), mentors2);
// rest opeator (cousin of spread operator)
