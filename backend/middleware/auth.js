
const express = require('express');
const User = require('../db/models/User');
const Session = require('../db/models/Session');

const authMiddleware = async (req, res, next) => {

	res.locals.user = null;
	try
	{
		const session = await Session.findById(req.cookies.auth);
		if (!session)
		{
			next();
			return ;
		}

		await session.populate('user');
		req.user = session.user;
		res.locals.user = session.user;
	}
	catch (error)
	{
		console.log(error);
	}

	next();
};

module.exports = authMiddleware;