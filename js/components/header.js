import React from 'react';

export default class Header extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div className="header">
				<h2 className="header-title">SwearJar</h2>
			</div>
		);
	}

}