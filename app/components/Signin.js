import React, { Component } from 'react';
import { View, Text, TextInput, Image, StyleSheet } from 'react-native';
import AwesomeButton from 'react-native-awesome-button';
import { Actions } from 'react-native-router-flux';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: 'rgb(27,181,128)',
	},
	logo: {
		flex: 1,
		marginTop: 60,
	},
	logoImage: {
		width: 150,
		height: 150,
	},
	loginForm: {
		flex: 2,
	},
	welcomeTextContainer: {
		marginBottom: 10,
	},
	welcomeText: {
		color: '#ffffff',
		fontSize: 20,
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
	siginButtonBackground: {
		height: 50,
		width: 280,
		borderRadius: 5,
	},
	siginButtonLabel: {
		color: '#ffff',
		fontSize: 20,
	},
	forgotPasswordContainer: {
		flex: 3,
	},
	forgotPasswordText: {
		fontSize: 15,
		color: '#ffffff',
	},
	bottomContainer: {
		flexDirection: 'row',
		bottom: 25,
	},
	bottomText: {
		color: '#ffffff',
	},
	signupText: {
		color: '#ffffff',
		fontWeight: 'bold',
	},
});

class Signin extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
		};
	}
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.logo}>
					<Image style={styles.logoImage} source={require('../static/images/logo.png')} resizeMode={'contain'} />
				</View>
				<View style={styles.loginForm}>
					<View style={styles.welcomeTextContainer}>
						<Text style={styles.welcomeText}>Welcome to DooDrop</Text>
					</View>
					<View style={styles.textboxContainer}>
						<TextInput
							ref="email"
							style={styles.textbox}
							value={this.state.email}
							returnKeyType="next"
							underlineColorAndroid="transparent"
							autoFocus placeholder="Email"
							autoCorrect={false}
							placeholderTextColor="rgb(155,155,155)"
							onSubmitEditing={() => this.refs.password.focus()}
							onChangeText={(email) => this.setState({ email })}
							keyboardType={'email-address'}
						/>
					</View>
					<View style={styles.textboxContainer}>
						<TextInput
							ref="password"
							style={styles.textbox}
							value={this.state.password}
							onChangeText={(password) => this.setState({ password })}
							placeholder="Password"
							returnKeyType="done"
							placeholderTextColor="rgb(155,155,155)"
							underlineColorAndroid="transparent"
							secureTextEntry
						/>
					</View>
					<View style={styles.signin}>
						<AwesomeButton
							labelStyle={styles.siginButtonLabel}
					 		backgroundStyle={styles.siginButtonBackground}
							states={{
								'default': {
									text: 'Sign In',
									onPress: () => true,
									backgroundColor: '#fdc200',
								},
							}}
						/>
						<View style={styles.forgotPasswordContainer}>
							<Text style={styles.forgotPasswordText}>Forgot your email or password?</Text>
						</View>
					</View>
				</View>
				<View style={styles.bottomContainer}>
					<Text style={styles.bottomText}>Don't have an account? </Text>
					<Text style={styles.signupText} onPress={() => Actions.signup()}>Sign Up</Text>
				</View>
			</View>
		);
	}
}

export default Signin;
