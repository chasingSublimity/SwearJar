require('babel-polyfill');
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './components/app';

import store from './store';
import {reducer} from './reducers/index';
import * as actions from './actions/index';




document.addEventListener('DOMContentLoaded', () =>
	ReactDOM.render(
		<Provider store={store}>
			<App />
		</Provider>,
		document.getElementById('app')
	)
);