
const express = require('express');
const path = require('path');

const router = express.Router();

const publicDir = '../../../frontend/public';

router.get('/', (req, res) => {

	res.render('index');
	// res.sendFile(path.join(__dirname, publicDir, 'index.html'))

});

router.get('/account', (req, res) => {

	res.render('account');
	// res.sendFile(path.join(__dirname, publicDir, 'index.html'))

});

router.get('/about', (req, res) => {
	res.sendFile(path.join(__dirname, publicDir, 'about.html'))
});

router.get('/reviews', (req, res) => {
	res.sendFile(path.join(__dirname, publicDir, 'reviews.html'));
});

router.get('/signup', (req, res) => {
	res.sendFile(path.join(__dirname, publicDir, 'signup.html'));
});

router.get('/login', (req, res) => {
	res.sendFile(path.join(__dirname, publicDir, 'login.html'));
});

router.use(express.static(path.join(__dirname, publicDir, 'styles')));
router.use('/scripts', express.static(path.join(__dirname, publicDir, 'scripts')));

router.get('/*splat', (req, res) => {
	res.status(404).sendFile(path.join(__dirname, publicDir, 'not_found.html'));
});



module.exports = router;