require('babel-polyfill');
import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Provider} from 'react-redux';
import Main from './components/main';

import store from './store';




document.addEventListener('DOMContentLoaded', () =>
	ReactDOM.render(
		<MuiThemeProvider>
			<Provider store={store}>
				<Main />
			</Provider>
		</MuiThemeProvider>,
		document.getElementById('app')
	)
);