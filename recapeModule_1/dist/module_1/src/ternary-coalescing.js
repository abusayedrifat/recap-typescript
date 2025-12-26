"use strict";
var _a, _b;
{
    const age = 18;
    const isAdult = age >= 18 ? 'adult' : 'not adult';
    console.log(isAdult);
    const user1 = {
        name: 'sayed',
        age: 19,
        city: 'b-baria',
        address: {
            presentAddress: 'rajshahi university'
        }
    };
    const parmanentAdd = (_b = (_a = user1 === null || user1 === void 0 ? void 0 : user1.address) === null || _a === void 0 ? void 0 : _a.parmanentAddress) !== null && _b !== void 0 ? _b : 'no parmanent address';
    console.log(parmanentAdd);
    const isAuthenticated = null;
    const result = isAuthenticated !== null && isAuthenticated !== void 0 ? isAuthenticated : 'guest';
    console.log(result);
}
