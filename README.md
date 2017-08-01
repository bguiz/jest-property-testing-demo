# Jest property testing demo

## Run

```bash
# Install all dependencies
yarn install

# Run tests and then exit immediately
yarn test

# Run tests in watch mode, with auto-re-run, and interactive prompt
yarn test -- --watch
```

Let's inspect the snapshots to see what these are.
Open `__snapshots__/math.ppty.jest.js.snap` and see what the failures are.
Looks like there are some failures that occur when one of the parameters is `null`.
Now, the snapshots capture the *incorrect* behaviour.

So let's fix the system under test!
Edit `math.js`, and uncomment the `FIXME 1` section.
If Jest is running in watch mode, it should re-run the tests now,
and there should be some snapshot failures.
Hit the `u` key to update snapshots.
Now, the snapshots capture the *correct* behaviour.

## How it works

[TestCheck](https://github.com/leebyron/testcheck-js)
bring QuickCheck style property based testing to Javascript.
However, it *does not* give you the ability to save generated test cases
that have previously failed as example based tests.

[Jest](https://facebook.github.io/jest/)
is a testing framework that has the ability to save and update snapshots,
which are programmatically serialised test expectations.

This demo uses [snapshots](https://facebook.github.io/jest/docs/snapshot-testing.html)
in a creative manner
to persist (the seeds required to reproduce) failed generated test cases,
thereby generating example based test cases from them -
achieving the original objective.

## Reading material

The idea for this came about from the following:

- [QuickCheck](https://en.wikipedia.org/wiki/QuickCheck)
- [What is property](http://hypothesis.works/articles/what-is-property-based-testing/)
- [Producing example based tests from bulk tests](buff.ly/2tWpXGZ)

## Author

[Brendan Graetz](http://bguiz.com)

## Licence

GPL-3.0
