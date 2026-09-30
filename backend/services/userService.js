
const User = require('../db/models/User');
const bcrypt = require('bcrypt');
const exceptionClasses = require('../errors/exceptionClasses');

const createUser = async (userData) => {
    
    const hash = await bcrypt.hash(userData.password, saltRounds);

	const user = new User({
		name: userData.username,
		passwordHash: hash,
	});


	try
	{
		await user.save();
	}
	catch (error)
	{
		if (error.code = 11000)
			throw new exceptionClasses.resourceExistsException();
	}

	return user;
}

const isValidCredentials = async (username, password) => {

	const	user = await User.findOne({name: username});
	
	if (!user)
		throw new exceptionClasses.AuthException();
	
	const	match = await bcrypt.compare(password, user.passwordHash);
	
	if (!match)
		throw new exceptionClasses.AuthException();

	return user;
}

const getUserById = async (id) => await User.findById(id);

const getUserByName = async (username) => await User.findOne({name: username})

module.exports = {
	createUser,
	isValidCredentials,
	getUserById,
	getUserByName,
};
