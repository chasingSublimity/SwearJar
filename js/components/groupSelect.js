import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';

export class GroupSelect extends React.Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	handleSubmit(event) {
		event.preventDefault();
		// fires the toggleSpinner action with the inverse of spinnerStopped boolean, which should always be false here
		this.props.dispatch(actions.fireSpinner(!(this.props.spinnerStopped)));
		this.props.dispatch(actions.submitGroup(this.props.selectedGroup.name, this.props.selectedGroup.id));
	}

	handleChange(event) {
		// handles state change for input
		const inputValue = event.target.value;
		this.props.dispatch(actions.changeSelectedGroup(inputValue));
	}

	handleClick() {
		console.log('clicked');
		this.props.dispatch(actions.resetApp());
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
					<input className="form-button group-submit-button" type="submit" />
				</form>
				<button onClick={this.handleClick} className="form-button reset-button">Choose another user</button>
			</div>
		);
	}
}

const mapStateToProps = (state, props) => ({
	spinnerStopped: state.spinnerStopped,
	memberBank: state.memberBank,
	userSelectInputValue: state.userSelectInputValue,
	groups: state.groups,
	selectedGroup: state.selectedGroup,
	apiKey: state.apiKey
});

export default connect(mapStateToProps)(GroupSelect);