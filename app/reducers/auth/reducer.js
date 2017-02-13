import * as types from './constants';

const initialState = {
	user: {},
	loading: false,
	successSignin: false,
	signinError: '',
	signupError: '',
	successSignup: false,
};

const auth = (state = initialState, action) => {
	switch (action.type) {
	case types.SIGNIN_REQUEST:
		return {
			...state,
			loading: true,
			signinError: '',
			signupError: '',
		};
	case types.SIGNIN_REQUEST_FAIL:
		return {
			...state,
			loading: false,
			signinError: action.error,
			signupError: '',
			user: {},
			successSignin: false,
		};
	case types.SIGNIN_REQUEST_SUCCESS:
		return {
			...state,
			loading: false,
			user: action.payload.user,
			successSignin: true,
			signinError: '',
			signupError: '',
		};
	case types.SIGNUP_REQUEST:
		return {
			...state,
			loading: true,
			signupError: '',
			signinError: '',
		};
	case types.SIGNUP_REQUEST_FAIL:
		return {
			...state,
			loading: false,
			signupError: action.error,
			signinError: '',
			user: {},
			successSignup: false,
		};
	case types.SIGNUP_REQUEST_SUCCESS:
		return {
			...state,
			loading: false,
			signupError: '',
			signinError: '',
			user: action.payload.user,
			successSignup: true,
		};
	default:
		return state;
	}
};

export default auth;
