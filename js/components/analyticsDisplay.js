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
			return <Analytic key={index} order={userObject.order} tally={userObject.tally} userName={userObject.name} avatar_url={userObject.avatar_url} />;	
		});
		return(
				<div className="container analytics-display">
					{users}
				</div>
		);
	}
}

const mapStateToProps = (state, props) => ({
	swearCount: state.swearCount,
	analyticsDisplayClass: state.analyticsDisplayClass
});

export default connect(mapStateToProps)(AnalyticsDisplay);