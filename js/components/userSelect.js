import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';

// USE AUTOCOMPLETE SEARCH INPUT

export class UserSelect extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		let members = this.props.memberBank.map((memberObject, index) =>
			<option key={index}value={memberObject.nickname} />
		);
		console.log(members);
		return(
			<div className="user-select grey-box">
				<label>Choose a user from this list:
				<input list="users" name="selectedUser" /></label>
				<datalist id="users">
					{members}
				</datalist>
			</div>
		);
	}
}

const mapStateToProps = (state, props) => ({
	memberBank: state.memberBank,
});

export default connect(mapStateToProps)(UserSelect);