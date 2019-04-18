import { combineReducers } from 'redux';
import validators from './validationReducer';

const rootReducer = combineReducers({
    validators 
});

export default rootReducer;