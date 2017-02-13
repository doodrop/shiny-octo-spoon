import { connect } from 'react-redux';
import Signup from '../components/Signup';
import { signup } from '../reducers/auth/actions';

const mapStateToProps = state => ({
	signupError: state.auth.signupError,
	loading: state.auth.loading,
	successSignup: state.auth.successSignup,
});

const mapDispatchToProps = dispatch => ({
	signup: (user) => {
		dispatch(signup(user));
	},
});

const SignupContainer = connect(mapStateToProps, mapDispatchToProps)(Signup);
export default SignupContainer;
