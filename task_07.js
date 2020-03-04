import  users from './users.js'


const calculateTotalBalance = users => users.reduce((acc, x) => acc + x.balance, 0);

console.log(calculateTotalBalance(users)); // 20916


