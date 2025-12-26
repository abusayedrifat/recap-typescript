"use strict";
{
    const search = (value) => {
        if (value) {
            console.log('searching');
        }
        else {
            console.log('nothing to search');
        }
    };
    search('riafat');
    const KmToMeter = (value) => {
        if (typeof value === 'number') {
            const result = (value * 1000) / 3600;
            console.log(`${result} ms^-1`);
        }
        else if (typeof value === 'string') {
            const [measure, unit] = value.split(" ");
            console.log(measure);
            const result = (parseFloat(measure) * 1000) / 3600;
            console.log(result);
        }
        else {
            console.log('wrong input');
        }
    };
    KmToMeter(1234);
    const throwError = (msg) => {
        throw new Error(msg);
    };
    throwError('if we surely know this that it will never return anything than we can use "never type"');
}
