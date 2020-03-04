import  users from './users.js'


const getInactiveUsers = users => users.filter(x => !x.isActive);

console.log(getInactiveUsers(users)); 