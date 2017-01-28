import { combineReducers } from 'redux';
import signin from './signin/reducer';

const rootReducer = combineReducers({
	signin,
});

export default rootReducer;
