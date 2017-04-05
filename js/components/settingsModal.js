import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';
import Modal from 'react-modal';

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
		this.props.dispatch(actions.updateApiKey(apiKey));
	}

	render() {
		return(
			<Modal className="settings-modal grey-box" isOpen={this.props.isModalOpen} contentLabel="Modal">
				<div>
					<p>THIS IS THE SETTINGS MODAL</p>
					<form className="settings-form" onSubmit={this.handleSubmit}>
						<input className="settings-modal-input" required id="api-key" placeholder="API Key" onChange={this.handleChange} type="text"/><br/>
						<input className="settings-modal-button"type="submit" />
					</form>
				</div>
			</Modal>
		);
	}
}

const mapStateToProps = (state, props) => ({
	apiKeyInputValue: state.apiKeyInputValue,
	groupIdInputValue: state.groupIdInputValue,
	isModalOpen: state.isModalOpen
});

export default connect(mapStateToProps)(SettingsModal);