
const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({

	rating: {
		type: Number,
		min: 0, max: 5,
		required: true
	},
	desc: {
		type: String,
		required: true,
	},
	user: {
		type: mongoose.Schema.Types.ObjectId, 
		ref: 'User',
		required: true,
	},

});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;