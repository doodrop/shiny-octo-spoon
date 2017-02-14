/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { AppRegistry } from 'react-native';
import { Actions, Scene, Router } from 'react-native-router-flux';
import SignupContainer from './app/containers/signup-container';
import SigninContainer from './app/containers/signin-container';
import Map from './app/components/Map';
import reducers from './app/reducers/index';

const loggerMiddleware = createLogger();
const store = createStore(reducers, applyMiddleware(
  thunkMiddleware,
  loggerMiddleware
));

const scenes = Actions.create(
  <Scene key="root">
	<Scene key="signin" component={SigninContainer} hideNavBar initial />
    <Scene key="signup" component={SignupContainer} hideNavBar />
	<Scene key="map" component={Map} hideNavBar />
  </Scene>
);


const dooDrop = () => (
    <Provider store={store}>
      <Router scenes={scenes} />
    </Provider>
);

AppRegistry.registerComponent('dooDrop', () => dooDrop);
