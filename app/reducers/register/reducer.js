import * as types from './constants';

const initialState = {
	user: {},
	loading: false,
	signupError: '',
	successSignup: false,
};

const register = (state = initialState, action) => {
	switch (action.type) {
	case types.SIGNUP_REQUEST:
		return {
			...state,
			loading: true,
			signupError: '',
		};
	case types.SIGNUP_REQUEST_FAIL:
		return {
			...state,
			loading: false,
			signupError: action.error,
			user: {},
			successSignup: false,
		};
	case types.SIGNUP_REQUEST_SUCCESS:
		return {
			...state,
			loading: false,
			signupError: '',
			user: action.payload.user,
			successSignup: true,
		};
	default:
		return state;
	}
};

export default register;
