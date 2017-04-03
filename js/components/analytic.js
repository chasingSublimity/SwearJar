import React from 'react';
import {connect} from 'react-redux';
import Fade from 'react-fade';
import ListItem from 'material-ui/List';
import * as actions from '../actions/index';

export class Analytic extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const order = {order: this.props.order};
		const listItemText = this.props.username + ' - ' + this.props.tally;
		return(
			<Fade style={order}>
				<ListItem className="analytic" primaryText={listItemText}>
						<p>{this.props.order} - <span>{this.props.userName}</span> - {this.props.tally}</p>
				</ListItem>
			</Fade>
		);
	}
}

const mapStateToProps = (state, props) => ({
	memberBank: state.memberBank
});

export default connect(mapStateToProps)(Analytic);