import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import MapView from 'react-native-maps';

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const styles = StyleSheet.create({
	container: {
		...StyleSheet.absoluteFillObject,
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	map: {
		...StyleSheet.absoluteFillObject,
	},
});

const Map = () => (
	<View style={styles.container}>
		<MapView style={styles.map}
			showsUserLocation={true}
			followsUserLocation={true}
			loadingEnabled={true}
		/>
	</View>
);

export default Map;
