import * as types from '../actions/actionTypes';

export default function validationReducer(state = [], action) {
    switch(action.type) {
        case types.VALIDATE_HTML:
            return [...state, { action }];
        default:
            return state;
    }
}