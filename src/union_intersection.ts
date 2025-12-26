{

 
    //union (it's work like logical OR)
  type Student1 = 'dedicated dev' | 'frontend dev'

  type Student2 = 'fakibaj dev' | 'talto-palto dev'


  const studentStatus : Student2 = 'talto-palto dev'

console.log(studentStatus);


// intersection (it's work like logical AND)

type FrontendDev = {
  skills: string[];
  designationStatus1: 'frontend dev'
}
 type BackendDev = {
  skills:string[];
  designationStatus2: 'backend dev'
 }

 
 type Dev = FrontendDev & BackendDev

 const fullstackDev : Dev = {
  skills: ['html','css', 'node', 'react' , 'express'],
  designationStatus1: 'frontend dev',
  designationStatus2: 'backend dev'
 }










}