
const bcrypt = require('bcrypt');
const sessionService = require('../services/sessionService');
const userService = require('../services/userService');
const exceptionClasses = require('../errors/exceptionClasses'); 

const openSession = async (req, res) => {

	try {

		if (req.user)
		{
			try 
			{
				await sessionService.deleteSession(req.cookies.auth);
			}
			catch (error)
			{
				console.log(error);
			}
		}

		const {username, password} = req.body;

		const user = await userService.isValidCredentials(username, password);

		const authcookie = await sessionService.generateSession(user);

		res.cookie('auth', authcookie._id, {
			maxAge: 120000,
			httpOnly: true,
		});

		res.status(200).send('success');

	} catch (error) {
		console.log(error);
		if (error instanceof exceptionClasses.authError)
			res.status(401).send('bad credentials');
		res.status(500).send('error logging in');
	}

};

module.exports = {
    openSession
};