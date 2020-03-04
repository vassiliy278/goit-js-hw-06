import  users from './users.js'

const getUsersWithGender = (users, gender) => users
	.filter(x => x.gender === gender)
	.map(x => x.name);

console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]






