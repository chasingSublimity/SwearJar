require('babel-polyfill');
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import Main from './components/main';

import store from './store';




document.addEventListener('DOMContentLoaded', () =>
	ReactDOM.render(
		<Provider store={store}>
			<Main />
		</Provider>,
		document.getElementById('app')
	)
);