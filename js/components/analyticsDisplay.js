import React from 'react';
import Analytic from './analytic';
import {connect} from 'react-redux';
import * as actions from '../actions/index';

export class AnalyticsDisplay extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		let users = this.props.swearCount.map((userObject, index) =>{
			return <Analytic key={index} order={userObject.order} tally={userObject.tally} userName={userObject.name} />;	
		}
		);
		return(
			<div className="analytics-display grey-box">
				<p>THIS IS THE ANALYTICSDISPLAY</p>
				{users}
			</div>
		);
	}
}

const mapStateToProps = (state, props) => ({
	swearCount: state.swearCount
});

export default connect(mapStateToProps)(AnalyticsDisplay);