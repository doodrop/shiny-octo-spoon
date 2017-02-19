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

export function setSigninError(error) {
	return {
		type: types.SET_SIGNIN_ERROR,
		error,
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
