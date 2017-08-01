'use strict';

const testcheck = require('testcheck');
const pptyTestUtil = require('jest-object/property-test-util-testcheck.js');

const math = require('./math.js');

describe('[math.sum]', () => {

	describe('[is commutative]', () => {

		function commutativeCheckProperty(checkOptions) {
			const propertyAxiom = (a, b) => {
				return math.sum(a, b) === math.sum(b, a);
			};
			const property = testcheck.property(
				testcheck.gen.number, testcheck.gen.number,
				propertyAxiom);
			const result = 	testcheck.check(property, checkOptions);
			return result;
		}

		pptyTestUtil.seededPropertyTestFactory(commutativeCheckProperty, __filename);

	});

});
