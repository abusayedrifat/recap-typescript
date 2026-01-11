{
// getter & setter
//Getters and setters in TypeScript allow you to control access to class properties with custom logic. They look like properties when used but execute functions behind the scenes.


class Temperature {
    tempInCelcius : number;
    // tempInFerhenhiet: number;

    constructor(tempInCelcius:number){
        this.tempInCelcius = tempInCelcius;
        // this.tempInFerhenhiet = tempInFerhenhiet
    }

    get celciusToFer():number{
        if (this.tempInCelcius < -547) {
            throw new Error('Temperature below absolute zero!')
            
        }
        
        return (this.tempInCelcius*9/5)+32;
    }


}


const temp = new Temperature(-73)


console.log(temp.celciusToFer);


















}