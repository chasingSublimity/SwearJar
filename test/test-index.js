import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import Main from '../js/components/main';

describe('App component', function() {
	it('renders the app component',  function() {

		const renderer = TestUtils.createRenderer();
		renderer.render(<Main />);
		const result = renderer.getRenderOutput();
		result.props.className.should.equal('main');
		result.props.children.should.be.an('array');
		result.props.children.should.have.length.of(3);
		result.props.children[0].should.be.an('object');
	});
});