import { connect } from 'react-redux';
import Signin from '../components/Signin';
import { signin } from '../reducers/login/actions';

const mapStateToProps = state => ({
	signinError: state.login.signinError,
	loading: state.login.loading,
	successSignin: state.login.successSignin,
});

const mapDispatchToProps = dispatch => ({
	signin: (user) => {
		dispatch(signin(user));
	},
});

const SigninContainer = connect(mapStateToProps, mapDispatchToProps)(Signin);
export default SigninContainer;
