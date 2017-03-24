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
		const selectedGroup = this.props.groups.find(group => group.name === this.props.groupSelectInputValue);
		console.log(selectedGroup);
		this.props.dispatch(actions.selectGroup(selectedGroup.name, selectedGroup.id));
	}

	handleChange(event) {
		const inputValue = event.target.value;
		this.props.dispatch(actions.changeGroupSubmitInput(inputValue));
	}

	render() {
		let groups = this.props.groups.map((groupObject, index) =>
			<option key={index} value={groupObject.name} />
		);
		return(
			<div className="user-select grey-box">
				<form onSubmit={this.handleSubmit}>
					<label>Choose a group from this list:
					<input list="groups" name="selectedGroup" onChange={this.handleChange} /></label>
					<datalist id="groups">
						{groups}
					</datalist>
					<input type="submit" />
				</form>
			</div>
		);
	}
}

const mapStateToProps = (state, props) => ({
	memberBank: state.memberBank,
	userSelectInputValue: state.userSelectInputValue,
	groups: state.groups,
	groupSelectInputValue: state.groupSelectInputValue
});

export default connect(mapStateToProps)(GroupSelect);