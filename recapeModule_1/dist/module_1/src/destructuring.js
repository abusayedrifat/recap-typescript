"use strict";
{
    const user = {
        name: {
            firstName: 'abu',
            middleName: 'sayed',
            lastName: 'rifat'
        },
        address: 'b-baria',
        income: 0
    };
    const { income, name: { middleName } } = user;
    const friends = ['abu', 'sayed', 'rifat', 'emon', 'arju', 'roni', 'bayzid', 'musa', 'shokilur'];
    const [x, y, z, aa, bb, cc, dd] = friends;
    const [, , a, b, , , ...rest] = friends;
}
