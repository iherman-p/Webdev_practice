
const getReviews = async () => {
	const board = document.getElementById('ratingsBoard');

    const response = await fetch('/api/reviews', { method: 'GET'});

	const reviews = await response.json();

	for (const review of reviews) {
	
		console.log(review);

		const rating = review.rating;
		const desc = review.desc;

		const reviewElem = document.createElement('div');
		reviewElem.classList.add('review');

		const ratingElem = document.createElement('p');
		ratingElem.textContent = rating + ' / 5';

		const descElem = document.createElement('p');
        descElem.textContent = ': ' + desc;

        reviewElem.id = review._id;

        const deleteElem = document.createElement('button');

        deleteElem.textContent = 'Remove review';
        deleteElem.addEventListener('click', async () => {
        
        	await fetch(`/api/reviews/${reviewElem.id}`, { method: 'delete' });

        	location.reload();

        });

        reviewElem.appendChild(ratingElem);
        reviewElem.appendChild(descElem);
        reviewElem.appendChild(deleteElem);
        board.appendChild(reviewElem);
	}
}

getReviews();