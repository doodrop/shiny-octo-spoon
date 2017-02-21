import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableHighlight } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import MapView from 'react-native-maps';
import Popover from './Popover';

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
	popoverOptions: {
		flexDirection: 'column',
		justifyContent: 'space-between',
		padding: 20,
	},
});


class Map extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isVisible: false,
			buttonRect: {},
		};
	}
	showPopover() {
		this.refs.button.measure((ox, oy, width, height, px, py) => {
			this.setState({
				isVisible: true,
				buttonRect: { x: px, y: py, width, height },
			});
		});
	}
	closePopover() {
		this.setState({ isVisible: false });
	}
	render() {
		return (
			<View style={styles.container}>
				<MapView style={styles.map}
					showsUserLocation
					followsUserLocation
					loadingEnabled
				/>
				<View style={styles.mapnav}>
					<View style={styles.addIconContainer}>
						<TouchableHighlight ref="button" onPress={() => this.showPopover()}>
							<MaterialIcon name="add" size={30} color="#ffff" />
						</TouchableHighlight>
					</View>
					<View style={styles.pawIconContainer}>
						<FontAwesomeIcon name="paw" size={30} color="#ffff" />
					</View>
				</View>
				<Popover
					 isVisible={this.state.isVisible}
					 fromRect={this.state.buttonRect}
					 onClose={() => this.closePopover()}
				>
					<View style={styles.popoverOptions}>
						<Text>Add Trash Can</Text>
						<Text>Add Water Bowl</Text>
						<Text>Add Dog Park</Text>
					</View>
				 </Popover>
			</View>
		);
	}
}

export default Map;
