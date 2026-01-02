{


    type Developer<T, X = null> ={
        name:string,
        age:number,
        computer:{
            name:string,
            model:string,
            releaseYear:number,
            price:number
        }
        smartWatch: T,
        bike?: X
    }


    type Watch = {
        name:string,
        model:string
    }
    type Hero = {
        model : string,
        enginePower: string
    }
    const poorDev : Developer<Watch , Hero> ={
        name:'sayed',
        age:23,
        computer:{
            name:'MSI',
            model:'GF 63 10UC',
            releaseYear: 2020,
            price: 90000
        },
        smartWatch:{
            name:'xiaomi',
            model:' 25-xt'
        },
        bike:{
            model:'hero',
            enginePower:'100 cc'
        }

    }




    
 type AppleWatch = {
    name:string,
    model:string,
    healthCheck:{
        heartBeat:boolean,
        stepsCounting:boolean,
        compass:boolean
    }
 }   

type Yamaha =  {
        model : string,
        enginePower: string,
        abs:boolean,
        oilColled:boolean
    }

const richDev : Developer<AppleWatch, Yamaha> = {
        name:'rifat',
        age:26,
        computer:{
            name:'ROG strtix',
            model:'Scar 18',
            releaseYear: 2024,
            price: 290000
        },
        smartWatch:{
            name:'apple',
            model:' apx-234',
            healthCheck:{
                heartBeat:true,
                stepsCounting:true,
                compass:true
            }
        },
        bike:{
            model: 'yamaha',
            enginePower:'350 cc',
            abs: true,
            oilColled: true
        }
}







}