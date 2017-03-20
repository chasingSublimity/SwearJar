import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';

export class Form extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		const inputValue = event.target.value;
		this.props.dispatch(actions.changeInput(inputValue));
	}


	render() {
		return(
			<div className="form grey-box">
				<p>THIS IS THE FORM</p>
				<form>
					<input type="text"/>
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