import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';

export class Form extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	// this function is passed to both inputs. The id of the element dictates which action is dispatched.
	handleChange(event) {
		const inputValue = event.target.value;
		if (event.target.id === 'api-key') {
			this.props.dispatch(actions.changeApiKeyInput(inputValue));
		} else {
			this.props.dispatch(actions.changeGroupIdInput(inputValue));
		}
	}

	handleSubmit(event) {
		event.preventDefault();
		const submittedValue = this.props.searchInputValue;


	}

	render() {
		return(
			<div className="form grey-box">
				<p>THIS IS THE FORM</p>
				<form onSubmit={this.handleSubmit}>
					<input required id="api-key" placeholder="API Key" onChange={this.handleChange} type="text"/><br/>
					<input required id="group-id" placeholder="Group Id" onChange={this.handleChange} type="text"/><br/>
					<input type="submit"/>
				</form>
			</div>
		);
	}
}

const mapStateToProps = (state, props) => ({
	guessInputValue: state.searchInputValue,
});

export default connect(mapStateToProps)(Form);