export const users = [
    {
        id: 1,
        uname: "alice",
        age: 34,
        spendMoney: 50,
        eCigaretteSaved: 3,
        lastTimeVape: new Date("2022-03-21").toLocaleDateString(),
        
    },
    {
        id: 2,
        uname: "bob",
        age: 20,
        spendMoney: 105,
        eCigaretteSaved: 5,
        lastTimeVape: new Date("2020-12-21").toLocaleDateString(),
    },
    {
        id: 3,
        uname: "carol",
        age: 43,
        spendMoney: 80,
        eCigaretteSaved: 6,
        lastTimeVape: new Date("2021-09-21").toLocaleDateString(),
    },
    {
        id: 4,
        uname: "dave",
        age: 21,
        spendMoney: 40,
        eCigaretteSaved: 2,
        lastTimeVape: new Date("2022-04-01").toLocaleDateString(),
    },
]

export const getDifferenceInHours = (date1, date2) => {
    const diff = Math.abs(date1.getTime() - Number(date2.getTime()));
    return Number(Math.ceil(diff / (1000 * 3600))) - 20;
};
