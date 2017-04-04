import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
// import {pendingTasksReducer} from 'react-redux-spinner'; // The redux reducer

import {reducer} from './reducers/index';

// const combinedReducer = combinedReducer({
// 	// used for the react spinner
// 	pendingTasks: pendingTasksReducer,
// 	// used for the rest of the state
// 	reducer
// });

const store = createStore(
	// combinedReducer,
	reducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
	applyMiddleware(thunk));

export default store;