import  users from './users.js'

//==============================

// const getSortedUniqueSkills = users => {
// 	const localUsers = [...users];
// 	return localUsers.reduce((acc, element) => {
// 		acc.push(...element.skills)
// 		return [...acc]}, []).filter((element, idx, arr) => arr
// 		.indexOf(element) === idx)
// 		.sort((a, b) => a > b ? 1 : -1)
// };

//==============================

const getSortedUniqueSkills = users => users
		.reduce((acc, element) => [...acc, ...element.skills], [])
		.filter((a,b,c) => c.indexOf(a) === b)
		.sort((a,b) => a > b ? 1 : -1)

//==============================



console.log(getSortedUniqueSkills(users));