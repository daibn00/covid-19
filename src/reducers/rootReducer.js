import { combineReducers } from 'redux';
import country from './country';
import countries from './countries';
const reducers = combineReducers({country,countries});

export default reducers;
