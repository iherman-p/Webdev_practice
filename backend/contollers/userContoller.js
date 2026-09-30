
const userServce = require('../services/sessionService');
const exceptionClasses = require('../errors/exceptionClasses');

const	saltRounds = 10;

const createUser = async (req, res) => {

	try {

		const {username, password} = req.body;

		await userServce.createUser({
			username: username,
			password: password,
		});

		res.status(201).send();

	} catch (error) {

		if (error instanceof exceptionClasses.ResourceExistsException) // replace with instanceof
		{
			res.status(409).json({error: 'Username in use'});
			return ;
		}

		res.status(500).json({error: 'Internal error creating user'});
	}

};

module.exports = {
	createUser,
};
