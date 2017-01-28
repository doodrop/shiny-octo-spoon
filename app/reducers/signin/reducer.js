import * as types from './constants';

const initialState = {
	signinUser: {},
	loading: false,
	successLogin: false,
	apiError: '',
};

const signin = (state = initialState, action) => {
	switch (action.type) {
	case types.SIGNIN_REQUEST:
		return {
			...state,
			loading: true,
			apiError: '',
		};
	case types.SIGNIN_REQUEST_FAIL:
		return {
			...state,
			loading: false,
			apiError: action.error,
			signinUser: {},
			successLogin: false,
		};
	case types.SIGNIN_REQUEST_SUCCESS:
		return {
			...state,
			loading: false,
			signinUser: action.payload.user,
			successLogin: true,
			apiError: '',
		};
	default:
		return state;
	}
};

export default signin;
