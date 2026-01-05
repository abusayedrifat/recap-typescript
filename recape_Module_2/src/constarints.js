"use strict";
{
    // constraints of typeScript
    const enrollStudent = (student) => {
        const course = 'nxt level web-development';
        console.log(Object.assign(Object.assign({}, student), { course }));
        return Object.assign(Object.assign({}, student), { course });
    };
    const student1 = enrollStudent({
        id: 123,
        name: 'Abc',
        email: 'abc@gmail.com',
    });
    const student2 = enrollStudent({
        id: 234,
        name: 'asd',
        email: 'asd@gmail.com',
    });
    const student3 = enrollStudent({
        id: 345,
        name: 'qwe',
        email: 'qwe@gmail.com',
        smartWatch: false,
        address: 'b-baria'
    });
    const student4 = enrollStudent({
        id: 456,
        name: 'dfgh',
        email: 'dfgh@gmail.com',
        hasPC: true
    });
}
