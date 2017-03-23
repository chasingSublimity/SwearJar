import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';

export class AnalyticsDisplay extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div className="analytics-display grey-box">
				<p>THIS IS THE ANALYTICSDISPLAY</p>
			</div>
		);
	}
}

const mapStateToProps = (state, props) => ({
	memberBank: state.memberBank
});

export default connect(mapStateToProps)(AnalyticsDisplay);