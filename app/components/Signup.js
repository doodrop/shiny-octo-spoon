import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import AwesomeButton from 'react-native-awesome-button';

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
	welcomeText: {
		color: '#ffffff',
		fontSize: 25,
	},
	signupOptions: {
		flex: 1,
		flexDirection: 'row',
		margin: 25,
	},
	signupButtonLabel: {
		fontSize: 18,
		color: '#ffffff',
	},
	sigupButtonBackground: {
		height: 50,
		borderRadius: 2,
		borderColor: '#ffffff',
		borderWidth: 2,
	},
	bottomOption: {
		flex: 1,
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
		<View>
			<Text style={styles.welcomeText}>Welcome to DooDrop</Text>
		</View>
        <View style={styles.signupOptions}>
            <AwesomeButton
                labelStyle={styles.signupButtonLabel}
                backgroundStyle={styles.sigupButtonBackground}
                states={{
                    default: {
                      text: 'Sign Up with Email',
                      onPress: () => true,
                      backgroundColor: 'transparent' }
                    }}
            />
        </View>
        <View style={styles.bottomOption}>
            <Text style={styles.alreadyAccountText}>Already have an account? </Text>
            <Text style={styles.bottomLoginText}>Login</Text>
        </View>
	</View>
);

export default Signup;
