import * as types from './constants';

const initialState = {
	user: {},
	loading: false,
	successSignin: false,
	signinError: '',
};

const login = (state = initialState, action) => {
	switch (action.type) {
	case types.SIGNIN_REQUEST:
		return {
			...state,
			loading: true,
			signinError: '',
		};
	case types.SIGNIN_REQUEST_FAIL:
		return {
			...state,
			loading: false,
			signinError: action.error,
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
		};
	default:
		return state;
	}
};

export default login;
