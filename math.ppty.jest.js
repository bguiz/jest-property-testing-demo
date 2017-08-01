'use strict';

const testcheck = require('testcheck');

const testUtil = require('./test.util.js');

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

		const spec =
		it('with new', () => {
			// Always run with a new seed
			const specSeedsInfo = testUtil.getJestSpecSeedsInfo(spec, __filename);
			const result = commutativeCheckProperty({
			});
			if (!result.result) {
				// This has failed, and we will save the seed so that we an repeat them later
				const newSeed = {
					seed: result.seed,
				}
				specSeedsInfo.snapshotSeeds.push(newSeed);
				// Add a prior seeds snapshot
				expect(result).toMatchSnapshot(`${descSpec.result.fullName} ${result.seed}`)
			}
			// This has the effect of appending the failure seed
			// If there is a new failure, the snapshot will not match, and thus fail the test
			expect(specSeedsInfo.snapshotSeeds).toMatchSnapshot(specSeedsInfo.snapshotSeedsName);
		});

		const descSpec =
		describe('[prior seeds]', () => {
			const specSeedsInfo = testUtil.getJestSpecSeedsInfo(spec, __filename);
			specSeedsInfo.snapshotSeeds.forEach((info) => {
				const seed = info.seed;
				it(`${seed}`, () => {
					// Always run with a seed that has previously failed
					const result = commutativeCheckProperty({
						seed,
					});
					expect(result).toMatchSnapshot();
				});
			});
		});

	});

});
