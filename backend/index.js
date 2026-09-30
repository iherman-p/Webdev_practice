
const express = require('express');
const cookieParser = require('cookie-parser');
const ejs = require('ejs'); // i guess bro
const path = require('path');

const apiReviewRoutes = require('./routes/api/reviews');
const apiUserRoutes = require('./routes/api/users');
const apiSessionRoutes = require('./routes/api/sessions');

const staticRoutes = require('./routes/static/static');

const authMiddleware = require('./middleware/auth');
const logConnectionMiddleware = require('./middleware/logConnections');

const connectDB = require('./db/connectDB');

const	port = 8080;
const	app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.set('view engine', 'ejs');
app.set('views',path.join(__dirname, '../frontend/views'));

app.use(authMiddleware);
app.use(logConnectionMiddleware);

// routes
app.use('/api/reviews', apiReviewRoutes);
app.use('/api/users', apiUserRoutes);
app.use('/api/sessions', apiSessionRoutes);
app.use('/', staticRoutes);

const start = async () => {

	await connectDB();
	
	app.listen(port, () => {
		console.log(`App started on port ${port}`)
	});
};

start();