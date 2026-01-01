{


    const createArray = (param: string): string[] =>{
        return [param]
    }

    const createArrayWithGeneric = <T> (param:T):T[]=>{
        return [param]
    }

    const res = createArray('bangladesh')

    type Obj = {
        id:number,
        name:string
    }
    const res2 = createArrayWithGeneric<Obj>({id:23, name:'rifat'})











}