import React from 'react';
import Header from './header';
import UserSelect from './userSelect';
import AnalyticsDisplay from './analyticsDisplay';

export default class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div className="app">
				<Header />
				<UserSelect />
				<AnalyticsDisplay />
			</div>
		);
	}

}