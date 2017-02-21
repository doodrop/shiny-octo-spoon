import React from 'react';
import { View, StyleSheet, TouchableHighlight } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import MapView from 'react-native-maps';

const styles = StyleSheet.create({
	container: {
		...StyleSheet.absoluteFillObject,
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	map: {
		...StyleSheet.absoluteFillObject,
	},
	mapnav: {
		alignSelf: 'flex-end',
		paddingRight: 20,
		paddingBottom: 20,
	},
	addIconContainer: {
		borderRadius: 30,
		width: 60,
		height: 60,
		justifyContent: 'center',
		alignItems: 'center',
		shadowRadius: 10,
		shadowOpacity: 0.5,
		backgroundColor: 'blue',
		marginBottom: 10,
	},
	pawIconContainer: {
		borderRadius: 30,
		width: 60,
		height: 60,
		justifyContent: 'center',
		alignItems: 'center',
		shadowRadius: 10,
		shadowOpacity: 0.5,
		backgroundColor: 'orange',
	},
});


const Map = () => (
	<View style={styles.container}>
		<MapView style={styles.map}
			showsUserLocation
			followsUserLocation
			loadingEnabled
		/>
		<View style={styles.mapnav}>
			<View style={styles.addIconContainer}>
				<MaterialIcon name="add" size={30} color="#ffff" />
			</View>
			<View style={styles.pawIconContainer}>
				<FontAwesomeIcon name="paw" size={30} color="#ffff" />
			</View>
			{/* <TouchableHighlight
				underlayColor="transparent"
				onPress={() => true}
			>
				<FontAwesomeIcon name="paw" size={30} color="#900" />
			</TouchableHighlight> */}
		</View>
	</View>
);

export default Map;
