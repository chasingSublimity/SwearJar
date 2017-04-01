import React from 'react';
import Header from './header';
import SettingsModal from './settingsModal';
import GroupSelect from './groupSelect';
import App from './app';

export default class Main extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div className="main">
				<Header />
				<SettingsModal />
				<App />
			</div>
		);
	}

}