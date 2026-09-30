
const mongoose = require('mongoose');
const User = require('./User');
const { randomUUID } = require('crypto');

const sessionSchema = mongoose.Schema({
	_id: {
		type: mongoose.Schema.Types.UUID,
		default: randomUUID,
	},
	user: {
		type: mongoose.Schema.Types.ObjectId, 
		ref: User,
	},
	expiresAt: { 
		type: Date, 
		default: Date.now,
		expires: 300,
	},
});

const Session = mongoose.model('Session', sessionSchema);

module.exports = Session;