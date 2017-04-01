import React from 'react';
import GroupSelect from './groupSelect';
import AnalyticsDisplay from './analyticsDisplay';

export default class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div className="app">
				<GroupSelect />
				<AnalyticsDisplay />
			</div>
		);
	}

}