{

    // constraints of typeScript

    const enrollStudent = <T>(student:T) =>{

        const course = 'nxt level web-development'
        console.log({...student,course});
        return{
            ...student,
            course
        }
        
    }

    const student1 = enrollStudent({
        name:'Abc',
        email:'abc@gmail.com',
    })
    const student2 = enrollStudent({
        name:'asd',
        email:'asd@gmail.com',
    })
    const student3 = enrollStudent({
        name:'qwe',
        email:'qwe@gmail.com',
    })









}