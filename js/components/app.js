import React from 'react';
import Header from './header';
import SettingsModal from './settingsModal';
import GroupSelect from './groupSelect';
import AnalyticsDisplay from './analyticsDisplay';

export default class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div className="app">
				<Header />
				<SettingsModal />
				<GroupSelect />
				<AnalyticsDisplay />
			</div>
		);
	}

}