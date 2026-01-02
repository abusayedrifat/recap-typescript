{

    //promise

    const createPromise = () =>{
        return new Promise ((resolve, reject)=>{
            const data:string = 'someting';

            if (data) {
                resolve(data)
                
            }
            else{
                reject('failed to fetch')
                
            }
        })
    }


    const showData = async()=>{
        const data = await createPromise();
        console.log(data);
        
    }
    showData()










}