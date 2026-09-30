document.getElementById('reviewForm').addEventListener('submit', async (event) => {
	event.preventDefault();

	const jsonForm = JSON.stringify(Object.fromEntries(new FormData(event.target).entries()));

	try {
		const response = await fetch('/api/reviews', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: jsonForm,
		});

		if (!response.ok) {
			throw new Error(`Server responded with ${response.status}`);
		}

		location.reload();

	}
	catch (error) {
		console.error('Error submitting review:', error);
	}
});
