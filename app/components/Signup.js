import React from 'react';
import { View, Text, StyleSheet, Image, TextInput } from 'react-native';
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
		borderRadius: 2,
		borderColor: '#ffffff',
		borderWidth: 2,
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


const Signup = () => (
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
					style={styles.textbox}
					returnKeyType="next"
					underlineColorAndroid="transparent"
					autoFocus placeholder="Name"
					autoCorrect={false}
					placeholderTextColor="rgb(155,155,155)"
				/>
			</View>
			<View style={styles.textboxContainer}>
				<TextInput
					style={styles.textbox}
					returnKeyType="next"
					underlineColorAndroid="transparent"
					autoFocus placeholder="Email"
					autoCorrect={false}
					placeholderTextColor="rgb(155,155,155)"
					keyboardType={'email-address'}
				/>
			</View>
			<View style={styles.textboxContainer}>
				<TextInput
					style={styles.textbox}
					placeholder="Password"
					returnKeyType="done"
					placeholderTextColor="rgb(155,155,155)"
					underlineColorAndroid="transparent"
					secureTextEntry
				/>
			</View>
			<View style={styles.signin}>
				<AwesomeButton
					labelStyle={styles.signupButtonLabel}
					backgroundStyle={styles.signupButtonBackground}
					states={{
						'default': {
							text: 'Sign Up with Email',
							onPress: () => true,
							backgroundColor: 'transparent',
						},
					}}
				/>
			</View>
		</View>
        <View style={styles.bottomOption}>
            <Text style={styles.alreadyAccountText}>Already have an account? </Text>
            <Text style={styles.bottomLoginText} onPress={() => Actions.signin()}>Login</Text>
        </View>
	</View>
);

export default Signup;
