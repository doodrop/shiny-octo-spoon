import { connect } from 'react-redux';
import Signin from '../components/Signin';
import { signin } from '../reducers/signin/actions';

const mapStateToProps = (state) => ({
	...state.signin,
});

const mapDispatchToProps = (dispatch) => ({
	signin: (user) => {
		dispatch(signin(user));
	},
});

const SigninContainer = connect(mapStateToProps, mapDispatchToProps)(Signin);
export default SigninContainer;
