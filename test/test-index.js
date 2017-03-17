import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import App from '../js/components/app';

describe('App component', function() {
	it('renders the app',  function() {

		const renderer = TestUtils.createRenderer();
		renderer.render(<App />);
		const result = renderer.getRenderOutput();
		console.log(result);
		result.props.className.should.equal('app');
		result.props.children.should.equal('Hello Big World!');
	});
});