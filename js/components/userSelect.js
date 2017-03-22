import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';

// USE AUTOCOMPLETE SEARCH INPUT

export class UserSelect extends React.Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleSubmit(event) {
		event.preventDefault();
		console.log(this.props.userSelectInputValue);
	}

	handleChange(event) {
		const inputValue = event.target.value;
		this.props.dispatch(actions.changeUserSubmitInput(inputValue));
	}

	render() {
		let members = this.props.memberBank.map((memberObject, index) =>
			<option key={index}value={memberObject.nickname} />
		);
		return(
			<div className="user-select grey-box">
				<form onSubmit={this.handleSubmit}>
					<label>Choose a user from this list:
					<input list="users" name="selectedUser" onChange={this.handleChange} /></label>
					<datalist id="users">
						{members}
					</datalist>
					<input type="submit" />
				</form>
			</div>
		);
	}
}

const mapStateToProps = (state, props) => ({
	memberBank: state.memberBank,
	userSelectInputValue: state.userSelectInputValue
});

export default connect(mapStateToProps)(UserSelect);