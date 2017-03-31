import React from 'react';
import {connect} from 'react-redux';
import Fade from 'react-fade';
import * as actions from '../actions/index';

export class Analytic extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const order = {order: this.props.order};
		return(
			<Fade style={order}>
				<div className="analytic fade grey-box">
					<p>{this.props.order} - <span>{this.props.userName}</span> - {this.props.tally}</p>
				</div>
			</Fade>
		);
	}
}

const mapStateToProps = (state, props) => ({
	memberBank: state.memberBank
});

export default connect(mapStateToProps)(Analytic);