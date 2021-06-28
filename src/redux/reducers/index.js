import { combineReducers } from 'redux';
import searchLib from './searchLib';
import profileBooks from './profileBooks';

const rootReducer = combineReducers({ searchLib, profileBooks });
export default rootReducer;
