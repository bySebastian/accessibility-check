import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function validationReducer(state = initialState, action) {
    switch(action.type) {
        case types.VALIDATE_HTML:
            return [...state, action];
        case types.VALIDATE_LINKS:
            return [...state, action];
        case types.VALIDATE_CSS:
            return [...state, action];
        default:
            return state;
    }
};