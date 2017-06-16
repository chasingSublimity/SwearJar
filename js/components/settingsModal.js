import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';
import Fade from 'react-fade';
import Modal from 'react-modal';

export class SettingsModal extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	returnDemoApiKey() {
		return '1z4JKT9cvlJ2WKxQPxL7yZFODTMqd70BOEFfi0RZ';
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

	handleClick(event) {
		event.preventDefault();
		// dispatches action with demo apiKey
		this.props.dispatch(actions.updateApiKey(this.returnDemoApiKey()));
	}


	render() {
		return(
			<Modal className="settings-modal" isOpen={this.props.isModalOpen} contentLabel="Modal">
				<div>
					<h3>Hey there!</h3>
					<p className="modal-text">Welcome to SwearJar, the React SPA that allows GroupMe users to see which 
					member has the highest affinity for four-letter words</p>
					<p className="modal-text">
						As a relatively new parent, I am simultaneously amazed and horrified by 
						the rate at which my toddler is learning. I initially built this app so 
						that I could get a simple gauge at the amount of profanity I use on a regular basis. 
						The app allows the user to see the members of their different chat groups, 
						ranked by profanity usage.
					</p>
					<button className="demo-button" onClick={this.handleClick}>Click Here To See A Demo!</button>
					<p className="modal-text">
						Interesting in gauging your own usage? 
						Want to objectively secure the bragging rights? 
						Enter your API key below and view your results!
					</p>
					<form className="settings-form" onSubmit={this.handleSubmit}>
						<input className="settings-modal-input" required id="api-key" placeholder="API Key" onChange={this.handleChange} type="text"/><br/>
						<input className="settings-modal-button" type="submit" />
					</form>	
					<p className="modal-text">Don't have an API key? <a href='https://dev.groupme.com/'>Click here to get one!</a></p>
					<div className="modal-footer">
						<p>
							Built by Blake Sager
							<a href="https://github.com/chasingSublimity/SwearJar">
								<i className="fa fa-github fa-lg gh-icon" aria-hidden="true"></i>
							</a>
						</p>
					</div>
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