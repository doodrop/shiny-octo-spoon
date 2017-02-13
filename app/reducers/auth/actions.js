import * as types from './constants';
import authApi from '../../api/auth';
import simpleStore from 'react-native-simple-store';

export function signinRequest() {
	return {
		type: types.SIGNIN_REQUEST,
	};
}

export function signinRequestFail(error) {
	return {
		type: types.SIGNIN_REQUEST_FAIL,
		error,
	};
}

export function signinRequestSuccess(payload) {
	return {
		type: types.SIGNIN_REQUEST_SUCCESS,
		payload,
	};
}
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

export function signin(user) {
	return (dispatch) => {
		dispatch(signinRequest());
		return authApi.signin(user)
				.then(response => response.json())
				.then((response) => {
					if (response.statusCode >= 400) {
						return dispatch(signinRequestFail('Invalid user and/or email address. Please try again.'));
					}
					simpleStore
						.save('token', {
							token: response.token,
						})
						.then(() => {
							dispatch(signinRequestSuccess(response));
						});
				});
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
