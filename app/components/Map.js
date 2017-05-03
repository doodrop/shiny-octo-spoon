import React, { Component } from 'react';
import {
	View,
	StyleSheet,
	Text,
	TouchableOpacity,
	Image,
	Animated,
} from 'react-native';
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
	popover: {
		alignSelf: 'flex-end',
		alignItems: 'stretch',
		marginRight: 20,
		marginBottom: 5,

	},
	popoverOptions: {
		backgroundColor: '#FFFFFF',
		borderRadius: 20,
		flexDirection: 'column',
		justifyContent: 'space-between',
		padding: 20,
	},
	popoverOption: {
		flexDirection: 'row',
		alignItems: 'center',
		height: 25,
	},
	popoverOptionIcon: {
		width: 20,
	},
	popoverOptionText: {
		justifyContent: 'center',
		alignItems: 'flex-start',
		alignSelf: 'stretch',
		paddingLeft: 10,
	},
	popoverTail: {
		height: 10,
		flexDirection: 'row',
	},
	popoverTailLeft: {
		flex: 1,
		borderRightColor: '#FFFFFF',
		borderRightWidth: 10,
		borderBottomColor: 'transparent',
		borderBottomWidth: 10,
	},
	popoverTailRight: {
		width: 30,
		borderLeftColor: '#FFFFFF',
		borderLeftWidth: 10,
		borderBottomColor: 'transparent',
		borderBottomWidth: 10,
	},
	locationOverlay: {
		...StyleSheet.absoluteFillObject,
		alignItems: 'center',
		justifyContent: 'center',
		paddingBottom: 52,
	},
});


class Map extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isPopoverVisible: false,
			popoverWidth: new Animated.Value(0),
			popoverHeight: new Animated.Value(0),
			popoverMaxWidth: 200,
		};

		this._onContainerLayout = this._onContainerLayout.bind(this);
		this.togglePopover = this.togglePopover.bind(this);
	}
	componentDidMount() {
		navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
			console.log('Coords', { latitude, longitude });
			this.refs.map.animateToRegion({
				latitude,
				longitude,
				latitudeDelta: 0.005,
				longitudeDelta: 0.005,
			});
		});
	}
	togglePopover() {
		if (this.state.isPopoverVisible) {
			Animated.parallel([
				Animated.timing(this.state.popoverHeight, { duration: 200, toValue: 30 }),
				Animated.timing(this.state.popoverWidth, { duration: 200, toValue: 100 }),
			]).start(() => {
				this.setState({
					isPopoverVisible: false,
				});
				this.state.popoverHeight.setValue(0);
				this.state.popoverWidth.setValue(0);
			});
		} else {
			this.setState({
				isPopoverVisible: true,
			});
			Animated.parallel([
				Animated.spring(this.state.popoverHeight, { duration: 250, toValue: 125 }),
				Animated.spring(this.state.popoverWidth, { duration: 250, toValue: this.state.popoverMaxWidth }),
			]).start();
		}
	}
	_onContainerLayout({ nativeEvent: { layout: { width } } }) {
		const popoverMaxWidth = width * 0.45;

		this.setState({
			popoverMaxWidth,
		});
	}
	render() {
		return (
			<View style={styles.container}
				onLayout={this._onContainerLayout}
			>
				<MapView style={styles.map}
					ref="map"
					showsUserLocation
					followsUserLocation
					loadingEnabled
				/>
				{
					this.state.isPopoverVisible ?
					<Animated.View style={[styles.popover, { width: this.state.popoverWidth, height: this.state.popoverHeight }]}>
						<View style={styles.popoverOptions}>
							<TouchableOpacity>
								<View style={styles.popoverOption}>
									<Image
										style={styles.popoverOptionIcon}
										source={require('../static/images/trash-can-only.png')}
										resizeMode="contain"
									/>
									<View style={styles.popoverOptionText}>
										<Text numberOfLines={1}>Add Trash Can</Text>
									</View>
								</View>
							</TouchableOpacity>
							<TouchableOpacity>
								<View style={styles.popoverOption}>
									<Image
										style={styles.popoverOptionIcon}
										source={require('../static/images/water-bowl-icon.png')}
										resizeMode="contain"
									/>
									<View style={styles.popoverOptionText}>
										<Text numberOfLines={1}>Add Water Bowl</Text>
									</View>
								</View>
							</TouchableOpacity>
							<TouchableOpacity>
								<View style={styles.popoverOption}>
									<Image
										style={styles.popoverOptionIcon}
										source={require('../static/images/dog-park-icon.png')}
										resizeMode="contain"
									/>
									<View style={styles.popoverOptionText}>
										<Text numberOfLines={1}>Add Dog Park</Text>
									</View>
								</View>
							</TouchableOpacity>
						</View>
						<View style={styles.popoverTail}>
							<View style={styles.popoverTailLeft} />
							<View style={styles.popoverTailRight} />
						</View>
					</Animated.View> : null
				}
				<View style={styles.mapnav}>
					<TouchableOpacity onPress={this.togglePopover}
						activeOpacity={0.6}
					>
						<View style={styles.addIconContainer}>
							<MaterialIcon name="add" size={30} color="#ffff" />
						</View>
					</TouchableOpacity>
					<View style={styles.pawIconContainer}>
						<FontAwesomeIcon name="paw" size={30} color="#ffff" />
					</View>
				</View>{
								// <View style={styles.locationOverlay}>
								// 	<Image source={require('../static/images/dog-park-map-marker.png')} />
								// </View>
							}
			</View>
		);
	}
}

export default Map;
