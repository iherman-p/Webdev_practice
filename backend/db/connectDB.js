
const mongoose = require('mongoose');

const connectDB = async () => {

	await mongoose.connect('mongodb://127.0.0.1:27017/wdtest').catch((error) => {
		console.log('FAILED DB CONNECTION:', error);
		process.exit(1);
	});
}

module.exports = connectDB;