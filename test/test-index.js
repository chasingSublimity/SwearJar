import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import App from '../js/components/app';

describe('App component', function() {
	it('renders the app component',  function() {

		const renderer = TestUtils.createRenderer();
		renderer.render(<App />);
		const result = renderer.getRenderOutput();
		console.log(result.props.children[0]);
		result.props.className.should.equal('app');
		result.props.children.should.be.an('array');
		result.props.children.should.have.length.of(3);
		result.props.children[0].should.be.an('object');
	});
});