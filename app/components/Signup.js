import React, { Component, PropTypes } from 'react';
import { View, Text, StyleSheet, Image, TextInput, Alert, ActivityIndicator } from 'react-native';
import AwesomeButton from 'react-native-awesome-button';
import { Actions } from 'react-native-router-flux';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: 'rgb(27,181,128)',
	},
	logo: {
		flex: 3,
		marginTop: 60,
	},
	logoImage: {
		height: 200,
		width: 200,
	},
	signupForm: {
		flex: 4,
	},
	welcomeTextContainer: {
		marginBottom: 10,
	},
	welcomeText: {
		color: '#ffffff',
		fontSize: 25,
		alignSelf: 'center',
	},
	textboxContainer: {
		height: 40,
		justifyContent: 'flex-start',
		marginTop: 10,
		backgroundColor: '#ffffff',
		borderRadius: 5,
	},
	textbox: {
		fontSize: 15,
		borderColor: 'rgb(255,255,255)',
		borderWidth: 1,
		height: 40,
		paddingLeft: 10,
		paddingTop: 5,
		borderRadius: 5,
	},
	signin: {
		flex: 1,
		marginTop: 15,
		alignItems: 'center',
	},
	signupButtonBackground: {
		height: 50,
		width: 280,
		borderRadius: 5,
	},
	signupButtonLabel: {
		color: '#ffff',
		fontSize: 20,
	},
	bottomOption: {
		bottom: 25,
		flexDirection: 'row',
	},
	alreadyAccountText: {
		color: '#ffffff',
	},
	bottomLoginText: {
		color: '#ffffff',
		fontWeight: 'bold',
	},
});


class Signup extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			password: '',
		};
	}
	componentWillReceiveProps(nextProps) {
		if (nextProps.successSignin === true) {
			Actions.map();
		}
		if (nextProps.successSignin === false && nextProps.signinError !== '') {
			this.showAlert(nextProps.signinError);
		}
	}
	validateEmail = (email) => {
		const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(email);
	}
	signupUser = () => {
		const { signup } = this.props;
		const user = {
			name: this.state.name,
			email: this.state.email,
			password: this.state.password,
		};
		if (!this.validateEmail(user.email) && !user.password.trim()) {
			this.showAlert('Invalid email and password');
			return;
		}
		if (!this.validateEmail(user.email)) {
			this.showAlert('Invalid email');
			return;
		}
		if (!user.password.trim()) {
			this.showAlert('Invalid password');
			return;
		}
		if (!user.name.trim()) {
			this.showAlert('Invalid Name');
			return;
		}
		signup(user);
	}
	showAlert(message) {
		Alert.alert('Error', message, [{
			text: 'Dismiss', onPress: () => true,
		}]);
	}
	render() {
		const { loading } = this.props;
		return (
			<View style={styles.container}>
				<View style={styles.logo}>
					<Image style={styles.logoImage} source={require('../static/images/logo.png')} resizeMode={'contain'} />
				</View>
				<View style={styles.signupForm}>
					<View style={styles.welcomeTextContainer}>
						<Text style={styles.welcomeText}>Welcome to DooDrop</Text>
					</View>
					<View style={styles.textboxContainer}>
						<TextInput
							ref="email"
							value={this.state.email}
							style={styles.textbox}
							returnKeyType="next"
							underlineColorAndroid="transparent"
							autoFocus placeholder="Email"
							autoCorrect={false}
							onSubmitEditing={() => this.refs.password.focus()}
							onChangeText={(email) => this.setState({ email })}
							placeholderTextColor="rgb(155,155,155)"
							keyboardType={'email-address'}
						/>
					</View>
					<View style={styles.textboxContainer}>
						<TextInput
							ref="password"
							value={this.state.password}
							style={styles.textbox}
							placeholder="Password"
							returnKeyType="done"
							onChangeText={(password) => this.setState({ password })}
							placeholderTextColor="rgb(155,155,155)"
							underlineColorAndroid="transparent"
							secureTextEntry
						/>
					</View>
					<View style={styles.textboxContainer}>
						<TextInput
							ref="name"
							value={this.state.name}
							style={styles.textbox}
							returnKeyType="next"
							underlineColorAndroid="transparent"
							autoFocus placeholder="Name"
							autoCorrect={false}
							onSubmitEditing={() => this.refs.email.focus()}
							onChangeText={(name) => this.setState({ name })}
							placeholderTextColor="rgb(155,155,155)"
						/>
					</View>
					<View style={styles.signin}>
						<AwesomeButton
							labelStyle={styles.signupButtonLabel}
							backgroundStyle={styles.signupButtonBackground}
							states={{
								'default': {
									text: 'Ready to Wag',
									onPress: () => this.signupUser(),
									backgroundColor: '#fdc200',
								},
							}}
						/>
					</View>
				</View>
				{ loading === true ?
					<ActivityIndicator animating style={[styles.centering, { height: 100 }]} size="large" color={"#ffffff"} /> : null }
		        <View style={styles.bottomOption}>
		            <Text style={styles.alreadyAccountText}>Already have an account? </Text>
		            <Text style={styles.bottomLoginText} onPress={() => Actions.signin()}>Login</Text>
		        </View>
			</View>
		);
	}
}

Signup.propTypes = {
	signup: PropTypes.func.isRequired,
	loading: PropTypes.bool.isRequired,
	signupError: PropTypes.string.isRequired,
};

export default Signup;
