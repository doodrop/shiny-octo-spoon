import baseUrl from '../config/baseurl';

const signin = user => (
	fetch(`${baseUrl.backendUrl}/signin`, {
		method: 'POST',
		headers: {
			Accept: 'application/json',
		},
		body: JSON.stringify(user),
	})
);

const signup = user => (
	fetch(`${baseUrl.backendUrl}/signup`, {
		method: 'POST',
		headers: {
			Accept: 'application/json',
		},
		body: JSON.stringify(user),
	})
);

export default {
	signin,
	signup,
};
