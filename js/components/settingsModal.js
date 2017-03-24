import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';

export class SettingsModal extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		// handles state change for input
		const inputValue = event.target.value;
		this.props.dispatch(actions.changeApiKeyInput(inputValue));
	}

	handleSubmit(event) {
		event.preventDefault();
		// stores apiKey in state
		const apiKey = this.props.apiKeyInputValue;
		// this action updates the groups in the store
		this.props.dispatch(actions.submitApiSettingsForm(apiKey));
	}

	render() {
		return(
			<div className="settings-modal grey-box">
				<p>THIS IS THE SETTINGS MODAL</p>
				<form onSubmit={this.handleSubmit}>
					<input required id="api-key" placeholder="API Key" onChange={this.handleChange} type="text"/><br/>
					<input type="submit"/>
				</form>
			</div>
		);
	}
}

const mapStateToProps = (state, props) => ({
	apiKeyInputValue: state.apiKeyInputValue,
	groupIdInputValue: state.groupIdInputValue
});

export default connect(mapStateToProps)(SettingsModal);