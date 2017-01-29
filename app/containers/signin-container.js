import { connect } from 'react-redux';
import Signin from '../components/Signin';
import { signin } from '../reducers/auth/actions';

const mapStateToProps = state => ({
	signinError: state.auth.signinError,
	loading: state.auth.loading,
	successSignin: state.auth.successSignin,
});

const mapDispatchToProps = dispatch => ({
	signin: (user) => {
		dispatch(signin(user));
	},
});

const SigninContainer = connect(mapStateToProps, mapDispatchToProps)(Signin);
export default SigninContainer;
