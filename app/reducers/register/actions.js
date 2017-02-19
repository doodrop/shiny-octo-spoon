import * as types from './constants';
import authApi from '../../api/auth';
import simpleStore from 'react-native-simple-store';

export function signupRequest() {
	return {
		type: types.SIGNUP_REQUEST,
	};
}

export function signupRequestFail(error) {
	return {
		type: types.SIGNUP_REQUEST_FAIL,
		error,
	};
}

export function signupRequestSuccess(payload) {
	return {
		type: types.SIGNUP_REQUEST_SUCCESS,
		payload,
	};
}

export function signup(user) {
	return (dispatch) => {
		dispatch(signupRequest());
		return authApi.signup(user)
			.then((response) => response.json())
			.then((response) => {
				if (response.statusCode >= 400) {
					return dispatch(signupRequestFail('We had a problem with your registration. Please try again.'));
				}
				simpleStore
					.save('token', {
						token: response.token,
					})
					.then(() => {
						dispatch(signupRequestSuccess(response));
					});
			});
	};
}
