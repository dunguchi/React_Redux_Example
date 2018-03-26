import { createStore, applyMiddleware } from 'redux'
import combineReducer from '../reducers/index'
import createSagaMiddleware from 'redux-saga';
// import { fromJS } from 'immutable';
import githubData from '../sagas/search';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    combineReducer,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(githubData);
 
export default store;