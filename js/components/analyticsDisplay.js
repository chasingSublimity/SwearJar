import React from 'react';
import Analytic from './analytic';
import {connect} from 'react-redux';
import * as actions from '../actions/index';
import Spinner from 'react-spin';

export class AnalyticsDisplay extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		// spinner settings
		let spinnerConfig = {
			lines: 13 // The number of lines to draw
			, length: 28 // The length of each line
			, width: 14 // The line thickness
			, radius: 42 // The radius of the inner circle
			, scale: 1 // Scales overall size of the spinner
			, corners: 1 // Corner roundness (0..1)
			, color: '#f7f7f7' // #rgb or #rrggbb or array of colors
			, opacity: 0.25 // Opacity of the lines
			, rotate: 0 // The rotation offset
			, direction: 1 // 1: clockwise, -1: counterclockwise
			, speed: 1 // Rounds per second
			, trail: 60 // Afterglow percentage
			, fps: 20 // Frames per second when using setTimeout() as a fallback for CSS
			, zIndex: 2e9 // The z-index (defaults to 2000000000)
			, className: 'spinner' // The CSS class to assign to the spinner
			, top: '70%' // Top position relative to parent
			, left: '50%' // Left position relative to parent
			, shadow: false // Whether to render a shadow
			, hwaccel: false // Whether to use hardware acceleration
			, position: 'absolute' // Element positioning
		};

		// map analytics from props
		let users = this.props.swearCount.map((userObject, index) =>{
			return <Analytic key={index} order={userObject.order} tally={userObject.tally} userName={userObject.name} avatar_url={userObject.avatar_url} />;	
		});
		return(
			<div className="container analytics-display">
				<Spinner config={spinnerConfig} stopped={this.props.spinnerStopped} />
				{users}
			</div>
		);
	}
}

const mapStateToProps = (state, props) => ({
	swearCount: state.swearCount,
	spinnerStopped: state.spinnerStopped
});

export default connect(mapStateToProps)(AnalyticsDisplay);