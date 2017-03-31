import React from 'react';

export default class Header extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div className="header grey-box">
				<p className="header-title">SwearJar</p>
			</div>
		);
	}

}