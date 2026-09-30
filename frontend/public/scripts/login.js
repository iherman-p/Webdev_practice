document.getElementById('loginForm').addEventListener('submit', async (event) => {
event.preventDefault();

	const jsonForm = JSON.stringify(Object.fromEntries(new FormData(event.target).entries()));
	try {
		const response = await fetch('/api/sessions', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: jsonForm,
			credentials: 'include',
		});

		if (response.code == 401)
		{
			return ;
		}

		if (!response.ok) {
			throw new Error(`Server responded with ${response.status}`);
		}

		location.href = '/';
		//location.reload();
	}
	catch (error) {
		console.error('Error logging in:', error);
	}
});