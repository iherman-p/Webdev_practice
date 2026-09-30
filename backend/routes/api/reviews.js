
const express = require('express');
const Review = require('../../db/models/Review');

const   router = express.Router();

router.get('/', async (req, res) => {

	try {

		const reviews =  await Review.find({}).populate('user', 'name -_id');
		res.send(reviews);

	} catch (error) {
		console.log(error);
		res.status(500).send('Error fetching reviews');
	}

});

router.post('/', async (req, res) => {

	if (!req.user)
	{
		res.status(401).send('Not logged in');
		return ;
	}

	try {

		let	review = await Review.create({
			rating: req.body.rating,
			desc: req.body.desc,
			user: req.user._id,
		});

		const	result = await review.save()
		.then(() => console.log('Review posted'))

		res.status(201).json(result);

	} catch (error) {
		console.log(error);
		res.status(500).send('error adding review');
	}

});

router.delete('/*id', async (req, res) => {

	try {
		
		console.log(req.params.id);

		let review = await Review.findByIdAndDelete(req.params.id);

		res.status(204).send();

	} catch (error) {
		console.log(error);
		res.status(500).send('error removing collection');
	}

});

module.exports = router;
