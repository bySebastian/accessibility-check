import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/index';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

export default function configureStore(initialState) {
    const composeEnhancers = 
        window.__REDUX_DEVTOOLS_EXTENSIONS_COMPOSE__ || compose; // add support to Redux dev tools

    return createStore(
        rootReducer, 
        initialState, 
        composeEnhancers(applyMiddleware(reduxImmutableStateInvariant()))
    );
}