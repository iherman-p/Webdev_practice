
const express = require('express');

const logConnectionMiddleware = (req, res, next) => {

	console.log(
		'Request url: ', req.url, '\n',
		'Request body: ', req.body, '\n',
		'Request user: ', req.user, '\n',
		'Request cookies: ', req.cookies, '\n',
	);

	next();
};

module.exports = logConnectionMiddleware;