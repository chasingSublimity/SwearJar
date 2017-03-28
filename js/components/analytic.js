import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';

export class Analytic extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div className="analytic grey-box">
				<p>{this.props.order} - <span>{this.props.userName}</span> - {this.props.tally}</p>
			</div>
		);
	}
}

const mapStateToProps = (state, props) => ({
	memberBank: state.memberBank
});

export default connect(mapStateToProps)(Analytic);