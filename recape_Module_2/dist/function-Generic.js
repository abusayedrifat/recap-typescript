"use strict";
{
    const createArray = (param) => {
        return [param];
    };
    const createArrayWithGeneric = (param) => {
        return [param];
    };
    const res = createArray('bangladesh');
    const res2 = createArrayWithGeneric({ id: 23, name: 'rifat' });
    //tuple 
    const createTupleWithGeneric = (param1, param2) => {
        return [param1, param2];
    };
    const res3 = createTupleWithGeneric('rifat', 5541);
    const createTupleWithGeneric2 = (a, b) => {
        return [a, b];
    };
    const res4 = createTupleWithGeneric2(2234, { title: 'nature', time: '1-1-2026', resolution: '1900*1080', RGB: true });
}
