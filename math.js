'use strict';

// This is the system under test

module.exports = {
	sum,
};

function sum (a, b) {

	//FIXME 1: handle non-numbers and NaN
	// if (typeof a !== 'number' || typeof b !== 'number' || isNaN(a) || isNaN(b)) {
	// 	return null;
	// }

	return a + b;
}
