{


    const createArray = (param: string): string[] => {
        return [param]
    }

    const createArrayWithGeneric = <T>(param: T): T[] => {
        return [param]
    }

    const res = createArray('bangladesh')

    type Obj = {
        id: number,
        name: string
    }
    const res2 = createArrayWithGeneric<Obj>({ id: 23, name: 'rifat' })


    //tuple 

    const createTupleWithGeneric = <X, Y>(param1: X, param2: Y): [X, Y] => {
        return [param1, param2]
    }
    const res3 = createTupleWithGeneric<String, number>('rifat', 5541)

    const createTupleWithGeneric2 = <X, Y>(a: X, b: Y) => {
        return [a, b]
    }

    type ImageInfo = { 
        title: string,
        time: string,
        resolution: string,
        RGB: boolean 
    }
    const res4 = createTupleWithGeneric2<number, ImageInfo>(2234, { title: 'nature', time: '1-1-2026', resolution: '1900*1080', RGB: true })









}