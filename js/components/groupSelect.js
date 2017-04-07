import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';

export class GroupSelect extends React.Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleSubmit(event) {
		event.preventDefault();
		// finds group (in state) that matches the name submitted by the input
		const selectedGroup = this.props.groups.find(group => group.name === this.props.groupSelectInputValue);
		// fires the toggleSpinner action with the inverse of spinnerStopped boolean, which should always be false here
		this.props.dispatch(actions.fireSpinner(!(this.props.spinnerStopped)));
		this.props.dispatch(actions.updateGroup(selectedGroup.name, selectedGroup.id));
	}

	handleChange(event) {
		// handles state change for input
		const inputValue = event.target.value;
		this.props.dispatch(actions.changeGroupSubmitInput(inputValue));
	}

	render() {
		let groups = this.props.groups.map((groupObject, index) =>
			<option key={index} value={groupObject.name}>{groupObject.name}</option>
		);
		return(
			<div className="group-select">
				<form className="group-choice-form" onSubmit={this.handleSubmit}>
					<label>Choose a group from this list:</label>
					<br/>
					<select required onChange={this.handleChange} className="group-select-input" id="groups">
						{groups}
					</select>
					<input className="group-submit-button" type="submit" />
				</form>
			</div>
		);
	}
}

const mapStateToProps = (state, props) => ({
	spinnerStopped: state.spinnerStopped,
	memberBank: state.memberBank,
	userSelectInputValue: state.userSelectInputValue,
	groups: state.groups,
	groupSelectInputValue: state.groupSelectInputValue,
	apiKey: state.apiKey
});

export default connect(mapStateToProps)(GroupSelect);