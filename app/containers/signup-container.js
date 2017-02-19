import { connect } from 'react-redux';
import Signup from '../components/Signup';
import { signup } from '../reducers/register/actions';

const mapStateToProps = state => ({
	signupError: state.register.signupError,
	loading: state.register.loading,
	successSignup: state.register.successSignup,
});

const mapDispatchToProps = dispatch => ({
	signup: (user) => {
		dispatch(signup(user));
	},
});

const SignupContainer = connect(mapStateToProps, mapDispatchToProps)(Signup);
export default SignupContainer;
