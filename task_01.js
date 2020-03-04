import  users from './users.js'




const getUserNames = users => {
	return users.map(x => x.name)
}

console.log(getUserNames(users))

