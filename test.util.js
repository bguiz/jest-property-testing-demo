'use strict';

const path = require('path');

module.exports = {
	getJestSpecSeedsInfo,
};

function getJestSpecSeedsInfo(spec, absoluteFileName) {
	const fullName = spec.result.fullName;
	const snapShotFileName = path.resolve(
		path.dirname(absoluteFileName), '__snapshots__', `${path.basename(absoluteFileName)}.snap`);
	const snapshotSeedsName = `${fullName} seeds`;
	let snapshotSeeds;
	try {
		//NOTE jest always appends a number, even when snaphsot name is explicitly specified
		snapshotSeeds = JSON.parse(require(snapShotFileName)[`${snapshotSeedsName} 1`]);
	} catch (ex) {
		snapshotSeeds = [];
	};

	return {
		spec,
		fullName,
		snapShotFileName,
		snapshotSeedsName,
		snapshotSeeds,
	};
}
